
"use client";

import React, { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function SignupForm({ className, ...props }: React.ComponentProps<"form">) {
  const supabase = createClient();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{type: 'error' | 'success', text: string} | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Basic client-side validation
    if (username.trim().length < 3) {
      setMessage({type: 'error', text: 'Username must be at least 3 characters long'});
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setMessage({type: 'error', text: 'Password must be at least 6 characters long'});
      setLoading(false);
      return;
    }

    try {
      // Supabase signup with user metadata
      const { data, error } = await supabase.auth.signUp({
        email: email.trim().toLowerCase(),
        password,
        options: { 
          data: { 
            username: username.trim(),
            full_name: username.trim()
          },
          emailRedirectTo: `${window.location.origin}/waitlist`
        },
      });

      if (error) {
        setMessage({type: 'error', text: error.message});
        setLoading(false);
        return;
      }

      if (data.user) {
        // Profile is automatically created by trigger!
        // But let's verify it was created and handle any edge cases
        
        // Wait a moment for trigger to complete
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Check if profile was created
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', data.user.id)
          .single();

        if (profileError && profileError.code === 'PGRST116') {
          // Profile doesn't exist, create it manually as fallback
          console.log('Trigger failed, creating profile manually...');
          const { error: manualInsertError } = await supabase
            .from("profiles")
            .insert([{ 
              id: data.user.id, 
              username: username.trim().toLowerCase(),
              email: email.trim().toLowerCase(),
              role: "Student"
            }]);
            
          if (manualInsertError) {
            console.error("Manual profile creation failed:", manualInsertError);
            setMessage({
              type: 'success', 
              text: 'Account created! Please check your email for verification. Profile setup in progress...'
            });
          } else {
            setMessage({
              type: 'success', 
              text: 'Account created successfully! Please check your email for verification.'
            });
          }
        } else {
          // Profile created successfully by trigger
          setMessage({
            type: 'success', 
            text: 'Account created successfully! Please check your email for verification.'
          });
        }
      }

      // Clear form on success
      setUsername("");
      setEmail("");
      setPassword("");

      // Redirect after showing success message
      setTimeout(() => {
        router.push("/login?message=Please check your email and verify your account before signing in");
      }, 3000);

  } catch (error: unknown) {
      console.error('Signup error:', error);
  let errorMsg = 'An unexpected error occurred';
  if (error instanceof Error) errorMsg = error.message;
  setMessage({type: 'error', text: errorMsg});
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/waitlist`
        }
      });
      
      if (error) {
        setMessage({type: 'error', text: error.message});
      }
  } catch (error: unknown) {
      setMessage({type: 'error', text: 'Google signup failed. Please try again.'});
    }
  };

  return (
    <form onSubmit={handleSignup} className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to create your account
        </p>
      </div>

      {/* Message Display */}
      {message && (
        <div className={`flex items-center gap-2 p-3 rounded-md text-sm ${
          message.type === 'error' 
            ? 'bg-red-50 border border-red-200 text-red-700 dark:bg-red-950/50 dark:border-red-800 dark:text-red-300'
            : 'bg-green-50 border border-green-200 text-green-700 dark:bg-green-950/50 dark:border-green-800 dark:text-green-300'
        }`}>
          {message.type === 'error' ? <AlertCircle className="w-4 h-4 flex-shrink-0" /> : <CheckCircle2 className="w-4 h-4 flex-shrink-0" />}
          <span>{message.text}</span>
        </div>
      )}

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="username">Username</Label>
          <Input 
            id="username" 
            type="text" 
            placeholder="rajnikanth" 
            required 
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
            disabled={loading}
            minLength={3}
          />
        </div>

        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="rajnikanth@gmail.com" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            disabled={loading}
          />
        </div>

        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Input 
            id="password" 
            type="password" 
            placeholder="••••••••" 
            required 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            disabled={loading}
            minLength={6}
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Creating..." : "Sign Up"}
        </Button>

        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>

        <Button 
          variant="outline" 
          type="button" 
          className="flex items-center gap-2" 
          onClick={handleGoogleSignup}
          disabled={loading}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="18" height="18" className="shrink-0">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.63 1.22 9.09 3.6l6.77-6.77C35.13 2.44 29.88 0 24 0 14.62 0 6.48 5.38 2.69 13.22l7.91 6.15C12.17 13.2 17.56 9.5 24 9.5z" />
            <path fill="#4285F4" d="M46.1 24.5c0-1.59-.14-3.11-.41-4.57H24v8.64h12.41c-.54 2.8-2.16 5.18-4.61 6.79l7.19 5.59c4.21-3.89 6.61-9.63 6.61-16.45z" />
            <path fill="#FBBC05" d="M10.6 28.63c-.48-1.41-.74-2.92-.74-4.48s.26-3.07.74-4.48l-7.91-6.15C1.46 16.64 0 20.17 0 24.15s1.46 7.51 3.99 10.63l7.91-6.15z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.19-5.59c-2 1.35-4.57 2.13-8.71 2.13-6.44 0-11.83-3.7-13.4-8.82l-7.91 6.15C6.48 42.62 14.62 48 24 48z" />
          </svg>
          <span>Sign up with Google</span>
        </Button>
      </div>
    </form>
  );
}


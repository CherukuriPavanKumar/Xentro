
"use client"

import React from "react"
import { createClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {

  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{type: 'error' | 'success' | 'info', text: string} | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    // Basic client-side validation
    if (!email.trim()) {
      setMessage({type: 'error', text: 'Please enter your email address'});
      setLoading(false);
      return;
    }

    if (!password) {
      setMessage({type: 'error', text: 'Please enter your password'});
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) {
        // Handle specific Supabase auth errors
        if (error.message.includes('Invalid login credentials')) {
          setMessage({type: 'error', text: 'Invalid email or password. Please try again.'});
        } else if (error.message.includes('Email not confirmed')) {
          setMessage({type: 'error', text: 'Please check your email and click the verification link before logging in.'});
        } else {
          setMessage({type: 'error', text: error.message});
        }
        setLoading(false);
        return;
      }

      if (data.user) {
        setMessage({type: 'success', text: 'Login successful! Redirecting...'});
        
        // Clear form on success
        setEmail("");
        setPassword("");

        // Redirect to dashboard or home
        setTimeout(() => {
          router.push("/waitlist"); // Redirect to waitlist
        }, 1000);
      }

  } catch (error: unknown) {
  let errorMsg = 'An unexpected error occurred';
  if (error instanceof Error) errorMsg = error.message;
  setMessage({type: 'error', text: errorMsg});
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
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
      setMessage({type: 'error', text: 'Google login failed. Please try again.'});
    }
  };

  const handleForgotPassword = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage({type: 'error', text: 'Please enter your email address first'});
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email.trim(), {
        redirectTo: `${window.location.origin}/auth/reset-password`,
      });

      if (error) {
        setMessage({type: 'error', text: error.message});
      } else {
        setMessage({type: 'success', text: 'Password reset email sent! Check your inbox.'});
      }
  } catch (error: unknown) {
      setMessage({type: 'error', text: 'Failed to send reset email. Please try again.'});
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className={cn("flex flex-col gap-6", className)} {...props}>
      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm">
          Enter your email below to login to your account
        </p>
      </div>

      {/* Message Display - Only shows when there's an actual error/success */}
      {message && (
        <div className={`flex items-center gap-2 p-3 rounded-md text-sm ${
          message.type === 'error' 
            ? 'bg-red-50 border border-red-200 text-red-700 dark:bg-red-950/50 dark:border-red-800 dark:text-red-300'
            : message.type === 'success'
            ? 'bg-green-50 border border-green-200 text-green-700 dark:bg-green-950/50 dark:border-green-800 dark:text-green-300'
            : 'bg-blue-50 border border-blue-200 text-blue-700 dark:bg-blue-950/50 dark:border-blue-800 dark:text-blue-300'
        }`}>
          {message.type === 'error' ? (
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
          ) : message.type === 'success' ? (
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
          )}
          <span>{message.text}</span>
        </div>
      )}

      {/* Form Fields */}
      <div className="grid gap-6">
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
            <a
              href="#"
              onClick={handleForgotPassword}
              className="ml-auto text-sm underline-offset-4 hover:underline disabled:opacity-50"
              style={{ opacity: loading ? 0.5 : 1, pointerEvents: loading ? 'none' : 'auto' }}
            >
              Forgot your password?
            </a>
          </div>
          <Input 
            id="password" 
            type="password" 
            required 
            onChange={(e) => setPassword(e.target.value)} 
            value={password}
            disabled={loading}
          />
        </div>

        {/* Submit Button */}
        <Button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Log In"}
        </Button>

        {/* Divider */}
        <div className="relative text-center text-sm">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <span className="relative bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>

        {/* Google Button */}
        <Button
          variant="outline"
          type="button"
          className="w-full flex items-center justify-center gap-2"
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="18"
            height="18"
            className="shrink-0"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.54 0 6.63 1.22 9.09 3.6l6.77-6.77C35.13 2.44 29.88 0 24 0 14.62 0 6.48 5.38 2.69 13.22l7.91 6.15C12.17 13.2 17.56 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.1 24.5c0-1.59-.14-3.11-.41-4.57H24v8.64h12.41c-.54 2.8-2.16 5.18-4.61 6.79l7.19 5.59c4.21-3.89 6.61-9.63 6.61-16.45z"
            />
            <path
              fill="#FBBC05"
              d="M10.6 28.63c-.48-1.41-.74-2.92-.74-4.48s.26-3.07.74-4.48l-7.91-6.15C1.46 16.64 0 20.17 0 24.15s1.46 7.51 3.99 10.63l7.91-6.15z"
            />
            <path
              fill="#34A353"
              d="M24 48c6.48 0 11.93-2.13 15.9-5.8l-7.19-5.59c-2 1.35-4.57 2.13-8.71 2.13-6.44 0-11.83-3.7-13.4-8.82l-7.91 6.15C6.48 42.62 14.62 48 24 48z"
            />
          </svg>
          <span>Login with Google</span>
        </Button>
      </div>

      {/* Signup Link */}
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="/signup" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  )
}

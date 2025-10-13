"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { RainbowButton } from "@/components/navbar/rainbow-button";
import { AnimatedThemeToggler } from "@/components/navbar/animated-theme-toggler";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export type NavItem = {
  name: string;
  link: string;
  icon?: React.ReactElement;
  ariaLabel?: string;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    const href = link || "";
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      const target = document.getElementById(id) || document.querySelector(href as string);
      if (target) {
        const navEl = document.querySelector("[data-floating-nav]") as HTMLElement | null;
        const offset = navEl ? navEl.getBoundingClientRect().height + 8 : 0;
        const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      try {
        history.pushState(null, "", href);
      } catch {}
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "flex items-center justify-between w-full max-w-6xl mx-auto mt-7 mb-6 rounded-full border border-white/10 bg-white/95 dark:bg-black/90 backdrop-blur-md shadow-[0_4px_25px_-5px_rgba(255,255,255,0.05)] px-8 py-3",
          className
        )}
        data-floating-nav
      >
        {/* Left - Logo */}
        <div className="flex-shrink-0">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-2xl font-bold text-black dark:text-white hover:opacity-90 transition-opacity"
          >
            <img 
              src="/XENTRO-WHITE.png" 
              alt="Xentro Logo" 
              className="w-7 h-7 object-contain drop-shadow-sm dark:hidden rounded-sm"
            />
            <img 
              src="/XENTRO-DARK.png" 
              alt="Xentro Logo" 
              className="w-7 h-7 object-contain drop-shadow-sm hidden dark:block rounded-sm"
            />
            <span className="tracking-tight">Xentro</span>
          </Link>
        </div>

        {/* Middle - Nav Links (Desktop) */}
        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((navItem, idx) => (
            <Link
              key={navItem.link ?? `nav-${idx}`}
              href={navItem.link}
              onClick={(e) => handleNavClick(e, navItem.link)}
              scroll={false}
              aria-label={navItem.ariaLabel ?? navItem.name}
              className={cn(
                "text-base font-medium transition-colors",
                "text-neutral-700 dark:text-neutral-100 hover:text-black dark:hover:text-white"
              )}
            >
              {navItem.name}
            </Link>
          ))}
        </div>

        {/* Right - Theme Toggler + CTA (Desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          <AnimatedThemeToggler />
          <Link href="/login">
            <RainbowButton>Get Started</RainbowButton>
          </Link>
        </div>

        {/* Right - Theme Toggler + Mobile Menu Button (Mobile) */}
        <div className="lg:hidden flex items-center space-x-3">
          <AnimatedThemeToggler />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-neutral-700 dark:text-neutral-100 hover:text-black dark:hover:text-white transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full max-w-6xl mx-auto overflow-hidden"
          >
            <div className="rounded-3xl border border-white/10 bg-white/95 dark:bg-black/90 backdrop-blur-md shadow-[0_4px_25px_-5px_rgba(255,255,255,0.05)] px-6 py-4 space-y-4">
              {navItems.map((navItem, idx) => (
                <Link
                  key={navItem.link ?? `mobile-nav-${idx}`}
                  href={navItem.link}
                  onClick={(e) => handleNavClick(e, navItem.link)}
                  scroll={false}
                  aria-label={navItem.ariaLabel ?? navItem.name}
                  className={cn(
                    "block text-base font-medium transition-colors py-2",
                    "text-neutral-700 dark:text-neutral-100 hover:text-black dark:hover:text-white"
                  )}
                >
                  {navItem.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="block">
                  <RainbowButton className="w-full">Get Started</RainbowButton>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

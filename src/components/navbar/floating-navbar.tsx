"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { RainbowButton } from "@/components/navbar/rainbow-button"
import { AnimatedThemeToggler } from "@/components/navbar/animated-theme-toggler";
import Link from "next/link";

export type NavItem = {
  name: string;
  link: string;
  icon?: React.ReactElement;
  ariaLabel?: string;
}

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {

  return (
    <motion.div
      initial={{
        opacity: 1,
        y: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      // add data attribute so we can compute offset for smooth scroll
      className={cn(
        "flex max-w-4xl w-full fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-8 py-1.5 items-center justify-center space-x-16",
        className
      )}
      data-floating-nav
    >
        {navItems.map((navItem, idx) => {
          const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
            const href = navItem.link || '';
            // If it's an in-page hash link, perform smooth scrolling and update the hash without full page navigation
            if (href.startsWith('#')) {
              e.preventDefault();
              const id = href.slice(1);
              const target = document.getElementById(id) || document.querySelector(href as string);
              if (target) {
                const navEl = document.querySelector('[data-floating-nav]') as HTMLElement | null;
                const offset = navEl ? navEl.getBoundingClientRect().height + 8 : 0;
                const top = (target as HTMLElement).getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
              }
              // update the hash in the URL without causing navigation
              try {
                history.pushState(null, '', href);
              } catch {}
            }
            // otherwise allow Link to handle navigation normally
          };

          return (
            <Link
              key={navItem.link ?? `nav-${idx}`}
              href={navItem.link}
              onClick={handleClick}
              scroll={false}
              aria-label={navItem.ariaLabel ?? navItem.name}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-slate-200 hover:text-slate-950"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-base font-medium">{navItem.name}</span>
            </Link>
          );
        })}
        <AnimatedThemeToggler />
        <Link href="/login">
          <RainbowButton>
            Get Started
          </RainbowButton>
        </Link>
    </motion.div>
  );
};

"use client";
import React from "react";
import { FloatingNav } from "../navbar/floating-navbar";
import { IconHome, IconMessage, IconUser , IconStar, IconCreditCard } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
      ariaLabel: "Navigate to home",
    },
    {
        name: "Features",
        link: "#features",
        icon: <IconStar className="h-4 w-4 text-neutral-500 dark:text-white" />,
        ariaLabel: "Navigate to features",
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
      ariaLabel: "Navigate to about",
    },
    {
        name: "Pricing",
        link: "#pricing",
        icon: <IconCreditCard className="h-4 w-4 text-neutral-500 dark:text-white" />,
        ariaLabel: "Navigate to pricing",
      },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
      ariaLabel: "Navigate to contact",
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}


"use client";
import { useScroll, useTransform } from "framer-motion";
import React from "react";
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect";

export function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.05], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.05], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.05], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.05], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.05], [0, 1.2]);

  return (
    <div
      // className="h-[400vh] bg-white dark:bg-black w-full border border-gray-200 dark:border-white/[0.1] rounded-md relative overflow-hidden"
      ref={ref}
    >
      <div className="sticky top-0 h-screen">
        <GoogleGeminiEffect
          pathLengths={[
            pathLengthFirst,
            pathLengthSecond,
            pathLengthThird,
            pathLengthFourth,
            pathLengthFifth,
          ]}
        />
      </div>
    </div>
  );
}

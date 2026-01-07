// components\reusable\SimpleReveal.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

/**
 * SimpleReveal - Minimal scroll animation for renovation/construction sites
 *
 * Features:
 * - Simple fade-in (opacity only or with minimal slide)
 * - Professional easing
 * - Triggers once per viewport
 * - Barely noticeable = perfect for trust-focused sites
 *
 * Usage:
 * <SimpleReveal>
 *   <YourContent />
 * </SimpleReveal>
 */

interface SimpleRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Optional delay in seconds
  slideAmount?: number; // Y offset in pixels (default: 15px)
}

export function SimpleReveal({
  children,
  className = "",
  delay = 0,
  slideAmount = 15,
}: SimpleRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px", // Start animation when element is 80px into viewport
  });

  // Professional, simple easing
  const simpleEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: slideAmount }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: slideAmount }}
      transition={{
        duration: 0.6,
        delay,
        ease: simpleEasing,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * SimpleStagger - For grids/lists that need minimal stagger
 * Use sparingly - only for card grids where slight stagger helps
 */

interface SimpleStaggerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number; // Delay between children (default: 0.08s)
}

export function SimpleStagger({
  children,
  className = "",
  staggerDelay = 0.08,
}: SimpleStaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  const simpleEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * SimpleItem - Individual item within SimpleStagger
 */

interface SimpleItemProps {
  children: ReactNode;
  className?: string;
}

export function SimpleItem({ children, className = "" }: SimpleItemProps) {
  const simpleEasing: [number, number, number, number] = [0.4, 0, 0.2, 1];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 15 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: simpleEasing,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

"use client";
import { AsciiArt } from "@/components/ui/ascii-art";
import chhavi from "../assets/chhavi_full_photo.png";

export function AsciiArtDemo() {
  return (
    <AsciiArt
      src={chhavi}
      resolution={100}
      color="var(--color-neutral-500)"
      animationStyle="matrix"
      animationDuration={1.5}
      animateOnView={false}
      className="mx-auto aspect-square w-full max-w-lg bg-neutral-950" />
  );
}

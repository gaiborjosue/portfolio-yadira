
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      className={cn(
        "block relative group/pin z-50 cursor-pointer transition-transform duration-300 ease-in-out",
        containerClassName,
        {
          "sm:hover:-translate-y-2": isHovered,
        }
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={href || "/"}
      target="_blank"
    >
      <div className="relative bg-black rounded-lg overflow-hidden shadow-lg">
        <div className={cn("relative z-10", className)}>{children}</div>
        {title && (
          <div className="absolute top-2 left-2 right-2 z-20">
            <span className="inline-block bg-zinc-800 text-white text-xs font-semibold px-2 py-1 rounded">
              {title}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
};


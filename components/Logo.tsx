import React from "react";

export const Logo = ({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) => {
  const isDark = variant === "dark";
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        className="w-8 h-8 sm:w-10 sm:h-10 shrink-0"
      >
        <path
          d="M 15 45 L 50 18 L 85 45"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 25 80 L 25 48 L 50 68 L 75 48 L 75 80"
          fill="none"
          stroke="#D4AF37"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex flex-col">
        <span
          className={`font-serif text-lg sm:text-xl font-bold tracking-wider leading-none ${
            isDark ? "text-white" : "text-[#070C12]"
          }`}
        >
          MAKAN
        </span>
        <span className="text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.22em] text-[#D4AF37] font-semibold mt-0.5 sm:mt-1 leading-none whitespace-nowrap">
          HOME RENTALS LTD
        </span>
      </div>
    </div>
  );
};

export default Logo;

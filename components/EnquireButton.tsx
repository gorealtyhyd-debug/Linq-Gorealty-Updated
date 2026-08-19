"use client";

import { useEnquiry } from "@/components/EnquiryProvider";
import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

export function EnquireButton({
  children,
  className,
  style,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const { openEnquiry } = useEnquiry();
  return (
    <button
      type="button"
      className={className}
      style={style}
      onClick={openEnquiry}
      {...rest}
    >
      {children}
    </button>
  );
}

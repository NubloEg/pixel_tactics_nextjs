import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

type UILinkProps = {
  className?: string;
  variant?: "primary";
  children?: ReactNode;
} & LinkProps;

export default function UILink({ className, ...props }: UILinkProps) {
  return <Link className={`${className}`} {...props}></Link>;
}

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

type HeaderProps = React.ComponentPropsWithoutRef<"header">;

const Header = React.forwardRef<HTMLElement, HeaderProps>(({ className, ...props }, ref) => {
  return <header ref={ref} className={cn("flex items-center justify-between border-b border-slate-200 pb-6 pt-2", className)} {...props} />;
});

type HeaderTitleProps = React.ComponentPropsWithRef<"p"> & {
  size?: "sm" | "md" | "lg";
};

const titleVariants = cva("flex flex-row items-center gap-2", {
  variants: {
    size: {
      sm: "text-base font-medium",
      md: "text-xl font-semibold",
      lg: "text-3xl font-semibold",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const HeaderTitle = ({ className, size, ...props }: HeaderTitleProps) => {
  return <section className={cn(titleVariants({ size, className }))} {...props} />;
};

type HeaderRightProps = React.ComponentPropsWithRef<"div">;

const HeaderRight = ({ className, ...props }: HeaderRightProps) => {
  return <aside className={cn("text-3 flex items-center gap-4", className)} {...props} />;
};

Header.displayName = "Header";
HeaderTitle.displayName = "HeaderTitle";
HeaderRight.displayName = "HeaderRight";

export { Header, HeaderRight, HeaderTitle };

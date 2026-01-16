import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const ctaButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "gradient-cta text-accent-foreground shadow-cta hover:shadow-cta-hover hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-soft hover:bg-secondary/80",
        outline:
          "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
        ghost:
          "text-primary hover:bg-primary/10",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-6 py-2 text-sm",
        lg: "h-14 px-10 py-4 text-lg",
        xl: "h-16 px-12 py-5 text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface CTAButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaButtonVariants> {
  asChild?: boolean;
}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(ctaButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
CTAButton.displayName = "CTAButton";

export { CTAButton, ctaButtonVariants };

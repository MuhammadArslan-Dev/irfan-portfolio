import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border/50 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:shadow-glow",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-hero text-background font-semibold hover:shadow-neon hover:scale-105 shadow-elevated neon-glow",
        glass: "glass hover:glass-elevated hover:shadow-hologram border-0 backdrop-blur-xl",
        neon: "bg-transparent border-2 border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-background hover:shadow-neon transition-all duration-300 neon-glow",
        "cyber-primary": "bg-gradient-primary text-background font-semibold hover:shadow-neon hover:scale-105 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-translate-x-full hover:before:translate-x-full before:transition-transform before:duration-500 before:ease-out neon-glow",
        "cyber-secondary": "border-2 border-neon-magenta bg-transparent text-neon-magenta hover:bg-neon-magenta hover:text-background hover:shadow-neon transition-all duration-300 relative before:absolute before:inset-0 before:rounded-xl before:border before:border-neon-cyan before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
        "cyber-ghost": "hover:bg-gradient-cyber hover:shadow-hologram text-foreground relative overflow-hidden before:absolute before:top-1/2 before:left-1/2 before:w-0 before:h-0 before:bg-neon-cyan/20 before:rounded-full before:transition-all before:duration-500 hover:before:w-full hover:before:h-full before:-translate-x-1/2 before:-translate-y-1/2",
        "hologram": "bg-gradient-hologram text-background font-semibold hover:shadow-hologram hover:scale-105 relative overflow-hidden hologram-effect",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

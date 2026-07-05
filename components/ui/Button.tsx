import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold rounded-[--radius-btn] transition-all duration-250 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary] disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[--primary] text-white hover:bg-[--primary-dark] shadow-md hover:shadow-lg hover:-translate-y-0.5",
        accent:
          "bg-[--accent] text-white hover:bg-[--accent-dark] shadow-md hover:shadow-lg hover:-translate-y-0.5",
        outline:
          "border-2 border-[--primary] text-[--primary] bg-transparent hover:bg-[--primary] hover:text-white",
        "outline-dark":
          "border-2 border-white/40 text-white bg-transparent hover:bg-white/10 hover:border-white/70",
        ghost:
          "text-[--primary] bg-transparent hover:bg-[--primary-muted]",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1ebe5d] shadow-md hover:shadow-lg hover:-translate-y-0.5",
        glass:
          "glass text-[--text-primary] hover:bg-white/90",
        "glass-dark":
          "glass-dark text-white hover:bg-white/15",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl",
        icon: "p-2.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  className, variant, size, href, target, rel, children, ...props
}: ButtonProps) {
  if (href) {
    return (
      <a href={href} target={target} rel={rel}
        className={cn(buttonVariants({ variant, size }), className)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}

export { buttonVariants };

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary:
          "bg-[--primary] text-white hover:bg-[--primary-dark] shadow-[0_2px_8px_rgba(0,113,227,0.20)] hover:shadow-[0_8px_24px_rgba(0,113,227,0.30)] hover:-translate-y-0.5 border border-transparent",
        accent:
          "bg-[--accent] text-white hover:bg-[--accent-dark] shadow-[0_2px_8px_rgba(5,150,105,0.20)] hover:shadow-[0_8px_24px_rgba(5,150,105,0.30)] hover:-translate-y-0.5 border border-transparent",
        outline:
          "border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 hover:text-[--primary] hover:border-[--primary]/25 shadow-sm",
        "outline-dark":
          "border border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40 backdrop-blur-md",
        ghost:
          "text-slate-600 bg-transparent hover:bg-slate-100/80 hover:text-[--text-primary]",
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1ebe5d] shadow-[0_2px_8px_rgba(37,211,102,0.20)] hover:shadow-[0_8px_24px_rgba(37,211,102,0.30)] hover:-translate-y-0.5 border border-transparent",
        glass:
          "glass text-[--text-primary] hover:bg-white/90 hover:shadow-md",
        "glass-dark":
          "glass-dark text-white hover:bg-white/15",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-5 py-2.5 md:px-6 md:py-2.5 text-sm md:text-[15px]",
        lg: "px-6 py-3 md:px-7 md:py-3.5 text-[15px] md:text-base",
        xl: "px-8 py-4 md:px-10 md:py-5 text-base md:text-lg",
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

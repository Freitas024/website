import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "outline";

interface ButtonBaseProps {
    variant?: Variant;
    children: ReactNode;
    icon?: ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = ButtonBaseProps &
    AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
    primary:
        "bg-[#7c3aed] text-white hover:bg-[#6d28d9] shadow-lg shadow-[#7c3aed]/25",
    outline:
        "bg-transparent text-slate-200 border border-white/[0.12] hover:bg-white/[0.06] hover:border-white/[0.2]",
};

export default function Button({
    variant = "primary",
    children,
    icon,
    className = "",
    ...props
}: ButtonProps) {
    const classes = `
    inline-flex items-center justify-center gap-2
    px-6 py-3 rounded-lg
    text-sm font-medium
    transition-all duration-200 ease-out
    cursor-pointer select-none
    ${variantClasses[variant]}
    ${className}
  `.trim();

    if ("href" in props && props.href) {
        const { href, ...rest } = props as ButtonAsLink;
        return (
            <a href={href} className={classes} {...rest}>
                {icon && <span className="flex-shrink-0">{icon}</span>}
                {children}
                <span className="ml-1">→</span>
            </a>
        );
    }

    const { ...rest } = props as ButtonAsButton;
    return (
        <button className={classes} {...rest}>
            {icon && <span className="flex-shrink-0">{icon}</span>}
            {children}
            <span className="ml-1">→</span>
        </button>
    );
}

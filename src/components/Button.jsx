export const Button = ({
  children,
  size = "default",
  variant = "primary",
  className = "",
  ...props
}) => {

  // Styles every button shares
  const baseClasses =
    "rounded-full font-medium transition-colors duration-200 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary " +
    "disabled:opacity-50 disabled:cursor-not-allowed";

  // Controls the button's size
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    icon: "h-11 w-11 p-0 text-lg",
  };

  // Controls the button's appearance
  const variantClasses = {
    primary:
      "bg-primary text-primary-foreground hover:bg-primary/90",

    secondary:
      "bg-surface text-foreground hover:bg-surface/80",

    outline:
      "border border-primary text-foreground hover:bg-primary/10",
  };

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

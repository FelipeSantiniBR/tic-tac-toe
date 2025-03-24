import type { ButtonProps } from "@/types/game-types";

export function Button({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "default",
}: ButtonProps) {
  const baseClasses =
    "font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    default: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline:
      "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    default: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

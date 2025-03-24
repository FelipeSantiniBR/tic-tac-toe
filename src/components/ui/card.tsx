import {
  CardContentProps,
  CardHeaderProps,
  CardProps,
  CardTitleProps,
} from "@/types/game-types";

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white border rounded-lg shadow-sm overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`p-6 border-b ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return <h3 className={`text-2xl font-semibold ${className}`}>{children}</h3>;
}

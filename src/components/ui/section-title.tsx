
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({ 
  title, 
  subtitle, 
  centered = false,
  className 
}: SectionTitleProps) {
  return (
    <div className={cn(
      "mb-12 space-y-2",
      centered && "text-center",
      className
    )}>
      <div className="flex items-center gap-2">
        <div className="h-1 w-8 rounded-full bg-primary" />
        <h2 className="heading-lg text-balance">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

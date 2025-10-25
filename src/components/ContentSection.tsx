import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  variant?: "default" | "highlight";
}

export const ContentSection = ({ title, children, variant = "default" }: ContentSectionProps) => {
  return (
    <section className={`container mx-auto px-4 py-8 ${variant === "highlight" ? "bg-accent/20 -mx-4 px-8 rounded-2xl" : ""}`}>
      <h2 className="font-lora font-bold text-3xl md:text-4xl text-foreground mb-6">
        {title}
      </h2>
      <div className="font-montserrat text-base md:text-lg text-foreground/80 leading-relaxed space-y-4">
        {children}
      </div>
    </section>
  );
};

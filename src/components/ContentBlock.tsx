import { ReactNode } from "react";

interface ContentBlockProps {
  title?: string;
  children: ReactNode;
}

export const ContentBlock = ({ title, children }: ContentBlockProps) => {
  return (
    <div className="mb-6">
      {title && (
        <h3 className="font-lora font-semibold text-xl md:text-2xl text-foreground mb-3">
          {title}
        </h3>
      )}
      <div className="font-montserrat text-base md:text-lg text-foreground/80 leading-relaxed">
        {children}
      </div>
    </div>
  );
};

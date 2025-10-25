import { Badge } from "@/components/ui/badge";

interface HeroProps {
  badge: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  imageSrc: string;
  imageAlt: string;
}

export const Hero = ({ badge, title, subtitle, author, date, imageSrc, imageAlt }: HeroProps) => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <Badge variant="secondary" className="mb-4 font-montserrat font-medium">
            {badge}
          </Badge>
          <h1 className="font-lora font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 leading-tight">
            {title}
          </h1>
          <p className="font-montserrat text-base md:text-lg text-foreground/80 mb-6 leading-relaxed">
            {subtitle}
          </p>
          <p className="font-montserrat text-sm text-muted-foreground">
            By <span className="font-semibold">{author}</span> • Posted {date}
          </p>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-[280px] md:h-[400px] object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

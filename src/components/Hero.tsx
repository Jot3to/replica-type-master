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
    <section className="container mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-16">
      <Badge variant="secondary" className="mb-4 md:mb-6 font-montserrat font-medium">
        {badge}
      </Badge>
      
      <div className="grid md:grid-cols-2 gap-6 md:gap-16 items-start mb-6 md:mb-8">
        <div className="order-2 md:order-1">
          <h1 className="font-lora font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
            {title}
          </h1>
        </div>
        <div className="order-1 md:order-2">
          <img 
            src={imageSrc} 
            alt={imageAlt}
            className="w-full h-[280px] md:h-[380px] object-cover rounded-3xl shadow-lg"
          />
        </div>
      </div>
      
      <div className="max-w-3xl">
        <p className="font-montserrat text-base md:text-lg text-foreground/80 mb-4 leading-relaxed">
          {subtitle}
        </p>
        <p className="font-montserrat text-sm text-muted-foreground">
          By <span className="font-semibold">{author}</span> • Posted {date}
        </p>
      </div>
    </section>
  );
};

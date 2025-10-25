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
    <section className="bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <Badge variant="secondary" className="mb-4 md:mb-6 font-montserrat font-medium">
              {badge}
            </Badge>
            
            <h1 className="font-lora font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-6">
              {title}
            </h1>
            
            <p className="font-montserrat text-base md:text-lg text-foreground/80 mb-4 leading-relaxed">
              {subtitle}
            </p>
            
            <p className="font-montserrat text-sm text-muted-foreground">
              By <span className="font-semibold">{author}</span> • Posted {date}
            </p>
          </div>
          
          <div>
            <img 
              src={imageSrc} 
              alt={imageAlt}
              className="w-full h-[280px] md:h-[380px] object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

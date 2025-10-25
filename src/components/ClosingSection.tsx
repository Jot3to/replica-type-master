interface ClosingSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  content: string;
  authorNote: string;
  ctaText: string;
}

export const ClosingSection = ({ imageSrc, imageAlt, title, content, authorNote, ctaText }: ClosingSectionProps) => {
  return (
    <section className="bg-accent/60 py-12 md:py-16 mt-12">
      <div className="px-6 md:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mx-auto">
          <div className="order-2 md:order-1">
            <img 
              src={imageSrc} 
              alt={imageAlt}
              className="w-full h-[300px] md:h-[400px] object-cover rounded-3xl shadow-lg"
            />
            <p className="font-montserrat text-sm text-foreground/70 mt-4 text-center">
              {authorNote}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-lora font-bold text-3xl md:text-4xl text-card-foreground mb-4">
              {title}
            </h2>
            <p className="font-montserrat text-base md:text-lg text-card-foreground/80 mb-6 leading-relaxed">
              {content}
            </p>
            <div className="bg-secondary/80 p-6 rounded-2xl">
              <p className="font-montserrat text-card-foreground font-medium leading-relaxed">
                {ctaText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

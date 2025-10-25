interface FeaturedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const FeaturedImage = ({ src, alt, className = "" }: FeaturedImageProps) => {
  return (
    <div className={`my-8 ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="w-full max-w-2xl mx-auto h-[300px] md:h-[450px] object-cover rounded-3xl shadow-lg"
      />
    </div>
  );
};

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  images: string[];
  title?: string;
  description?: string;
  showMultiple?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ 
  images, 
  title, 
  description, 
  showMultiple = false 
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Convert GitHub blob URLs to raw content URLs
  const getImageUrl = useCallback((url: string) => {
    return url.replace(
      'https://github.com/qbi777/ISRO---CANSAT/blob/main/',
      'https://raw.githubusercontent.com/qbi777/ISRO---CANSAT/main/'
    );
  }, []);

  // Filter out PDF files which can't be displayed as images
  const filteredImages = images.filter(img => !img.endsWith('.pdf'));

  // Preload a single image and track its loading state
  const preloadImage = useCallback(async (src: string) => {
    if (loadedImages.has(src)) return;

    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = getImageUrl(src);
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, src]));
        resolve(src);
      };
      img.onerror = reject;
    });
  }, [getImageUrl, loadedImages]);

  // Preload visible images first, then load the rest in the background
  useEffect(() => {
    const loadVisibleImages = async () => {
      try {
        // Load current image and next image first
        const currentImage = filteredImages[activeIndex];
        const nextImage = filteredImages[(activeIndex + 1) % filteredImages.length];
        
        await Promise.all([
          currentImage && preloadImage(currentImage),
          nextImage && preloadImage(nextImage)
        ]);

        setIsLoading(false);

        // Load remaining images in the background
        const remainingImages = filteredImages.filter((_, i) => 
          i !== activeIndex && i !== (activeIndex + 1) % filteredImages.length
        );

        remainingImages.forEach(img => {
          preloadImage(img).catch(console.error);
        });
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoading(false);
      }
    };

    loadVisibleImages();
  }, [filteredImages, activeIndex, preloadImage]);

  const next = () => {
    setActiveIndex((current) => (current + 1) % filteredImages.length);
  };

  const prev = () => {
    setActiveIndex((current) => (current - 1 + filteredImages.length) % filteredImages.length);
  };

  // Auto advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col">
      {(title || description) && (
        <div className="text-center mb-8">
          {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
          {description && <p className="max-w-2xl mx-auto text-gray-300">{description}</p>}
        </div>
      )}

      <div className="relative">
        {isLoading ? (
          <div className="flex justify-center items-center h-80">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-space-glow"></div>
          </div>
        ) : (
          <div className="relative overflow-hidden w-full">
            <div 
              className={`flex transition-transform duration-500 ease-in-out ${
                showMultiple ? 'justify-center flex-wrap gap-4' : ''
              }`}
            >
              {showMultiple ? (
                // Grid view for gallery
                filteredImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)] h-64 md:h-80 p-2"
                  >
                    <div className="relative h-full w-full rounded-lg overflow-hidden border border-space-blue/30 glow-border">
                      <img 
                        src={getImageUrl(image)} 
                        alt={`Image ${index + 1}`}
                        className={`h-full w-full object-cover object-center transition-opacity duration-300 ${
                          loadedImages.has(image) ? 'opacity-100' : 'opacity-0'
                        }`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg';
                        }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                // Single image view
                <div className="relative w-full h-80 md:h-96">
                  <img 
                    src={getImageUrl(filteredImages[activeIndex])} 
                    alt={`Image ${activeIndex + 1}`}
                    className={`h-full w-full object-contain mx-auto rounded-lg border border-space-blue/30 glow-border transition-opacity duration-300 ${
                      loadedImages.has(filteredImages[activeIndex]) ? 'opacity-100' : 'opacity-0'
                    }`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg';
                    }}
                  />

                  {/* Image pagination indicators */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {filteredImages.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full ${
                          index === activeIndex ? 'bg-space-glow' : 'bg-gray-600'
                        }`}
                        onClick={() => setActiveIndex(index)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {!showMultiple && filteredImages.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
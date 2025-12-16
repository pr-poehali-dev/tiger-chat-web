import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

interface MemberGalleryProps {
  gallery: string[];
  memberName: string;
}

export const MemberGallery = ({ gallery, memberName }: MemberGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const preloadImage = (src: string) => {
      if (!src.includes('drive.google.com') && !src.endsWith('.mp4')) {
        const img = new Image();
        img.src = src;
      }
    };

    const nextIndex = (currentImageIndex + 1) % gallery.length;
    const prevIndex = (currentImageIndex - 1 + gallery.length) % gallery.length;
    
    preloadImage(gallery[nextIndex]);
    preloadImage(gallery[prevIndex]);
  }, [currentImageIndex, gallery]);

  const handleNextImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handlePrevImage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      handleNextImage();
    }
    if (touchStart - touchEnd < -75) {
      handlePrevImage();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevImage();
    if (e.key === 'ArrowRight') handleNextImage();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentImageIndex]);

  return (
    <div className="pt-6 border-t">
      <h3 className="text-lg font-semibold mb-4 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <Icon name="Image" size={20} />
          Галерея
        </span>
        <span className="text-sm text-muted-foreground">
          {currentImageIndex + 1} / {gallery.length}
        </span>
      </h3>
      <div 
        className="relative touch-pan-y group"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
          {gallery[currentImageIndex].includes('drive.google.com') ? (
            <iframe
              src={`https://drive.google.com/file/d/${gallery[currentImageIndex].match(/\/d\/([^/]+)/)?.[1]}/preview`}
              className="w-full h-[300px] md:h-[450px] rounded-lg"
              allow="autoplay"
            />
          ) : gallery[currentImageIndex].endsWith('.mp4') ? (
            <video
              key={currentImageIndex}
              src={gallery[currentImageIndex]}
              className="w-full h-[300px] md:h-[450px] object-contain rounded-lg bg-muted"
              controls
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={gallery[currentImageIndex]}
              alt={`${memberName} - фото ${currentImageIndex + 1}`}
              className="w-full h-[300px] md:h-[450px] object-contain rounded-lg bg-muted"
              loading="eager"
            />
          )}
        </div>
        
        {gallery.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              disabled={isTransitioning}
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background disabled:opacity-50 p-2 md:p-3 rounded-full transition-all shadow-lg opacity-0 group-hover:opacity-100"
              aria-label="Предыдущее фото"
            >
              <Icon name="ChevronLeft" size={24} />
            </button>
            <button
              onClick={handleNextImage}
              disabled={isTransitioning}
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background disabled:opacity-50 p-2 md:p-3 rounded-full transition-all shadow-lg opacity-0 group-hover:opacity-100"
              aria-label="Следующее фото"
            >
              <Icon name="ChevronRight" size={24} />
            </button>
            
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
              {gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentImageIndex(index);
                      setTimeout(() => setIsTransitioning(false), 300);
                    }
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-background/50 w-1.5 hover:bg-background/70'
                  }`}
                  aria-label={`Перейти к фото ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-thin snap-x snap-mandatory">
        {gallery.map((photo, index) => (
          <button
            key={index}
            className={`relative min-w-[70px] w-[70px] h-[70px] md:min-w-[90px] md:w-[90px] md:h-[90px] rounded-lg cursor-pointer transition-all snap-start flex-shrink-0 ${
              index === currentImageIndex 
                ? 'ring-2 ring-primary scale-105 shadow-lg' 
                : 'opacity-50 hover:opacity-100 hover:scale-105'
            }`}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setCurrentImageIndex(index);
                setTimeout(() => setIsTransitioning(false), 300);
              }
            }}
          >
            {photo.includes('drive.google.com') ? (
              <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                <Icon name="Video" size={24} className="text-muted-foreground" />
              </div>
            ) : photo.endsWith('.mp4') ? (
              <>
                <video
                  src={photo}
                  className="w-full h-full object-cover rounded-lg"
                  muted
                  preload="metadata"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name="Play" size={20} className="text-white drop-shadow-lg" />
                </div>
              </>
            ) : (
              <img
                src={photo}
                alt={`${memberName} - миниатюра ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

import { useState, useEffect, useRef } from 'react';
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
  const [isZoomed, setIsZoomed] = useState(false);
  const [scale, setScale] = useState(1);
  const [lastTap, setLastTap] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const initialDistanceRef = useRef(0);
  const initialScaleRef = useRef(1);

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

  const handleDoubleTap = () => {
    if (isZoomed) {
      setIsZoomed(false);
      setScale(1);
    } else {
      setIsZoomed(true);
      setScale(2);
    }
  };

  const getDistance = (touches: React.TouchList) => {
    const touch1 = touches[0];
    const touch2 = touches[1];
    return Math.sqrt(
      Math.pow(touch2.clientX - touch1.clientX, 2) +
      Math.pow(touch2.clientY - touch1.clientY, 2)
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      initialDistanceRef.current = getDistance(e.touches);
      initialScaleRef.current = scale;
      return;
    }

    if (e.touches.length === 1) {
      const now = Date.now();
      const timeSinceLastTap = now - lastTap;
      
      if (timeSinceLastTap < 300 && timeSinceLastTap > 0) {
        handleDoubleTap();
        setLastTap(0);
      } else {
        setLastTap(now);
      }
      
      setTouchStart(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialDistanceRef.current > 0) {
      e.preventDefault();
      const currentDistance = getDistance(e.touches);
      const scaleChange = currentDistance / initialDistanceRef.current;
      const newScale = Math.min(Math.max(initialScaleRef.current * scaleChange, 1), 4);
      setScale(newScale);
      setIsZoomed(newScale > 1);
      return;
    }

    if (e.touches.length === 1 && !isZoomed) {
      setTouchEnd(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (initialDistanceRef.current > 0) {
      initialDistanceRef.current = 0;
      initialScaleRef.current = scale;
      return;
    }

    if (!isZoomed && touchStart - touchEnd > 75) {
      handleNextImage();
    }
    if (!isZoomed && touchStart - touchEnd < -75) {
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

  useEffect(() => {
    setIsZoomed(false);
    setScale(1);
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
        ref={imageContainerRef}
        className="relative touch-pan-y group"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'} relative rounded-lg overflow-hidden bg-muted ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`} style={{ maxHeight: '60vh', aspectRatio: '4/3' }}>
          <div 
            className="absolute inset-0 transition-transform duration-300 ease-out"
            style={{ 
              transform: `scale(${scale})`,
              transformOrigin: 'center center'
            }}
          >
          {gallery[currentImageIndex].includes('drive.google.com') ? (
            <iframe
              src={`https://drive.google.com/file/d/${gallery[currentImageIndex].match(/\/d\/([^/]+)/)?.[1]}/preview`}
              className="absolute inset-0 w-full h-full"
              allow="autoplay"
            />
          ) : gallery[currentImageIndex].endsWith('.mp4') ? (
            <video
              key={currentImageIndex}
              src={gallery[currentImageIndex]}
              className="absolute inset-0 w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={gallery[currentImageIndex]}
              alt={`${memberName} - фото ${currentImageIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              onClick={handleDoubleTap}
            />
          )}
          </div>
        </div>
        
        {gallery.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              disabled={isTransitioning || isZoomed}
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background disabled:opacity-50 p-2 md:p-3 rounded-full transition-all shadow-lg md:opacity-0 md:group-hover:opacity-100"
              aria-label="Предыдущее фото"
            >
              <Icon name="ChevronLeft" size={20} className="md:w-6 md:h-6" />
            </button>
            <button
              onClick={handleNextImage}
              disabled={isTransitioning || isZoomed}
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background disabled:opacity-50 p-2 md:p-3 rounded-full transition-all shadow-lg md:opacity-0 md:group-hover:opacity-100"
              aria-label="Следующее фото"
            >
              <Icon name="ChevronRight" size={20} className="md:w-6 md:h-6" />
            </button>
            
            <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 bg-background/20 backdrop-blur-sm px-3 py-2 rounded-full">
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
                  className={`h-2 rounded-full transition-all ${
                    index === currentImageIndex 
                      ? 'bg-primary w-8' 
                      : 'bg-background/60 w-2 hover:bg-background/80'
                  }`}
                  aria-label={`Перейти к фото ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      <div className="flex gap-2 md:gap-3 mt-4 overflow-x-auto pb-2 scrollbar-thin snap-x snap-mandatory -mx-1 px-1">
        {gallery.map((photo, index) => (
          <button
            key={index}
            className={`relative min-w-[80px] w-[80px] h-[60px] md:min-w-[120px] md:w-[120px] md:h-[90px] rounded-lg cursor-pointer transition-all snap-start flex-shrink-0 overflow-hidden ${
              index === currentImageIndex 
                ? 'ring-2 ring-primary scale-105 shadow-lg' 
                : 'opacity-60 hover:opacity-100 hover:scale-105'
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
              <div className="w-full h-full bg-muted flex items-center justify-center">
                <Icon name="Video" size={20} className="text-muted-foreground" />
              </div>
            ) : photo.endsWith('.mp4') ? (
              <>
                <video
                  src={photo}
                  className="w-full h-full object-cover"
                  muted
                  preload="metadata"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Icon name="Play" size={16} className="text-white drop-shadow-lg" />
                </div>
              </>
            ) : (
              <img
                src={photo}
                alt={`${memberName} - миниатюра ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
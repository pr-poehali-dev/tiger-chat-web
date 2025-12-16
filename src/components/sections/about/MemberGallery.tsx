import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface MemberGalleryProps {
  gallery: string[];
  memberName: string;
}

export const MemberGallery = ({ gallery, memberName }: MemberGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
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

  return (
    <div className="pt-6 border-t">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Icon name="Image" size={20} />
        Галерея ({currentImageIndex + 1} / {gallery.length})
      </h3>
      <div 
        className="relative touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {gallery[currentImageIndex].includes('drive.google.com') ? (
          <iframe
            src={`https://drive.google.com/file/d/${gallery[currentImageIndex].match(/\/d\/([^/]+)/)?.[1]}/preview`}
            className="w-full h-[300px] md:h-[400px] rounded-lg"
            allow="autoplay"
          />
        ) : gallery[currentImageIndex].endsWith('.mp4') ? (
          <video
            src={gallery[currentImageIndex]}
            className="w-full h-[300px] md:h-[400px] object-contain rounded-lg bg-muted"
            controls
            playsInline
          />
        ) : (
          <img
            src={gallery[currentImageIndex]}
            alt={`${memberName} - фото ${currentImageIndex + 1}`}
            className="w-full h-[300px] md:h-[400px] object-contain rounded-lg bg-muted"
            loading="lazy"
          />
        )}
        
        {gallery.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-1.5 md:p-2 rounded-full transition-colors shadow-lg"
              aria-label="Предыдущее фото"
            >
              <Icon name="ChevronLeft" size={20} className="md:w-6 md:h-6" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background p-1.5 md:p-2 rounded-full transition-colors shadow-lg"
              aria-label="Следующее фото"
            >
              <Icon name="ChevronRight" size={20} className="md:w-6 md:h-6" />
            </button>
          </>
        )}
      </div>
      
      <div className="flex gap-2 mt-4 overflow-x-auto pb-2 scrollbar-thin">
        {gallery.map((photo, index) => (
          <div
            key={index}
            className={`relative min-w-[60px] w-[60px] h-[60px] md:min-w-[80px] md:w-20 md:h-20 rounded cursor-pointer transition-all ${
              index === currentImageIndex 
                ? 'ring-2 ring-primary scale-105' 
                : 'opacity-60 hover:opacity-100'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          >
            {photo.endsWith('.mp4') ? (
              <>
                <video
                  src={photo}
                  className="w-full h-full object-cover rounded"
                  muted
                />
                <Icon name="Play" size={16} className="absolute inset-0 m-auto text-white drop-shadow-lg" />
              </>
            ) : (
              <img
                src={photo}
                alt={`${memberName} - миниатюра ${index + 1}`}
                className="w-full h-full object-cover rounded"
                loading="lazy"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

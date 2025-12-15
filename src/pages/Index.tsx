import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import MediaSection from '@/components/sections/MediaSection';
import AudioSection from '@/components/sections/AudioSection';
import ScheduleSection from '@/components/sections/ScheduleSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <MediaSection />
      <AudioSection />
      <ScheduleSection />
    </div>
  );
};

export default Index;
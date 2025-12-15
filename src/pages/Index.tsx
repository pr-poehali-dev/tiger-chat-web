import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import MediaSection from '@/components/sections/MediaSection';
import ScheduleSection from '@/components/sections/ScheduleSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <MediaSection />
      <ScheduleSection />
    </div>
  );
};

export default Index;
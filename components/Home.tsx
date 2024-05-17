import { HeroSection } from '@/components/HeroSection';
import { OurStory } from '@/components/OurStory';
import { Popular } from '@/components/Popular';
import { OurReviews } from '@/components/OurReviews';
import { TableBook } from '@/components/TableBook';

export function Home() {
  return (
    <div>
      <HeroSection />
      <OurStory />
      <Popular />
      <OurReviews />
      <TableBook />

    </div>

  );
};

export default Home;
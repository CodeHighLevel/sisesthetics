import Hero from '@/components/Hero';
import FeaturedServices from '@/components/FeaturedServices';
import CTABanner from '@/components/CTABanner';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import GiftCards from '@/components/GiftCards';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedServices />
      <CTABanner />
      <Team />
      <Testimonials />
      <Gallery />
      <GiftCards />
      <CTABanner />
    </main>
  );
}

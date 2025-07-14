import HeroSection from '../components/HeroSection'
import PartnerSection from '../components/PartnerSection'
import AboutUs from '@/components/AboutUs';
import ServiceSection from '@/components/ServiceSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ProjectSection from '@/components/ProjectSection';
import MeetTeamSection from '@/components/MeetTeamSection';
import TestimonialSection from '@/components/TestimonialSection';
import BlogSection from '@/components/BlogSection';
import RequestCallbackSection from '@/components/RequestCallback';


export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PartnerSection />
      <AboutUs />
      <ServiceSection />
      <WhyChooseUsSection />
      {/* <ProjectSection /> */}
      <MeetTeamSection />
      <TestimonialSection />
      <BlogSection />
      <RequestCallbackSection />
    </>
  );
}

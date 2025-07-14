import AboutUs from "@/components/AboutUs";
import MeetTeamSection from "@/components/MeetTeamSection";
import PartnerSection from "@/components/PartnerSection";
import ServiceSection from "@/components/ServiceSection";
import TestimonialCarousel from "@/components/TestimonialSection";


import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="p-8">
      <div className="h-[200px] flex flex-col justify-center px-8">
        <h1 className="text-3xl font-bold text-dblue mb-2">About Us</h1>
        <div className="flex items-center gap-2 text-lg">
          <Link href="/" className="text-dblue font-bold">
            Pitambara Techno Legal Consultancy LLP
          </Link>
          <span className="text-dblue">{'>'}</span>
          <span className="text-dyellow font-semibold">About Us</span>
        </div>
      </div>

      <AboutUs />
      <ServiceSection />
      <MeetTeamSection />
      <TestimonialCarousel />
      <PartnerSection />
    </main>
  );
}


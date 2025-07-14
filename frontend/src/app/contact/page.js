import Link from "next/link";
import Locations from "@/components/Contact/Location";
import ReachUsSection from "@/components/Contact/ReachUsSection";

export default function ContactUs() {
    return (
        <main className="p-8">
      <div className="h-[200px] flex flex-col justify-center px-8">
        <h1 className="text-3xl font-bold text-dblue mb-2">Contact Us</h1>
        <div className="flex items-center gap-2 text-lg">
          <Link href="/" className="text-dblue font-bold">
            Pitambara Techno Legal Consultancy LLP
          </Link>
          <span className="text-dblue">{'>'}</span>
          <span className="text-dyellow font-semibold">Contact Us</span>
        </div>
      </div>
      <Locations />
      <ReachUsSection />
      </main>
    )
}
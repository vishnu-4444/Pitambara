"use client";

import Link from "next/link";
import SServiceSection from "@/components/Service/SServiceSection";
import Trust from "@/components/Service/Trust";

export default function Service() {
    return (
            <main className="p-8">
      <div className="h-[200px] flex flex-col justify-center px-8">
        <h1 className="text-3xl font-bold text-dblue mb-2">Our Services</h1>
        <div className="flex items-center gap-2 text-lg">
          <Link href="/" className="text-dblue font-bold">
            Pitambara Techno Legal Consultancy LLP
          </Link>
          <span className="text-dblue">{'>'}</span>
          <span className="text-dyellow font-semibold">Services</span>
        </div>
      </div>
        <SServiceSection />
        <Trust />
        </main>
    )
}
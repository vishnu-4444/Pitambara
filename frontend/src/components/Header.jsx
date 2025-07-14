"use client";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo with Home link */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="Pitambara Logo" width={50} height={50} />
          <div className="leading-tight">
            <h1 className="font-bold text-sm text-gray-900">PITAMBARA</h1>
            <p className="text-xs text-gray-600">Techno-Legal Consultancy LLP</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex gap-10 text-lg font-bold text-gray-900">
  <Link href="/" className="hover:text-dyellow transition-colors">Home</Link>
  <Link href="/about" className="hover:text-dyellow transition-colors">About Us</Link>
  <Link href="/services" className="hover:text-dyellow transition-colors">Services</Link>
  {/* <Link href="/training" className="hover:text-dyellow transition-colors">Training</Link> */}
  <Link href="/blog" className="hover:text-dyellow transition-colors">Blog</Link>
  <Link href="/contact" className="hover:text-dyellow transition-colors">Contact</Link>
</nav>


        {/* Right Icons + Button */}
        <div className="flex items-center gap-4">
        <button>
            <Image src="/search.png" alt="Search Icon" width={24} height={24} />
        </button>

        <button>
            <Image src="/menu.png" alt="Menu Icon" width={24} height={24} />
        </button>


          {/* Fancy Hover Button */}
        <Link href="/contact">
            <button className="relative overflow-hidden px-4 py-3 text-white font-semibold text-sm rounded-lg bg-[#f8a404] group">
                <span className="absolute inset-0 bg-[#201c8c] origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-800 ease-in-out z-0" />
                <span className="relative z-10">LET’S TALK</span>
            </button>
        </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;

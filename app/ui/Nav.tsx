import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="hidden md:block max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center py-6 relative h-[100px]">
          {/* Left Navigation Links */}
          <Link
            href="/about"
            className="text-base font-medium text-black underline"
          >
            About Us
          </Link>
          <Link
            href="/team"
            className="text-base font-medium text-black underline"
          >
            Our Team
          </Link>
          <Link
            href="/join"
            className="text-base font-medium text-black underline"
          >
            Join Us
          </Link>

          {/* Center Logo as Link */}
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png" // Make sure it's 183x240 in /public/images/
              alt="Logo"
              width={55} // You can tweak this for ideal height
              height={72}
              priority
            />
          </Link>

          {/* Right Navigation Links */}
          <Link
            href="/projects"
            className="text-base font-medium text-black underline"
          >
            Projects
          </Link>
          <Link
            href="/publications"
            className="text-base font-medium text-black underline"
          >
            Publications
          </Link>
          <Link
            href="/articles"
            className="text-base font-medium text-black underline"
          >
            Articles
          </Link>
        </div>
      </div>
    </nav>
  );
}

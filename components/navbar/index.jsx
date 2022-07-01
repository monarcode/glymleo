import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
function Navbar() {
  return (
    <div className="h-28 bg-black/20 items-center flex fixed top-0 left-0 right-0 z-50">
      <div className="container flex mx-auto text-white items-center justify-between">
        <div className="flex items-center gap-8">
          <img className="w-[150px]" src="/logo-white.png" alt="logo" />
          <div className="hidden lg:block space-x-6 text-sm">
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/#about">
              <a>About Us</a>
            </Link>
            <Link href="/#featured">
              <a>Featured listings</a>
            </Link>
            <Link href="/#testimonials">
              <a>Tesimonials</a>
            </Link>
          </div>
        </div>

        <Link href="/showroom">
          <a className="hidden lg:block bg-white p-4 px-6 rounded-full text-dark hover:bg-highlight hover:text-white transition-all">
            Showroom
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

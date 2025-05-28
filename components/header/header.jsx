'use client';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { DesktopNavbar, MobileNavbar } from './navbar';
import { usePathname } from 'next/navigation';


const Header = () => {

  const [toggleNavItmes, setToggleNavItmes] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);
  const pathName = usePathname()

  const handleToggleNavItems = () => {
    setToggleNavItmes(!toggleNavItmes);
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setToggleNavItmes(false);
      }
    };
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // console.log(scrollTop);
      const trashold = 5;
      if (scrollTop > trashold) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };
    handleScroll()
    handleResize()
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`z-50 sticky top-0 ${navbarBackground || pathName === '/services' || pathName === '/contact' ? 'bg-[var(--secondry-hover)] text-[var(--surface)]' : 'bg-transparent text-[var(--primary)]'} ${navbarBackground && 'shadow-lg'} transition-all duration-500 ease-in-out'`}>
      <div className="container mx-auto">
        <nav>
          <div className={`flex justify-between items-center py-4 px-2`}><Link href='/' className='grid place-items-center relative w-[177.125px] h-[48px]'>
            <Image
              src="/images/logo/logo-white.png"
              alt="Logo White"
              width={177.125}
              height={48}
              className={`object-contain transition-opacity duration-300 ease-in-out ${navbarBackground || pathName === '/services' || pathName === '/contact' ? 'opacity-0' : 'opacity-100'}`}
            />
            <Image
              src="/images/logo/logo-black.png"
              alt="Logo Black"
              width={177.125}
              height={48}
              className={`object-contain transition-opacity duration-300 ease-in-out absolute top-0 left-0 ${navbarBackground || pathName === '/services' || pathName === '/contact' ? 'opacity-100' : 'opacity-0'}`}
            />
          </Link>
            <div>
              <DesktopNavbar />
            </div>
            <div onClick={handleToggleNavItems} className='block cursor-pointer md:hidden pr-2'>
              <FontAwesomeIcon icon={faBars} className='text-2xl text-current' size='2x' />
            </div>
            <MobileNavbar handleToggleNavItems={handleToggleNavItems} toggleNavItmes={toggleNavItmes} />
            <button className='sidebar-form-open cursor-pointer bg-red-600 hover:bg-[var(--accent-hover)] text-white transition-all duration-100 ease-in-out lg:text-base text-sm px-3 lg:px-6 py-1 lg:py-2 rounded-lg font-semibold hidden md:block'>
              Get in Touch
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;

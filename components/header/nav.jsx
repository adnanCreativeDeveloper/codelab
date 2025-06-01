'use client';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { DesktopNavbar, MobileNavbar } from './navbar';
import { usePathname } from 'next/navigation';

export default function Nav({ slugs }) {

    const [toggleNavItems, setToggleNavItems] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState(false);
    const pathName = usePathname()
    const isColoredRoute = slugs.includes(pathName);

    const handleToggleNavItems = () => {
        setToggleNavItems(!toggleNavItems);
        console.log('first')
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setToggleNavItems(false);
            }
        };
        const handleScroll = () => {
            const scrollTop = window.scrollY;
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
        <header className={`z-50 sticky top-0 ${navbarBackground || !isColoredRoute ? 'bg-[var(--secondry-hover)] text-[var(--surface)]' : 'bg-transparent text-[var(--primary)]'} ${navbarBackground && 'shadow-lg'} transition-all duration-75 ease-in-out'`}>
            <div className="container mx-auto">
                <nav>
                    <div className={`flex justify-between items-center py-4 px-2`}><Link href='/' className='grid place-items-center relative w-[177.125px] h-[48px]'>
                        <Image
                            src="/images/logo/logo-white.png"
                            alt="Logo White"
                            width={177.125}
                            height={48}
                            priority
                            className={`w-full h-auto object-contain transition-opacity duration-300 ease-in-out ${navbarBackground || !isColoredRoute ? 'opacity-0' : 'opacity-100'}`}
                        />
                        <Image
                            priority
                            src="/images/logo/logo-black.png"
                            alt="Logo Black"
                            width={177.125}
                            height={48}
                            className={`w-full h-auto object-contain transition-opacity duration-300 ease-in-out absolute top-0 left-0 ${navbarBackground || !isColoredRoute ? 'opacity-100' : 'opacity-0'}`}
                        />
                    </Link>
                        <div>
                            <DesktopNavbar />
                        </div>
                        <button onClick={handleToggleNavItems} className='block cursor-pointer md:hidden pr-2'>
                            <FontAwesomeIcon icon={faBars} className='text-2xl text-current' size='2x' />
                        </button>
                        <MobileNavbar handleToggleNavItems={handleToggleNavItems} toggleNavItems={toggleNavItems} />
                        <button className='sidebar-form-open cursor-pointer bg-red-600 hover:bg-[var(--accent-hover)] text-white transition-all duration-100 ease-in-out lg:text-base text-sm px-3 lg:px-6 py-1 lg:py-2 rounded-lg font-semibold hidden md:block'>
                            Get in Touch
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

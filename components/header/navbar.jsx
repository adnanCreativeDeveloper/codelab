'use client'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { uuidv7 } from "uuidv7";
const navItems = [
  { id: uuidv7(), label: 'Home', href: '/' },
  { id: uuidv7(), label: 'About us', href: '/about' },
  { id: uuidv7(), label: 'Services', href: '/services' },
  { id: uuidv7(), label: 'Blog', href: '/blogs' },
  { id: uuidv7(), label: 'Contact', href: '/contact' }
];

export const DesktopNavbar = () => {
  const pathName = usePathname();

  return (
    <ul className='hidden items-center flex-row md:flex space-x-6 text-current absolute md:static top-full left-0 w-full md:w-auto bg-black/50 md:bg-transparent md:backdrop-blur-none backdrop-blur-sm p-4 md:p-0 transition-all duration-300 ease-in-out'>
      {navItems.map((item, index) => (
        <li key={uuidv7()} className='max-md:text-center max-md:w-full'>
          <a href={item.href} className={`${(pathName === item.href) ? 'border-b-2' : 'hover:after:w-full'} py-2.5 px-2.5 inline-block relative after:content-[""] after:absolute after:block after:w-0 after:h-0.5 after:left-0 after:bottom-0 after:bg-current after:transition-[width] after:duration-300 after:ease-in-out font-semibold`}>
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export const MobileNavbar = ({ handleToggleNavItems, toggleNavItmes }) => {
  return (
    <motion.div initial={{ opacity: 0, display: 'none' }} animate={{ opacity: toggleNavItmes ? 100 : 0, display: toggleNavItmes ? 'block' : 'none' }} className='h-screen w-full fixed inset-0 md:hidden bg-gray-50'>
      <div>
        <ul className='flex items-center justify-between py-4 px-4 sm:px-12 text-red-500'>
          <li><Link href='/'>
            <Image src={'/logo/logo-black.png'} alt='Logo' width={177.125} height={48} className='' />
          </Link></li>
          <li onClick={handleToggleNavItems} className='cursor-pointer'>
            <FontAwesomeIcon icon={faTimes} className='text-current text-2xl' size="2x" />
          </li>
        </ul>
      </div>
      <div>
        <ul className='text-white w-full md:w-auto bg-black p-4 md:p-0 transition-all duration-300 ease-in-out'>
          {navItems.map((item, index) => (
            <li key={uuidv7()} className='max-md:text-center max-md:w-full'>
              <a href={item.href} className='font-semibold py-2.5 w-full inline-block'>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-start justify-center px-6 py-10 text-center">
            <div className="w-full md:max-w-lg">
                <div className='relative w-full h-auto sm:w-72 md:h-76 md:w-96 m-auto'>
                    <Image width={462} height={432} src={'/images/logo/not-found-svg.svg'} alt='not-found' className='object-fill w-full h-auto' />
                </div>
                <h2 className="text-2xl text-blue-500 font-bold mb-2 mt-10">404 Not Found</h2>
                <p className="text-gray-600 mb-6 font-bold text-2xl">
                    Whoops! That page doesn’t exist.
                </p>
                <p className="mb-2 text-gray-600 text-sm">Here are some help full links instead:</p>
                <ul className="flex items-center w-full flex-wrap justify-center gap-y-2 mx-auto">
                    <li className='shrink-0'><Link href="/" className="px-3 text-gray-700 underline font-semibold hover:text-blue-500 duration-300">Home</Link></li>
                    <li className='shrink-0'><Link href="/about" className="px-3 text-gray-700 underline font-semibold hover:text-blue-500 duration-300">About us</Link></li>
                    <li className='shrink-0'><Link href="/services" className="px-3 text-gray-700 underline font-semibold hover:text-blue-500 duration-300">Services</Link></li>
                    <li className='shrink-0'><Link href="/blog" className="px-3 text-gray-700 underline font-semibold hover:text-blue-500 duration-300">Blog</Link></li>
                    <li className='shrink-0'><Link href="/contact" className="px-3 text-gray-700 underline font-semibold hover:text-blue-500 duration-300">Contact</Link></li>
                </ul>

            </div>
        </div>
    );
}

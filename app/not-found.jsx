// app/not-found.jsx
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-start justify-center px-6 py-10 text-center">
            <div className="max-w-md">
                <div className='relative h-76 w-96 m-auto'>
                    <Image width={462} height={432} src={'/images/logo/not-found-svg.svg'} alt='not-found' className='object-fill w-full h-auto' />
                </div>
                <h2 className="text-2xl text-blue-500 font-bold mb-2 mt-10">404 Not Found</h2>
                <p className="text-gray-600 mb-6 font-bold text-2xl">
                    Whoops! That page doesn’t exist.
                </p>
                <p className="mb-2 text-gray-600 text-sm">Here are some help full links instead:</p>
                <ul className="flex items-center w-fit mx-auto">
                    <li><Link href="/" className="px-3 text-gray-700 underline font-semibold hover:text-blue-500 duration-300">Home</Link></li>
                    <li><Link href="/" className="px-3 text-gray-700 underline font-semibold hover:text-blue-500 duration-300">Contact</Link></li>
                    <li><Link href="/" className="px-3 text-gray-700 underline font-semibold hover:text-blue-500 duration-300">blog</Link></li>
                </ul>

            </div>
        </div>
    );
}

'use client'
import placeholders from "@/lib/placeholders";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { uuidv7 } from "uuidv7";

export default function PostCard({ blog_arr }) {
    const [visiblePosts, setVisiblePosts] = useState([]);

    const shuffleArray = (arr) => {
        const copy = [...arr];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    };

    const shufflePosts = () => {
        const shuffled = shuffleArray(blog_arr.slice(0, 16));
        setVisiblePosts(shuffled.slice(0, 7));
    };

    useEffect(() => {
        shufflePosts();
        const interval = setInterval(shufflePosts, 10 * 60 * 1000);
        return () => clearInterval(interval);
    }, [blog_arr]);
    return (

        visiblePosts.slice(0, 7).map((item, i) => i % 2 === 0 && <div key={item.id} className='max-sm:h-36 grid grid-cols-12 gap-5 p-3 mb-4 bg-gray-200 border border-gray-300 rounded-lg cursor-pointer last:mb-0 hover:shadow-lg'>
            <div className="relative w-full h-full overflow-hidden rounded-lg sm:w-full sm:h-32 col-span-4 md:rounded-xl">
                <Image
                    height={130}
                    width={130}
                    alt={item.title}
                    className="object-cover w-full h-full duration-300"
                    src={item.img}
                    placeholder='blur'
                    blurDataURL={placeholders[item.img]}
                />
            </div>
            <div className="col-span-8">
                <h3 className="text-lg font-bold md:text-xl">
                    {item.title.length > 15 ? `${item.title.substring(0, 15)}...` : item.title}
                </h3>
                <div className=''>
                    <p className="text-sm mt-1.5">
                        {item.description.length > 100 ? `${item.description.substring(0, 100)} ` : item.description}
                        <Link href={`/blog/${item.slug}`}
                            className="font-semibold text-blue-500">
                            Read more
                        </Link>...
                    </p>
                </div>
            </div>
        </div>)

    )
}

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {NextPage} from "next";
import Skeleton from "react-loading-skeleton";



type Props = {
    name: string;
    imageSrc: string;
    href: string;
};

const Painting: NextPage<Props> = ({ name,imageSrc, href  }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
    <div
        className="relative w-auto h-auto bg-white cursor-pointer overflow-hidden sm:aspect-w-2 lg:aspect-w-1 lg:aspect-h-1">
        {isLoading && <Skeleton width={500}
                                height={420}/>}
        <Link href={href} key={name}>
            <a>
                {/* Use the 'Image' component from 'next/optimized-images' */}
                <Image
                    src={imageSrc}
                    alt=""
                    width={500}
                    height={420}
                    // sizes="100vw"
                    style={{display: isLoading ? 'none' : 'block'}}
                    objectFit="contain"
                    onLoad={handleImageLoad}
                        // Other props as needed
                    />
                </a>
            </Link>
        </div>
    );
};

export default Painting;
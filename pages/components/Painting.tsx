import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

type Props = {
    name: string;
    imageSrc: string;
    href: string;
};

const Painting: React.FC<Props> = ({ name, imageSrc, href }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    // 만약 필수 속성이 전달되지 않은 경우를 처리합니다.
    // if (!name || !imageSrc || !href) {
    //     return <div>필수 속성이 누락되었습니다.</div>;
    // }

    return (
        <div className="relative w-auto h-auto bg-white cursor-pointer overflow-hidden sm:aspect-w-2 lg:aspect-w-1 lg:aspect-h-1">
            {isLoading && <Skeleton width={500} height={420} />}
            {/* href와 name이 제대로 전달되었는지 확인한 후 링크를 렌더링합니다. */}
            <Link href={href ?? ""} passHref>
                <a>
                    {/* Use the 'Image' component from 'next/optimized-images' */}
                    <Image
                        src={imageSrc ?? ""}
                        alt=""
                        width={500}
                        height={420}
                        // sizes="100vw"
                        style={{ display: isLoading ? "none" : "block" }}
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

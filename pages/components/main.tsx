import Image from 'next/image';

export default function Main() {
    return (
        <div>
            <div className="bg-white">
                <div
                    className="max-w-2xl mx-auto py-10 px-4 grid items-center grid-cols-1 gap-y-4 gap-x-8 sm:px-6 lg:max-w-6xl lg:px-8 lg:grid-cols-2">
                    <div className="">
                        <div className="mt-3 px-4">
                            {/* Use the 'Image' component from 'next/optimized-images' */}
                            <Image
                                src="/1.jpg"
                                alt="Picture of the author"
                                width={1000}
                                height={700}
                            />
                        </div>
                        <div className="px-4">
                          <span className="text-justify text-sm italic text-gray-500">
                            날 지나칠 순 없어 27 × 22cm Acrylic on Canvas
                          </span>
                        </div>
                    </div>

                    <div className="mt-10 px-4">
                        <h4 className="font-bold text-gray-800 text-xl">시선</h4>
                        <div className="mt-0.5 text-gray-700 font-medium">
                            제2회 김나미 개인전
                        </div>

                        <p className="text-justify mt-4 text-gray-700">
                            {/* Your text content */}
                        </p>

                        <br/>
                        <p className="text-gray-500 text-right">- 김나미(NAMI)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

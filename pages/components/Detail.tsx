import Image from 'next/image';
import Link from 'next/link';

const callouts = [
  {
    name: '봄날의 입술은 이처럼, 30.5 × 24cm Acrylic on Canvas',
    imageSrc: '/2.jpg',
    href: '/pictures/2.jpg',
  },
  {
    name: '누구도 흉내 낼 수 없지, 30.5 × 24cm Acrylic on Canvas',
    imageSrc: '/3.jpg',
    href: '/pictures/3.jpg',
  },
  {
    name: '아름다운 가을날은 나로부터, 30.5 × 24cm Acrylic on Canvas',
    imageSrc: '/4.jpg',
    href: '/pictures/4.jpg',
  },
  {
    name: '꽃의 여왕은 내면에서, 30.5 × 24cm Acrylic on Canvas',
    imageSrc: '/5.jpg',
    href: '/pictures/5.jpg',
  },
  {
    name: '뜨거운 여름의 그 찬란함, 30.5 × 24cm Acrylic on Canvas',
    imageSrc: '/6.jpg',
    href: '/pictures/6.jpg',
  },
  {
    name: '날 알고 싶거든 겸손함이, 30.5 × 24cm Acrylic on Canvas',
    imageSrc: '/7.jpg',
    href: '/pictures/7.jpg',
  },
  {
    name: '내면의 깊이 그 어디쯤, 24 × 30.5cm Acrylic on Canvas',
    imageSrc: '/8.jpg',
    href: '/pictures/8.jpg',
  },
  {
    name: '아름다운 가을날은 나로부터 Ⅱ, 30.5 × 24cm Acrylic on Canvas',
    imageSrc: '/9.jpg',
    href: '/pictures/9.jpg',
  },
  {
    name: '가냘픔 속 우아함, 24 x 30.5cm Acrylic on Canvas',
    imageSrc: '/16.jpg',
    href: '/pictures/16.jpg',
  },
  {
    name: '당당함은 이처럼, 30.5 × 24cm Acrylic on Canvas',
    imageSrc: '/10.jpg',
    href: '/pictures/10.jpg',
  },
  {
    name: '맑은 맘 닮고 싶은 향, 30.5 × 24cm Acrylic on Canvas',
    imageSrc: '/11.jpg',
    href: '/pictures/11.jpg',
  },
  {
    name: '하늘의 별만큼 가슴의 기원들, 30.5 × 24cm Acrylic on Canvas',
    imageSrc: '/12.jpg',
    href: '/pictures/12.jpg',
  },
  {
    name: '더 할 나위 없는 신비로움이, 24 × 30.5cm Acrylic on Canvas',
    imageSrc: '/13.jpg',
    href: '/pictures/13.jpg',
  },
  {
    name: '추위가 담아준 향, 27 × 22cm Acrylic on Canvas',
    imageSrc: '/14.jpg',
    href: '/pictures/14.jpg',
  },
  {
    name: '아름다운 가을날은 나로부터 Ⅱ, 27 × 22cm Acrylic on Canvas',
    imageSrc: '/15.jpg',
    href: '/pictures/15.jpg',
  },
];

export default function Main() {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-20 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 lg:max-w-6xl lg:px-6">
          <div className="max-w-7xl mx-auto px-4 ">
            <h4 className="font-['font-AlegreyaSans'] font-bold text-gray-800 text-xl">
              Collections
            </h4>
            <div></div>
            <p className=" text-sm text-gray-400">
              제목 옆에 빨간 스티커가 없는 작품은 구매 가능합니다
            </p>
            <p className="flex text-sm text-gray-400">
              작품 구매는 메일로 문의 주세요
              <a href={'/contact'}>
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  ></path>
                </svg>
              </a>
            </p>
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map(callout => (
                <div key={callout.name} className="group relative">
                  {/* <div className="relative w-full h-auto bg-white cursor-pointer overflow-hidden sm:aspect-w-2 sm:h-72 lg:aspect-w-1 lg:aspect-h-1"> */}
                  <div className="relative w-auto h-auto bg-white cursor-pointer overflow-hidden sm:aspect-w-2 lg:aspect-w-1 lg:aspect-h-1">
                    <Link href={callout.href} key={callout.name}>
                      <a>
                        {/* Use the 'Image' component from 'next/optimized-images' */}
                        <Image
                          src={callout.imageSrc}
                          alt=""
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: '100%', height: 'auto' }}
                          objectFit="contain"
                          // Other props as needed
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mb-4 mt-2">
                    <span className="text-justify text-sm italic text-gray-500">
                      {callout.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

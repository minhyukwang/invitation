import Image from 'next/image';
import Link from 'next/link';
const callouts = [
  {
    name: '무제1,  × cm Oil Painting',
    imageSrc: '/1.jpg',
    href: '/pictures/1.jpg',
  },
  {
    name: '무제2,  × cm Oil Painting',
    imageSrc: '/2.jpg',
    href: '/pictures/2.jpg',
  },
  {
    name: '무제3,  × cm Oil Painting',
    imageSrc: '/3.jpg',
    href: '/pictures/3.jpg',
  },
  {
    name: '무제4,  × cm Oil Painting',
    imageSrc: '/4.jpg',
    href: '/pictures/4.jpg',
  },
  {
    name: '무제5,  × cm Oil Painting',
    imageSrc: '/5.jpg',
    href: '/pictures/5.jpg',
  },
  {
    name: '무제6,  × cm Oil Painting',
    imageSrc: '/6.jpg',
    href: '/pictures/6.jpg',
  },
  {
    name: '무제7,  × cm Oil Painting',
    imageSrc: '/7.jpg',
    href: '/pictures/7.jpg',
  },
  {
    name: '무제8,  × cm Oil Painting',
    imageSrc: '/8.jpg',
    href: '/pictures/8.jpg',
  },
  {
    name: '무제9,  × cm Oil Painting',
    imageSrc: '/9.jpg',
    href: '/pictures/9.jpg',
  },
  {
    name: '무제10,  × cm Oil Painting',
    imageSrc: '/10.jpg',
    href: '/pictures/10.jpg',
  },
  {
    name: '무제11,  × cm Oil Painting',
    imageSrc: '/11.jpg',
    href: '/pictures/11.jpg',
  },
  {
    name: '무제12,  × cm Oil Painting',
    imageSrc: '/12.jpg',
    href: '/pictures/12.jpg',
  },
  {
    name: '무제13,  × cm Oil Painting',
    imageSrc: '/13.jpg',
    href: '/pictures/13.jpg',
  },
  {
    name: '무제14,  × cm Oil Painting',
    imageSrc: '/14.jpg',
    href: '/pictures/14.jpg',
  },
  {
    name: '무제15,  × cm Oil Painting',
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
            <h4 className="font-['font-AlegreyaSans'] font-bold	 text-gray-800 text-xl">
              Collections
            </h4>
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map(callout => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg cursor-pointer overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:h-72 lg:aspect-w-1 lg:aspect-h-1">
                    <Link href={callout.href} key={callout.name}>
                      <a>
                        <Image
                          src={callout.imageSrc}
                          alt=""
                          width="700"
                          height="650"
                          // className="w-full h-full object-center object-cover"
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="mb-4 mt-2 ">
                    <span className="text-justify text-sm italic text-gray-500">
                      {callout.name}
                    </span>
                    {/* <p className="text-sm mt-2 font-light text-justify text-slate-900">
                      {callout.description}
                    </p> */}
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

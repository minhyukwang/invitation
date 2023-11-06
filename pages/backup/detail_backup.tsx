import Image from "next/image";
import Link from "next/link";
const callouts = [
  {
    name: "사랑인 듯, 86.0 × 67.0cm Watercolor",
    imageSrc: "/cuty_love.jpg",
    href: "/pictures/cuty_love.jpg",
  },
  {
    name: "5월 부케, 40.0 × 30.0cm Watercolor",
    imageSrc: "/may_princess.jpg",
    href: "/pictures/may_princess.jpg",
  },
  {
    name: "널 기다려, 42.0 × 29.0cm Watercolor",
    description: "",
    imageSrc: "/wait_for_you.jpeg",
    href: "/pictures/wait_for_you.jpeg",
  },
  {
    name: "친구의 향기, 41.0 × 26.0cm Watercolor",
    imageSrc: "/friends.jpeg",
    href: "/pictures/friends.jpeg",
  },
  {
    name: "대롱대롱, 28.5 × 30.0cm Watercolor",
    imageSrc: "/daelong.jpeg",
    href: "/pictures/daelong.jpeg",
  },
  // {
  //   name: "사랑 송이송이, 60.0 × 42.0cm Watercolor",
  //   imageSrc: "/lovelove.jpeg",
  //   href: "/pictures/lovelove.jpeg",
  // },
  // {
  //   name: "미소 둘, 44.0×29.5cm Watercolor",
  //   imageSrc: "/smile_two.jpeg",
  //   href: "/pictures/smile_two.jpeg",
  // },
  {
    name: "백합(우아한 그리움), 58.0 × 43.0cm Watercolor",
    imageSrc: "/beauty_miss.jpg",
    href: "/pictures/beauty_miss.jpg",
  },
  // {
  //   name: "러브 레터, 55.5×40.0cm Watercolor",
  //   imageSrc: "/likedream.jpg",
  //   href: "/pictures/likedream.jpg",
  // },
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
              {callouts.map((callout) => (
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

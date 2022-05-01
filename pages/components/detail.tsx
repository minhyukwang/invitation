import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and powder coated steel card cover",
  },
  { name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  { name: "Includes", description: "Wood card tray and 3 refill packs" },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];
const callouts = [
  {
    name: "백합(우아한 그리움)",
    description: "Lily(Elegant Missing), Watercolor",
    imageSrc: "/beauty_miss.jpg",
    href: "#",
  },
  {
    name: "사랑이 송이송이",
    description: "Journals and note-taking, Watercolor",
    imageSrc: "/cuty_love.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "삶은 꿈같아",
    description: "Daily commute essentials, Watercolor",
    imageSrc: "/likedream.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "5월 신부",
    description: "Daily commute essentials, Watercolor",
    imageSrc: "/may_princess.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
export default function Main() {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          <div className="max-w-7xl mx-auto px-4 ">
            {/* <div className="max-w-2xl mx-auto sm:py-24 lg:py-32 lg:max-w-none"> */}
            <h4 className="font-['font-AlegreyaSans'] font-bold	 text-gray-800 text-xl">
              Collections
            </h4>
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <Image
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      width="1000"
                      height="1000"
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-base font-semibold text-gray-900">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-sm font-light text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
              {/* </div> */}
            </div>
          </div>
          {/* 
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

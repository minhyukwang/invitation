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
    name: "백합(우아한 그리움), Lily(Elegant Missing)",
    description:
      "백합은 돌아가신지 오랜 울 엄마의 꽃이다. 시골 할머니 같지 않고 아파트 화단에 핀 백합의 꽃잎을 어루만지며 참 맑고 곱다던 엄마의 그리움이다. 시간이 가면서 슬픔은 작아지고 그리움은 깊어만 간다. 백합은 엄마의 우아한 그리움이다.",
    imageSrc: "/beauty_miss.jpg",
    href: "#",
  },
  {
    name: "사랑인 듯, Like Love",
    description:
      "차가운 공기가 어느새 포근하게 나를 두를 때, 리듬을 타는 발걸음이 이미 봄이다. 땅에서 쏟는 모든 싹이 사랑으로 부풀어 올랐다. 순백으로 봉긋한 목련은 사랑하지 않을 수 없다. 목련은 사랑인 듯....",
    imageSrc: "/cuty_love.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "인생은 꿈같아, Life is like a dream",
    description:
      "화려한 수국은 5월 신부의 부케처럼 기분 좋다. 인생의 젊은 부분처럼 화려함은 순간으로 오가고 한갓 꿈과 같다는 느낌이다.",
    imageSrc: "/likedream.jpg",
    // imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "5월 부케, May's bouquet",
    description:
      "일생에서 가장 예쁜 모습으로 자신이 비치는 5월 신부의 부케가 수국이다. 4월말에서 여름까지 화려하면서 우아한 수국은 신부의 모습과 닮았다. 수국은 많은 사람의 눈을 끌어들인다. 꽃송이가 큰 이유도 있지만 화려함이 더욱 큰 이유다. 수국의 화려함이 눈길과 발길을 멈추게 하는 마력을 가졌다.",
    imageSrc: "/may_princess.jpg",
    // imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
export default function Main() {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-6">
          <div className="max-w-7xl mx-auto px-4 ">
            {/* <div className="max-w-2xl mx-auto sm:py-24 lg:py-32 lg:max-w-none"> */}
            <h4 className="font-['font-AlegreyaSans'] font-bold	 text-gray-800 text-xl">
              Collections
            </h4>
            <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <div className="relative w-full h-80 bg-white rounded-lg cursor-pointer overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:h-72 lg:aspect-w-1 lg:aspect-h-1">
                    <Image
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      width="500"
                      height="500"
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                  <h3 className="mt-6 text-base font-semibold text-gray-900">
                    {/* <a href={callout.href}> */}
                    <a>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-sm mt-1.5 font-light text-justify italic text-gray-400">
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

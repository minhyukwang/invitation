import type { NextPage } from "next";
import Link from "next/link";
import Nevigator from "../components/navigator";
import Image from "next/image";

const Exhibitions: NextPage = () => {
  return (
    <div>
      <Nevigator />
      <div className="max-w-2xl mx-auto py-10 px-4 grid items-center grid-cols-1 gap-y-4 gap-x-8 sm:px-6 lg:max-w-6xl lg:px-8 lg:grid-cols-2">
        <div>
          <Image
            src="/cuty_love.jpg"
            alt="Picture of the author"
            width={430}
            height={335}
          />
        </div>
        <div className="flex-col pt-5 py-6">
          <div className="flex">
            <div className="text-gray-900 font-bold text-xl">정원</div>
            <div className="ml-2 mt-0.5 text-gray-700 font-medium">
              제1회 김나미 개인전
            </div>
          </div>
          <div className="flex-col pt-5 py-6">
            <div>성산아트홀 제6전시실</div>
            <div>2022.06.01 수 - 06.06 월</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exhibitions;

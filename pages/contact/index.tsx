import type { NextPage } from "next";
import Link from "next/link";
import Nevigator from "../components/navigator";
import Image from "next/image";

const Contact: NextPage = () => {
  return (
    <div>
      <Nevigator />
      <div className="max-w-2xl mx-auto py-20 px-20 grid items-center grid-cols-1 gap-y-4 gap-x-8 sm:px-6 lg:max-w-2xl lg:px-8 lg:grid-cols-2">
        <div className="ml-20">
          <div className="h-32 w-32 rounded-full bg-slate-500 overflow-hidden ">
            <Image
              src="/profile3.jpg"
              alt="Picture of the author"
              width={200}
              height={200}
              className="w-full h-full"
            ></Image>
          </div>
          <div className="ml-2 mt-3">
            <span className="py-3 text-slate-700 text-sm">
              김나미(NAMI KIM)
            </span>
          </div>
        </div>
        <div className="flex-col ml-[40px]">
          <div className="mb-4">
            <div className="mr-1 text-gray-700 text-sm">출생 : 경남 산청</div>
            <div className="mr-1 text-gray-700 text-sm">
              학력 : 한국방송통신대학교 국어국문학과
            </div>
            <div className="mr-1 text-gray-700 text-sm">개인전 : 1회</div>
            <div className="mr-1 text-gray-700 text-sm">
              수상 : 2020 경상남도전 입상외 다수
            </div>
          </div>
          <div className="flex">
            <div className="mr-1 text-gray-700 text-sm">e-mail</div>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </div>
          <div className="mb-4 text-gray-800 font-semibold text-l">
            treenami@naver.com
          </div>

          {/* <div className="flex"> */}
          {/* <div className="mr-1 text-gray-700 font-medium">phone </div>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="mb-4 text-gray-800 font-semibold text-l">
            010-3375-1463
          </div> */}

          <div className="flex">
            <div className="mr-1 text-gray-700 font-medium">instagram </div>
            <Image
              src="/instagram.png"
              alt="Picture of the author"
              width={23}
              height={20}
            />
          </div>
          <a href="https://www.instagram.com/treenami_studio/" target="__blank">
            <div className="text-gray-800 font-semibold text-l cursor-pointer hover:text-gray-500">
              @treenami_studio
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

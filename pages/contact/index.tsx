import type { NextPage } from "next";
import Link from "next/link";
import Nevigator from "../components/navigator";
import Image from "next/image";
import Footer from "../components/footer";

const Contact: NextPage = () => {
  return (
    <div>
      <Nevigator />
      <div className="  max-w-2xl mx-auto ml-1 py-10 px-4 grid items-center grid-cols-1 gap-y-4 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <div className="py-3 text-gray-800 font-bold text-xl">김나미</div>
          <div className="text-gray-700 font-medium text-l">NAMI KIM</div>
        </div>
        <div className="flex-col pt-20 py-6">
          <div className="flex">
            <div className="mr-1 text-gray-700 font-medium">e-mail</div>
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

          {/* <div className="flex">
            <div className="mr-1 text-gray-700 font-medium">phone </div>
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
      <Footer />
    </div>
  );
};

export default Contact;

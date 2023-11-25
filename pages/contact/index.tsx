import type { NextPage } from 'next';
import Link from 'next/link';
import Nevigator from '../components/Navigator';
import Image from 'next/image';
import Footer from '../components/Footer';

const Contact: NextPage = () => {
  return (
    <div>
      <Nevigator />
      <div className=" justify-center  max-w-2xl mx-auto py-10 px-8 grid items-center grid-cols-1 gap-y-4 gap-x-10 sm:px-8 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        {/* <div className="max-w-2xl mx-auto py-10 px-4 grid items-center grid-cols-1 gap-y-2 gap-x-2 sm:px-6 lg:max-w-6xl lg:px-8 lg:grid-cols-2"> */}
        <div className="lg:ml-[380px]  xl:ml-[460px]  2xl:ml-[600px]">
          <div>
            <Image
              src="/artist.jpg"
              alt="Picture of the author"
              width={188}
              height={135}
            />
          </div>
          <div className="py-3 text-gray-800 font-bold text-xl">김나미</div>
          <div className="text-gray-700 font-medium text-l">KIM NAMI</div>
        </div>
        <div className="flex-col pt-10 py-6">
          <div className="flex">
            <div className="mr-1 text-gray-700 font-medium">개인전</div>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
              ></path>
            </svg>
          </div>
          <div className=" text-gray-800 text-l">1회 성산아트홀</div>
          <div className="mb-4 text-gray-800 text-l">2회 카페 케렌시아</div>

          <div className="flex">
            <div className="mr-1 text-gray-700 font-medium">수상</div>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
              ></path>
            </svg>
          </div>
          <div className=" text-gray-800 text-l">2020년 경남도전 입상</div>
          <div className=" text-gray-800 text-l">2019년 경남도전 입상</div>
          <div className=" text-gray-800 text-l">2018년 경남도전 입상</div>
          <div className="mb-4 text-gray-800 text-l">2017년 경남도전 입상</div>

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

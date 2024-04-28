import {dummyAllSongList} from "@lib/dummyData";
import Painting from "./Painting";

export default function Main() {
    return (
        <div>
            <div className="bg-white">
                <div
                    className="max-w-2xl mx-auto py-20 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 lg:max-w-6xl lg:px-6">
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
                            {dummyAllSongList.map((callout, index) => (
                                <div key={index} >
                                    <Painting name={callout.name} imageSrc={callout.imageSrc} href={callout.href}/>
                                    <div key={callout.name} className="group relative">
                                        <div className="mb-4 mt-2">
                                        <span className="text-justify text-sm italic text-gray-500">
                                          {callout.name}
                                        </span>
                                        </div>
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

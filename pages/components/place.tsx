import Image from "next/image";
import Map from "./map";
export default function Place() {
  return (
    <div>
      <div className="max-w-2xl mx-auto px-2 grid items-center grid-cols-1 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <h4 className="font-['font-AlegreyaSans'] font-bold	 text-gray-800 text-xl ml-2">
          PLACE
        </h4>
      </div>
      <div className="max-w-2xl mx-auto py-4 px-2 grid items-center grid-cols-1 gap-y-4 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <Map latitude={35.22943806} longitude={128.68307019} />
        <div className="flex flex-col">
          <span className="text-justify mt-2 ml-2 text-gray-700">
            경남 창원시 의창구 중앙대로 181
          </span>
          <span className="text-justify ml-2 font-bold text-lg text-gray-900">
            성산아트홀 제6전시실
          </span>
          <span className="text-justify mt-4 ml-2 text-gray-800">
            교통편 안내 🚌
          </span>
          <span className="text-justify mt-2 ml-2 font-semibold text-gray-800">
            창원
          </span>
          <span className="text-justify ml-2 text-gray-700">
            일반버스 : 212, 216
          </span>
          <span className="text-justify mt-2 ml-2 font-semibold text-gray-800">
            창원-마산
          </span>
          <span className="text-justify ml-2 text-gray-700">
            일반버스 : 100, 103, 104, 105, 111, 113, 116
          </span>
          <span className="text-justify ml-2 text-gray-700">
            좌석버스 : 700,703,710
          </span>
          <span className="text-justify mt-2 ml-2 font-semibold text-gray-800">
            창원-진해
          </span>
          <span className="text-justify ml-2 text-gray-700">
            일반버스 : 151, 155
          </span>
          <span className="text-justify ml-2 text-gray-700">
            좌석버스 : 751, 752
          </span>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';

export default function Main() {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-10 px-4 grid items-center grid-cols-1 gap-y-4 gap-x-8 sm:px-6 lg:max-w-6xl lg:px-8 lg:grid-cols-2">
          <div className="">
            {/* <h4 className="font-['AlegreyaSans'] font-bold tracking-tight text-gray-900 text-xl"> */}

            <div className="mt-3 px-4">
              <Image
                src="/sisun/10.jpg"
                alt="Picture of the author"
                width={1000}
                height={700}
              />
            </div>
            <div className="px-4">
              <span className="text-justify text-sm italic text-gray-500">
                무제, X cm Oil painting
              </span>
              {/* <span className="text-justify ml-4 text-sm italic text-gray-400">
                
              </span>
              <span className="text-justify ml-4 text-sm italic text-gray-400">
                
              </span> */}
            </div>
          </div>

          <div className="mt-10 px-4">
            <h4 className="font-bold text-gray-800 text-xl">시선</h4>
            <div className="mt-0.5 text-gray-700 font-medium">
              제2회 김나미 개인전
            </div>

            <p className="text-justify mt-4 text-gray-700">
              인생을 빗댄 좋은 말들이 쏟아진다.
            </p>

            <br />
            <p className="text-gray-500 text-right">- 김나미(NAMI)</p>
            {/* <div className=" text-right flex-col pt-5 py-6">
              <div>성산아트홀 제6전시실</div>
              <div>2022.06.01 수 - 06.06 월</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

import type { NextPage } from "next";
import Link from "next/link";
import Nevigator from "../components/navigator";


const Exhibitions: NextPage = () => {
  return (
    <div>
      <Nevigator />
    <div className="max-w-2xl mx-auto ml-1 grid items-center grid-cols-1 gap-y-4 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
    <div>
      <div>정원</div>
      <div>garden</div>
    </div>
    <div>
      <div>제1회 김나미 개인전</div>
    </div>
    <div>
      <div>성산아트홀 제6전시실</div>
      <div>2022.06.01 수 - 06.06 월</div>
    </div>
    </div>
    </div>
  );
};

export default Exhibitions;

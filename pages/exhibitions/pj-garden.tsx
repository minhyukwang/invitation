import type {NextPage} from 'next';
import Nevigator from '../components/Navigator';
import Image from 'next/image';
import Painting from "../components/Painting";
import {dummyGardenList} from "@lib/dummyData";
import Footer from "../components/Footer";


const Garden: NextPage = () => {
    return (
        <div>
            <Nevigator/>
            <div>
                <div className="bg-white">
                    <div
                        className="max-w-2xl mx-auto py-10 px-4 grid items-center grid-cols-1 gap-y-4 gap-x-8 sm:px-6 lg:max-w-6xl lg:px-8 lg:grid-cols-2">
                        <div className="">
                            {/* <h4 className="font-['AlegreyaSans'] font-bold tracking-tight text-gray-900 text-xl"> */}
                            <Painting name={""} imageSrc={"/main.jpg"} href={"/pictures/main.jpg"}/>
                            <div className="px-4">
                            <span className="text-justify text-sm italic text-gray-500">
                              비비추(정갈한 수줍음), 39.5 X 52.5cm Watercolor
                            </span>
                            </div>
                        </div>

                        <div className="mt-10 px-4">
                            <h4 className="font-['font-AlegreyaSans'] font-bold	 text-gray-800 text-xl">
                                GARDEN(정원)
                            </h4>
                            <div className="mt-0.5 text-gray-700 font-medium">
                                제1회 김나미 개인전
                            </div>

                            <p className="text-justify mt-4 text-gray-700">
                                인생을 빗댄 좋은 말들이 쏟아진다. 나는 정원이 그러하다. 작은
                                정원이든 규모가 큰 정원이든, 어떤 꽃을 심고 무슨 나무를 심을
                                것인가는 오롯이 자신의 선택에 달렸다. 늦깎이로 국문학을 공부하고
                                시를 쓰는 나무를 심었고, 오랜 시간 동안 그림을 그리는 꽃을
                                심었다. 숱한 시집이나 책들 속에 하나를 더 할 필요는 없지만,
                                마음속 답답하고 해소되지 않는 갈증을 어쩌지를 못하고 있다. 깊은
                                상념에 빠질 수 있는 시 쓰는 시간이 소중하고, 집중해서 그림
                                그리는 시간이 보배롭다. 긴 시간 살면서 외딴 섬같이 나한테 집중할
                                수 있는 좋은 시간들이다. 조금 외로워도 되고 조금 고독해도 행복한
                                그런 시간이다. 사계절을 살다 어느 순간 장면처럼 ‘사진 찍으면
                                좋겠다.’ ‘그림 그리면 좋겠다.’하는 순간이 있다. 한참을 넋 놓고
                                바라다 사진으로 옮겨와 다음날 스케치를 하면 그날의 기억이
                                재생되어 또 한 번의 여행을 경험한다. 여러 경험이 내 정원의
                                다양한 식물들이 되어 풍부한 숲을 이루고 있다. 그 속에서 숨 쉬는
                                나는 행복을 안다.
                            </p>

                            <br/>
                            <p className="text-gray-500 text-right">- 김나미(NAMI)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div
                    className="max-w-2xl mx-auto py-20 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 lg:max-w-6xl lg:px-6">
                    <div className="max-w-7xl mx-auto px-4 ">
                        <h4 className="font-['font-AlegreyaSans'] font-bold	 text-gray-800 text-xl">
                            Collections
                        </h4>
                        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
                            {dummyGardenList.map(((callout, index) => (
                                <div key={index} className="group relative">
                                        <Painting name={callout.name}
                                                  imageSrc={callout.imageSrc}
                                                  href={callout.href}/>
                                </div>
                            )))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Garden;

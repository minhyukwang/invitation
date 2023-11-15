import Image from 'next/image';

export default function Main() {
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-10 px-4 grid items-center grid-cols-1 gap-y-4 gap-x-8 sm:px-6 lg:max-w-6xl lg:px-8 lg:grid-cols-2">
          <div className="">
            <div className="mt-3 px-4">
              {/* Use the 'Image' component from 'next/optimized-images' */}
              <Image
                src="/1.jpg"
                alt="Picture of the author"
                width="270"
                height="220"
                sizes="100vw"
                objectFit="contain"
                // style={{ width: '100%', height: 'auto' }}
              />
            </div>
            <div className="px-4">
              <span className="text-justify text-sm italic text-gray-500">
                날 지나칠 순 없어 27 × 22cm Acrylic on Canvas
              </span>
            </div>
          </div>

          <div className="mt-10 px-4">
            <div className="flex">
              <h4 className="font-bold text-gray-800 text-xl">시선</h4>
              <p className="ml-2 mt-0.5 bg-black text-white w-20 h-6 rounded-full text-center">
                전시예정
              </p>
            </div>

            <div className="mt-0.5 text-gray-700 font-medium">
              제2회 김나미 개인전
            </div>

            <p className="text-justify mt-4 text-gray-700">
              우리는 제각기 각자의 시선을 가졌다. 보는 것과 보이는 것에서부터
              시작해서 넓게는 자신의 가치관이나 철학도 여기 범주로 생각한다.
              가끔은 시선의 각도를 조금 달리 시각으로 돌리면, 어떻게 볼 것인가?
              무엇을 볼 것인가? 또 다른 무엇을 봐야 하나? 등 많은 카테고리를
              가진 말이라 생각된다. 또한 이 시선은 나이를 가린다. 어린아이의
              시선과 성장기, 노년의 시선이 다르다. 나이가 들면 어린아이가 된다
              고한다. 단순해지기 때문이다. 노년의 단순함이란 물론 많은 것이
              내포된 단순함이라 할 수 있다. 어린아이처럼 순수 해질 수는 없다.
              그렇지만 세상과도 조금 떨어져서 자연과 닮고 싶어 한다. 잠시 우리가
              시선이 머무는 곳이 어디인지 관심을 가지고 보면 동물의 어린 새끼와
              어린아이 또는 새싹이나 꽃이다. 꽃은 그 모습 자체만으로 시선이
              가지만 좀 더 멈추어 고개 숙여 향을 맡는 수고를 망설이지 않는다.
              더불어 빙그레 웃음을 머금기도 한다. 꽃의 매력이다. 내가 보인이
              꽃들이 당신에게 웃음이 되고 조금이 나마 위로와 좋은 기운이 길
              바라본다.
            </p>

            <br />
            <p className="text-gray-500 text-right">- 김나미(NAMI)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

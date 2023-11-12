import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import MyLoading from '../components/MyLoading';

const callouts = [
  {
    name: '날 지나칠 순 없어, 27 × 22cm Acrylic on Canvas',
    description: '',
    imageSrc: '/1.jpg',
    href: '/pictures/1.jpg',
  },
  {
    name: '봄날의 입술은 이처럼, 30.5 × 24cm Acrylic on Canvas',
    description: '',
    imageSrc: '/2.jpg',
    href: '/pictures/2.jpg',
  },
  {
    name: '누구도 흉내 낼 수 없지, 30.5 × 24cm Acrylic on Canvas',
    description: '',
    imageSrc: '/3.jpg',
    href: '/pictures/3.jpg',
  },
  {
    name: '아름다운 가을날은 나로부터, 30.5 × 24cm Acrylic on Canvas',
    description: '',
    imageSrc: '/4.jpg',
    href: '/pictures/4.jpg',
  },
  {
    name: '꽃의 여왕은 내면에서, 30.5 × 24cm Acrylic on Canvas',
    description: '',
    imageSrc: '/5.jpg',
    href: '/pictures/5.jpg',
  },
  {
    name: '뜨거운 여름의 그 찬란함, 30.5 × 24cm Acrylic on Canvas',
    description: '',
    imageSrc: '/6.jpg',
    href: '/pictures/6.jpg',
  },
  {
    name: '날 알고 싶거든 겸손함이, 30.5 × 24cm Acrylic on Canvas',
    description: '',
    imageSrc: '/7.jpg',
    href: '/pictures/7.jpg',
  },
  {
    name: '내면의 깊이 그 어디쯤, 24 × 30.5cm Acrylic on Canvas',
    description: '',
    imageSrc: '/8.jpg',
    href: '/pictures/8.jpg',
  },
  {
    name: '아름다운 가을날은 나로부터 Ⅱ, 30.5 × 24cm Acrylic on Canvas',
    description: '',
    imageSrc: '/9.jpg',
    href: '/pictures/9.jpg',
  },
  {
    name: '제목 미정,  cm Acrylic on Canvas',
    description: '',
    imageSrc: '/16.jpg',
    href: '/pictures/16.jpg',
  },
  {
    name: '당당함은 이처럼, 30.5 × 24cm Acrylic on Canvas',
    description: '',
    imageSrc: '/10.jpg',
    href: '/pictures/10.jpg',
  },
  {
    name: '맑은 맘 닮고 싶은 향, 30.5 × 24cm Acrylic on Canvas',
    description: '',
    imageSrc: '/11.jpg',
    href: '/pictures/11.jpg',
  },
  {
    name: '하늘의 별만큼 가슴의 기원들, 30.5 × 24cm Acrylic on Canvas',
    description: '',
    imageSrc: '/12.jpg',
    href: '/pictures/12.jpg',
  },
  {
    name: '제목 미정, 24 × 30.5cm Acrylic on Canvas',
    description: '',
    imageSrc: '/13.jpg',
    href: '/pictures/13.jpg',
  },
  {
    name: '추위가 담아준 향, 27 × 22cm Acrylic on Canvas',
    description: '',
    imageSrc: '/14.jpg',
    href: '/pictures/14.jpg',
  },
  {
    name: '아름다운 가을날은 나로부터 Ⅱ, 27 × 22cm Acrylic on Canvas',
    description: '',
    imageSrc: '/15.jpg',
    href: '/pictures/15.jpg',
  },
  {
    name: '백합(우아한 그리움), 58.0 × 43.0cm Watercolor',
    description:
      '백합은 돌아가신지 오랜 울 엄마의 꽃이다. 시골 할머니 같지 않고 아파트 화단에 핀 백합의 꽃잎을 어루만지며 참 맑고 곱다던 엄마의 그리움이다. 시간이 가면서 슬픔은 작아지고 그리움은 깊어만 간다. 백합은 엄마의 우아한 그리움이다.',
    imageSrc: '/beauty_miss.jpg',
    href: '/pictures/beauty_miss.jpg',
  },
  {
    name: '사랑인 듯, 86.0 × 67.0cm Watercolor',
    description:
      '차가운 공기가 어느새 포근하게 나를 두를 때, 리듬을 타는 발걸음이 이미 봄이다. 땅에서 쏟는 모든 싹이 사랑으로 부풀어 올랐다. 순백으로 봉긋한 목련은 사랑하지 않을 수 없다. 목련은 사랑인 듯....',
    imageSrc: '/cuty_love.jpg',
    imageAlt:
      'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '/pictures/cuty_love.jpg',
  },
  {
    name: '러브 레터, 55.5×40.0cm Watercolor',
    description:
      '화려한 수국은 5월 신부의 부케처럼 기분 좋다. 인생의 젊은 부분처럼 화려함은 순간으로 오가고 한갓 꿈과 같다는 느낌이다.',
    imageSrc: '/likedream.jpg',
    href: '/pictures/likedream.jpg',
  },
  {
    name: '5월 부케, 40.0 × 30.0cm Watercolor',
    description:
      '일생에서 가장 예쁜 모습으로 자신이 비치는 5월 신부의 부케가 수국이다. 4월말에서 여름까지 화려하면서 우아한 수국은 신부의 모습과 닮았다. 수국은 많은 사람의 눈을 끌어들인다. 꽃송이가 큰 이유도 있지만 화려함이 더욱 큰 이유다. 수국의 화려함이 눈길과 발길을 멈추게 하는 마력을 가졌다.',
    imageSrc: '/may_princess.jpg',
    href: '/pictures/may_princess.jpg',
  },
  {
    name: '사랑 송이송이, 60.0 × 42.0cm Watercolor',
    description:
      '초봄 어느 꽃보다 먼저 송이송이 솟는 새하얀 목련은 정말 사랑이다. 부지런 한 탓에 꽃샘추위를 피하지 못하고 핀 꽃이 얼어붙는 시련도 겪는다. 그래서 더 많이 사랑하게 되는지도.....',
    imageSrc: '/lovelove.jpeg',
    href: '/pictures/lovelove.jpeg',
  },
  {
    name: '대롱대롱, 28.5 × 30.0cm Watercolor',
    description:
      '발그레 볼 밝힌 섬초롱이 대롱대롱, 봄이 가고 여름이 온다는 소식 같다. 한 송이 한 송이를 정성을 들여 그리다 보면 ‘참 예쁜 꽃을 산에서 만났구나’ 하고 처음으로 비음산에서 초롱꽃을 만난 감격적인 순간을 잊을 수 없다.',
    imageSrc: '/daelong.jpeg',
    href: '/pictures/daelong.jpeg',
  },
  {
    name: '널 기다려, 42.0 × 29.0cm Watercolor',
    description:
      '마른 탱자나무 가시같던 냉 바람이 쫓겨나고 언 땅을 헤지고 새싹이 돋아나는 이른 봄날. 누구보다 먼저 핑크빛 작은 입술을 내미는 노루귀는 넘 반가운 맘에 고개를 숙여 절을해야 느낄수 있다. 작은 바람에도 한들한들 내가 아닌 다른 이를 기다리고 있다고 말하는것 같다.',
    imageSrc: '/wait_for_you.jpeg',
    href: '/pictures/wait_for_you.jpeg',
  },
  {
    name: '친구의 향기, 41.0 × 26.0cm Watercolor',
    description:
      "꿈으로 가득했던 20대를 같이 하다. 30년후에야 다시 만난 오랜 친구. 어제 본듯 무심히 '잘지냈어?' '응'  한 마디로 말할수 없는 세월을 말하지 않아도 알 듯 한 시간들. 찬 바람이래야 꽃을 피우는 구절초는 오랜 친구의 깊은 마음의 향을 품었다",
    imageSrc: '/friends.jpeg',
    href: '/pictures/friends.jpeg',
  },
  {
    name: '기대 둘, 44.0×29.5cm Watercolor',
    description:
      '자목련 두 송이가 나를 보고 방긋 웃는다. 꽃도 웃고 나도 웃고 자목련을 그리는 내내 웃는다.',
    imageSrc: '/smile_two.jpeg',
    href: '/pictures/smile_two.jpeg',
  },
];

const Picture: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const location = `/${id}`;
  const imageArr = callouts.filter(callout => callout.imageSrc === location);
  const imageObj = imageArr[0];

  // 이미지 로딩 상태를 관리하는 state
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    // 이미지 로딩이 완료되면 로딩 상태를 false로 변경
    console.log('Image loaded!');

    setLoading(false);
  };

  useEffect(() => {
    console.log('Loading state:', loading);

    // 페이지 이동 시에도 로딩 상태를 초기화
    setLoading(true);
  }, [location, setLoading]);

  return (
    <>
      <div className="px-2 -mt-20 flex h-screen items-center justify-center">
        <div className="mt-4 h-auto max-w-screen-md">
          {loading ? (
            // 로딩 중일 때 로딩바를 표시
            <MyLoading />
          ) : (
            // 로딩이 완료되면 이미지를 표시
            <></>
          )}
          <Image
            src={location}
            alt="Picture of the author"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            // layout="fill"
            objectFit="contain"
            onLoad={() => handleImageLoad()} // 이미지 로딩 완료 시 호출되는 콜백
            loading="eager" // 혹은 "lazy" 등으로 설정
          />
          <div className=" ">
            <span className="text-justify text-sm italic text-gray-500 ">
              {imageObj != null ? imageObj.name : ''}
            </span>
            <p className="text-sm mt-2 font-light text-justify text-slate-900">
              {imageObj != null ? imageObj.description : ''}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Picture;

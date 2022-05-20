import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";

const Picture: NextPage = () => {
  const router = useRouter();
  const id = router.query.params;

  return (
    // <Layout canGoBack>
    <div className=" -mt-12 flex h-screen items-center justify-center">
      <div className="h-72 w-full bg-slate-400 ">
        {/* <Image
          src="/cuty_love.jpg"
          alt="Picture of the author"
          width={430}
          height={335}

          // className="w-full h-full object-center object-cover"
        /> */}
      </div>
      <h1>{id}</h1>
    </div>
    // </Layout>
  );
};

export default Picture;

// component
import Image from "next/image";

const MyLoading = () => {
  return (
    <>
      <article className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-4">
        <Image
            src="/loading.gif"
            alt="New"
            className="w-auto h-[300px] justify-items-center object-cover"
            width={50}
            height={50}
        />
        {/*<div className="mx-auto text-center space-x-1">*/}
        {/*  <div className="inline-block w-5 h-5 bg-amber-200 rounded-full animate-loading-spinner" />*/}
        {/*  <div*/}
        {/*    style={{ animationDelay: '-0.1s' }}*/}
        {/*    className="inline-block w-5 h-5 bg-amber-200 rounded-full animate-loading-spinner"*/}
        {/*  />*/}
        {/*  <div*/}
        {/*    style={{ animationDelay: '-0.2s' }}*/}
        {/*    className="inline-block w-5 h-5 bg-amber-200 rounded-full animate-loading-spinner"*/}
        {/*  />*/}
        {/*  <div*/}
        {/*    style={{ animationDelay: '-0.3s' }}*/}
        {/*    className="inline-block w-5 h-5 bg-amber-200 rounded-full animate-loading-spinner"*/}
        {/*  />*/}
        {/*  <div*/}
        {/*    style={{ animationDelay: '-0.4s' }}*/}
        {/*    className="inline-block w-5 h-5 bg-amber-200 rounded-full animate-loading-spinner"*/}
        {/*  />*/}
        {/*</div>*/}
      </article>
    </>
  );
};

export default MyLoading;

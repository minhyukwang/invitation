import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import Map from "./components/map";
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import Nevigator from "./components/navigator";
import Main from "./components/main";
import Detail from "./components/detail";

/* This example requires Tailwind CSS v2.0+ */

const Home: NextPage = () => {
  return (
    <div>
      <Nevigator />
      <Main />
      <Detail />
      <div className="">
        <div className="max-w-2xl mx-auto px-2 grid items-center grid-cols-1 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <h4 className="font-['font-AlegreyaSans'] font-bold	 text-gray-800 text-xl">
            PLACE
          </h4>
        </div>
        <div className="max-w-2xl mx-auto py-10 px-2 grid items-center grid-cols-1 gap-y-4 gap-x-8 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
          <Map latitude={35.22943806} longitude={128.68307019} />
          <div>
            <span className="text-justify mt-4 text-gray-500">오시는 길</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

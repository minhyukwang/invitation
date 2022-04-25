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
      <div className="w-3/4 h-3/4">
        <Map latitude={35.229635} longitude={128.683258} />
      </div>
    </div>
  );
};

export default Home;

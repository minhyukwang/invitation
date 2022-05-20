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
import Footer from "./components/footer";
import Place from "./components/place";

/* This example requires Tailwind CSS v2.0+ */

const Home: NextPage = () => {
  return (
    <div>
      <Nevigator />
      <Main />
      <Place />
      <Detail />
      <Footer />
    </div>
  );
};

export default Home;

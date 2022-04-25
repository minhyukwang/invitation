import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect } from "react";
import Map from "./components/map";

const Home: NextPage = () => {
  return (
    <div>
      <div className="bg-[url('/main.jpeg')] w-full h-[800px] bg-cover bg-no-repeat bg-center">
        <h1 className="font-['MalgunGothic']">초대</h1>
      </div>
      <div className="w-3/4 h-3/4">
        <Map latitude={35.229635} longitude={128.683258} />
      </div>
    </div>
  );
};

export default Home;

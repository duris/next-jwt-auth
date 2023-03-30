import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Products from "./components/Products";
import Propscomp from "./Props/Propscomp";

const arr = ["one", "two", "three", "four", "five"];
const nums = [1, 2, 3, 4, 5, 6, 7];

export default function Home() {
  return (
    <>
      <Propscomp firstName="jow" lastName="lee" numbers={nums} age={30}>
        Columbus, Ohio
        {nums.map((num) => (
          <div>{num}</div>
        ))}
      </Propscomp>
    </>
  );
}

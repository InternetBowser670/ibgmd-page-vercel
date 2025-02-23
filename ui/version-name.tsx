import { JetBrains_Mono } from "next/font/google";
import React from "react";

const jetbrains_400weight = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function VersionName() {
  return (
    <>
      <h1
        className={
          "text-md truncate relative bottom-8 m-3 p-3 text-ellipsis text-white" +
          " " +
          jetbrains_400weight.className
        }
      >
        Made by InternetBowser - site version: 1.10.0, Compiled 2/22/25
      </h1>
    </>
  );
}

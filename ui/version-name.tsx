import { JetBrains_Mono } from "next/font/google";

const jetbrains_400weight = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function VersionName() {
  return (
    <>
      <h1
        className={
          "text-md truncate relative bottom-8 text-ellipsis text-slate-400" +
          " " +
          jetbrains_400weight.className
        }
      >
        Made by InternetBowser - site version: 0.4.8, Compiled 12/5/24
      </h1>
    </>
  );
}

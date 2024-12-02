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
          "text-md truncate  text-ellipsis text-slate-400" +
          " " +
          jetbrains_400weight.className
        }
      >
        Site version: 0.1.0, Compiled 12/2/24
      </h1>
    </>
  );
}

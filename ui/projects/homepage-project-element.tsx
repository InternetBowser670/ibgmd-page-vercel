import { JetBrains_Mono } from "next/font/google";
import { Project } from "@/src/lib/types";
import Image from "next/image";
import { CheckCircleIcon, MinusCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

const jetbrains_400weight = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

const jetbrains_800weight = JetBrains_Mono({
  weight: "800",
  subsets: ["latin"],
});

const jetbrains_600weight = JetBrains_Mono({
  weight: "600",
  subsets: ["latin"],
});

export default function HomepageProjectEl(props: Project) {
  const name = props.name || "Convoes";
  const desc = props.desc || "Finalized version indicator position";
  const date = props.date || "12/4/24"
  const prjType = props.prjType || "site"
  const imgUrl = props.imgUrl || "https://www.internetbowser.com/goofyskull-nobg.png"
  const prjStatus = props.prjStatus || "active"
  const prjUrl = props.prjUrl

  return (
    <>
      <div className="justify-self-center w-[30vw] self-center bg-black border-2 p-5 rounded-2xl flex flex-col justify-center content-center border-blue-500 border-solid m-2">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row justify-between">
            <div className="flex">
             {
                prjStatus === "active" ? <CheckCircleIcon color="#17a61a" className="pr-2" width={35} />
                : prjStatus === "dev" ? <MinusCircleIcon color="#d4c71c" className="pr-2" width={35} />
                : <XCircleIcon color="#ed2626" className="pr-2" width={35} />
              }
              <div className="flex content-center flex-row">
                <h1 className={"text-2xl" + " " + jetbrains_800weight.className}>
                  {
                    (prjUrl) ? <a className="underline" href={prjUrl}>{name} ({prjType})</a>
                    : <span>{name} ({prjType})</span>
                  }
                </h1>
                <p className={"text-lg relative left-3 text-slate-400" + " " + jetbrains_600weight.className}>
                  {" " + "- " + date}
                </p>
              </div>
            </div>
          </div>
          <br />
          <hr className="opacity-50" />
          <div>
            <br />
            <div className="flex justify-between">
              <p className={"text-lg xl:max-w-[70%]" + " " + jetbrains_400weight.className}>
                {desc}
              </p>
              <div className="flex w-[100px] justify-center flex-row flex-wrap-reverse content-center">
                <Image alt="" width={100} className="h-[100px] invisible xl:visible" height={100} src={imgUrl}></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}
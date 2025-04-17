import { JetBrains_Mono } from "next/font/google";
import { Project } from "@/src/lib/types";
import Image from "next/image";
import {
  CheckCircleIcon,
  MinusCircleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

export const jetbrains_400weight = JetBrains_Mono({
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

export default function ProjectEl(props: Project) {
  const name = props.name || "Convoes";
  const desc = props.desc || "Finalized version indicator position";
  const date = props.date || "12/4/24";
  const prjType = props.prjType || "site";
  const imgUrl = props.imgUrl;
  const prjStatus = props.prjStatus || "active";
  const prjUrl = props.prjUrl;

  return (
    <>
      <div className="w-[40vw] bg-black justify-self-center overflow-x-scroll self-center border-2 p-5 rounded-2xl flex flex-col justify-center content-center border-red-600 border-solid m-2">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row justify-between">
            <div className="flex">
              <div className="h-[35px] w-[35px]">
                {prjStatus === "active" ? (
                  <CheckCircleIcon
                    color="#17a61a"
                    className="pr-2"
                    width={35}
                  />
                ) : prjStatus === "dev" ? (
                  <MinusCircleIcon
                    color="#d4c71c"
                    className="pr-2"
                    width={35}
                  />
                ) : (
                  <XCircleIcon color="#ed2626" className="pr-2" width={35} />
                )}
              </div>

              <div className="flex content-center flex-row">
                <h1
                  className={"text-2xl" + " " + jetbrains_800weight.className}
                >
                  {prjUrl ? (
                    <a className="underline" href={prjUrl}>
                      {name} ({prjType}){" " + "- " + date}
                    </a>
                  ) : (
                    <span>
                      {name} ({prjType}) {" " + "- " + date}
                    </span>
                  )}
                </h1>
              </div>
            </div>
          </div>
          <br />
          <hr className="opacity-50" />
          <div>
            <br />
            <div className="flex justify-between">
              <p
                className={
                  "text-lg xl:max-w-[80%]" + " " + jetbrains_400weight.className
                }
              >
                {desc}
              </p>
              <div className="flex w-[100px] justify-center flex-row flex-wrap-reverse content-center">
                {typeof imgUrl === "string" && (
                  <Image
                    alt=""
                    width={100}
                    className="h-[100px] invisible xl:visible"
                    height={100}
                    src={imgUrl || "e"}
                  ></Image>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

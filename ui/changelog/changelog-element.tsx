import { JetBrains_Mono } from "next/font/google";

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


interface ChangelogProps {
  vername: string;
  changes: string;
  date: string;
}

export default function ChangelogEl(props: ChangelogProps) {
  const vername = props.vername || "0.2.8";
  const changes = props.changes || "Finalized version indicator position";
  const date = props.date || "12/4/24"

  return (
    <>
      <div className="w-[40vh] justify-self-center self-center border-2 p-3 rounded-2xl flex flex-col justify-center content-center border-red-600 border-solid m-2">
        <div className="flex flex-col justify-center">
          <div className="flex flex-row">
            <h1 className={"text-2xl" + " " + jetbrains_800weight.className}>
              {vername}
            </h1>
            <p className={"text-lg relative left-3 text-slate-400" + " " + jetbrains_600weight.className}>
              {" " + "- " + date}
            </p>
          </div>
          <div>
            <br />
            <p className={"text-lg" + " " + jetbrains_400weight.className}>
              {changes}
            </p>
          </div>  
        </div>
      </div>
    </>
  );
}

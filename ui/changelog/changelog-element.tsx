import { JetBrains_Mono } from "next/font/google";

const jetbrains_400weight = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

const jetbrains_800weight = JetBrains_Mono({
  weight: "800",
  subsets: ["latin"],
});

export default function ChangelogEl(props: any) {
  var vername = props.vername || "0.2.8";
  var changes = props.changes || "Finalized version indicator position";

  return (
    <>
      <div className="w-[30%] justify-self-center self-center border-2 p-3 rounded-2xl flex flex-col justify-center content-center border-red-600 border-solid m-2">
        <div className="flex justify-center">
          <div>
            <h1 className={"text-2xl" + " " + jetbrains_800weight.className}>
              {vername}
            </h1>
            <p className={"text-lg" + " " + jetbrains_400weight.className}>
              <br />
              {changes}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

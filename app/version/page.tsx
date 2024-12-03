import { JetBrains_Mono } from "next/font/google";

const jetbrains_400weight = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  return (
    <div className="flex w-full  text-white h-full flex justify-center content-center">
      <p className={"text-slate-400 " + ' ' + jetbrains_400weight.className}>
        0.2.8 - Finalized version indicator position
      </p>
    </div>
  );
}

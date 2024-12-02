import VersionName from "@/ui/version-name";
import { JetBrains_Mono } from "next/font/google";

const jetbrains_400weight = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  return (
    <div className="flex w-full jetbrains_400weight.classname text-white h-full flex justify-center content-center">
      <VersionName />
    </div>
  );
}

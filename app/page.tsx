import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Pfp from "@/ui/homepage/pfp";
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { TypescriptOriginal, NextjsOriginal, ReactOriginal, MongodbOriginal, VscodeOriginal, ExpressOriginal } from 'devicons-react';
import { SocialIcon } from "react-social-icons";
import { LatestProjectElement } from "@/ui/projects/project-elements";
import { space_700weight_italic, space_700weight } from "./fonts/fonts";
import ScrollDown from "@/ui/homepage/scroll-indicator";

const jetbrains_400weight = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

const jetbrains_800weight = JetBrains_Mono({
  weight: "800",
  subsets: ["latin"],
});

export default function Page() {
  return (
    <>
      <br />
      <br />
      <main className="">
        <div className={`w-[100vw] animate-fade flex italic h-[100vh] ${space_700weight_italic.className}`}>
          <div className="h-full items-center content-center pl-50">
            <div className={`ml-[2px] `}>
              <h1
                className={
                  "text-[170px] left-[50px] bottom-[50px] opacity-50 truncate relative text-ellipsis text-slate-400" +
                  " " +
                  space_700weight.className
                }
              >
                ibgmd/
              </h1>
              <div className="flex">
                <h1
                  className={
                    "text-[150px] p-0 relative bottom-[200px] italic text-blue-500" +
                    " " +
                    space_700weight_italic.className
                  }
                >
                  InternetBowser
                </h1>
              </div>
              <div className="flex relative bottom-[225]">
                <div className="" >
                  <MapPinIcon className="w-[40px] h-[40px] left-[40px] relative animate-ping fill-red-600 stroke-red-600" />
                </div>
                <div className="" >
                  <MapPinIcon className="w-[40px] h-[40px] fill-red-600 stroke-red-600" />
                </div>
                <p
                  className={
                    "text-3xl ml-4  " + " " + jetbrains_400weight.className
                  }
                >
                  Texas, USA
                </p>
              </div>

            </div>


          </div>
        </div>
        <div className="p-5">
          <div>
            <div className="border-solid border-2 bg-black border-red-600 rounded-3xl p-5 m-5">
              <p className={
                "text-2xl text-blue-500 opacity-50 text-ellipsis" +
                " " +
                jetbrains_800weight.className
              }>
                (unprofessional)
              </p>
              <p className={
                "text-3xl text-blue-500 text-ellipsis" +
                " " +
                jetbrains_800weight.className
              }>
                Full stack developer && software engineer
              </p>

              <br />
              <br />


              <div className="flex justify-evenly flex-row mx-3">
                <NextjsOriginal className="rounded-full border-white border-solid border-4" size="100" />
                <div className="w-[100px] h-[100px] rounded-full flex justify-center content-center bg-white">
                  <ExpressOriginal className="mt-3" size="80" />
                </div>
                <TypescriptOriginal className="rounded-2xl" size="100" />
                <ReactOriginal size="100" />
                <MongodbOriginal size="100" />
                <VscodeOriginal size={100} />
              </div>

            </div>
            <br />

            <br />
            <br />
          </div>
        </div>



        <br />

        <div className="border-solid border-2 bg-black border-red-600 rounded-3xl p-5 m-5">
          <div
            className={
              "flex justify-center" + " " + jetbrains_800weight.className
            }
          >
            <Link className="flex" href="/projects">
              Click ​<p className="underline"> here </p>​ to
              see my projects
            </Link>
          </div>
          <br />
          <hr className="opacity-50" />
          <br />

          <LatestProjectElement />
        </div>

        <br />


        <div className={`border-solid border-2 bg-black flex-shrink border-red-600 rounded-3xl p-5 ${jetbrains_400weight.className}`}>
          <h1 className="text-2xl">
            Contact me:
          </h1>
          <br />
          <SocialIcon className="m-2" network="discord" url="https://discordapp.com/users/1209132582650773586" />
          <SocialIcon className="m-2" url="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=joshua.ghattas@gmail.com&tf=1" />
          <SocialIcon className="m-2" url="https://buymeacoffee.com/internetbowser" />
          <SocialIcon className="m-2" url="https://github.com/InternetBowser670" />
        </div>


        <div className="border-solid border-2 bg-black border-red-600 rounded-3xl p-5 m-5">
          <SignedOut>
            <div className={"text-4xl flex justify-center text-blue-500 animate-rainbowText text-ellipsis" +
              " " +
              jetbrains_800weight.className}>
              <SignInButton />
            </div>
          </SignedOut>
          <SignedIn>
            <div className={"text-4xl flex justify-center text-blue-500 animate-rainbowText text-ellipsis" +
              " " +
              jetbrains_800weight.className}>
              <UserButton />
              <div className='flex justify-center ml-3 pl-3 border-l-2 border-solid border-slate-400'>
                <SignOutButton />
              </div>
            </div>
          </SignedIn>
        </div>
        <ScrollDown />
      </main>
    </>
  );
}

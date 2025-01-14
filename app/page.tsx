import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Pfp from "@/ui/homepage/pfp";
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { TypescriptOriginal, NextjsOriginal, ReactOriginal, MongodbOriginal, VscodeOriginal, ExpressOriginal } from 'devicons-react';
import { SocialIcon } from "react-social-icons";
import { LatestProjectElement } from "@/ui/projects/project-elements";

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
        <div className="flex flex-wrap gap-3 p-5">
          <div className="max-w-450 justify-around flex-1">
            <div className="flex relative justify-center content-around rainbowBorderAddtl bg-black rounded-3xl p-5 m-5">
              <div className="flex justify-center content-center">
                <div className="flex content-center">
                  <div className="relative top-1/4">
                    <Pfp size={"4em"} />
                  </div>
                </div>
                <div className="">
                  <div>
                    <h1
                      className={
                        "text-3xl truncate  text-ellipsis text-slate-400" +
                        " " +
                        jetbrains_400weight.className
                      }
                    >
                      ibgmd/
                    </h1>
                  </div>
                  <div className="flex justify-center">
                    <p
                      className={
                        "text-4xl truncate  sm:text-5xl md:text-6xl lg:text-7xl text-ellipsis text-blue-500" +
                        " " +
                        jetbrains_800weight.className
                      }
                    >
                      InternetBowser
                    </p>
                  </div>
                  <div className="flex">
                    <div className="w-6">
                      <MapPinIcon className="w-15 h-15 fill-red-600 stroke-red-600" />
                    </div>

                    <p
                      className={
                        "text-lg" + " " + jetbrains_400weight.className
                      }
                    >
                      Texas, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className={`border-solid border-2 bg-black border-red-600 rounded-3xl p-5 m-5 ${jetbrains_400weight.className}`}>
              <h1 className="text-2xl">
                Contact me: 
              </h1>
              <br />
               <SocialIcon className="m-2" network="discord" url="https://discordapp.com/users/1209132582650773586" />
               <SocialIcon className="m-2" url="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=joshua.ghattas@gmail.com&tf=1" />
               <SocialIcon className="m-2" url="https://buymeacoffee.com/internetbowser" />
               <SocialIcon className="m-2" url="https://github.com/InternetBowser670" />
               <SocialIcon className="m-2" url="https://internetbowser.slack.com/team/U086MBA282C" />
            </div>
            <br />
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

          <div className="max-w-450 justify-around flex-1">

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
          </div>
        </div>
      </main>
    </>
  );
}

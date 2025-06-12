"use client";

import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Marquee from "react-fast-marquee";
import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import {
  TypescriptOriginal,
  NextjsOriginal,
  ReactOriginal,
  MongodbOriginal,
  VscodeOriginal,
  ExpressOriginal,
  Html5Original,
  Css3Original,
  JavascriptOriginal,
  PythonOriginal,
  TensorflowLine,
  Windows11Original,
} from "devicons-react";
import { SocialIcon } from "react-social-icons";
import { FadeInDiv } from "@/ui/fadeInDiv";
import { LatestProjectElement } from "@/ui/projects/project-elements";
import { space_700weight_italic } from "./fonts/fonts";
import ScrollDown from "@/ui/homepage/scroll-indicator";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useState, useEffect } from "react";

const jetbrains_400weight = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

const jetbrains_800weight = JetBrains_Mono({
  weight: "800",
  subsets: ["latin"],
});

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <br />
      <br />
      <main className="overflow-x-hidden">
        <div
          className={`w-[99vw] animate-fade flex italic h-[100vh] ${space_700weight_italic.className}`}
        >
          <div className="h-[100vh] items-center content-center pl-50">
            <div className={`ml-[2px]`}>
              <div className="flex">
                <h1
                  className={
                    "text-[8vw] p-0 relative left-[50px] bottom-[170px] italic text-blue-500" +
                    " " +
                    space_700weight_italic.className
                  }
                >
                  InternetBowser
                </h1>
              </div>
              <div className="flex -left-[400px] relative bottom-[425px]">
                <div
                  className={`${jetbrains_400weight.className} flex flex-wrap relative items-center left-[400px] top-[305px] text-3xl`}
                >
                  <div className="">
                    <MapPinIcon className="w-[40px] h-[40px] left-[40px] relative animate-ping fill-red-600 stroke-red-600" />
                  </div>
                  <div className="">
                    <MapPinIcon className="w-[40px] h-[40px] fill-red-600 stroke-red-600" />
                  </div>
                  <p
                    className={
                      "text-[2vw] mx-4 border-r-gray-500 border-r-2 pr-5" +
                      " " +
                      jetbrains_400weight.className
                    }
                  >
                    Houston, Texas - Full stack web developer
                  </p>
                  <div>
                    <SocialIcon
                      className="m-2"
                      network="discord"
                      url="https://discordapp.com/users/1209132582650773586"
                    />
                    <SocialIcon
                      className="m-2"
                      url="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=joshua.ghattas@gmail.com&tf=1"
                    />
                    <SocialIcon
                      className="m-2"
                      url="https://buymeacoffee.com/internetbowser"
                    />
                    <SocialIcon
                      className="m-2"
                      url="https://github.com/InternetBowser670"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5">
          <FadeInDiv>
            <div className="flex flex-col content-center justify-center w-full p-2 py-3 overflow-x-scroll bg-black border-2 border-red-600 rounded-3xl">
              <div className="flex items-center content-center justify-center">
                <p className={`${jetbrains_400weight.className}`}>
                  Programming with these tools:
                </p>
              </div>
              <br />
              <Marquee className="py-2 bg-gray-800" autoFill={true} speed={200}>
                <div className="flex ">
                  <NextjsOriginal
                    className="mx-5 border-4 border-white border-solid rounded-full"
                    size="100"
                  />
                  <div className="w-[100px] h-[100px] mx-5 rounded-full flex justify-center content-center bg-white">
                    <ExpressOriginal className="mt-3" size="80" />
                  </div>
                  <TypescriptOriginal className="mx-5 rounded-2xl" size="100" />
                  <ReactOriginal size="100" className="mx-5" />
                  <MongodbOriginal size="90" className="mx-5" />
                  <VscodeOriginal size={100} className="mx-5" />
                  <Html5Original size={100} className="mx-5" />
                  <Css3Original size={100} className="mx-5" />
                  <JavascriptOriginal size={100} className="mx-5 rounded-2xl" />
                  <PythonOriginal size={100} className="mx-5" />
                  <TensorflowLine size={100} className="mx-5" />
                  <Windows11Original size={100} className="mx-5" />
                  <SiGithub width={100} height={100} className="mx-5" />
                </div>
              </Marquee>
              <br />
            </div>

            <br />

            <br />
            <br />
          </FadeInDiv>
        </div>

        <br />

        <FadeInDiv>
          <div className="p-5 m-5 overflow-x-scroll bg-black border-2 border-red-600 border-solid shrink rounded-3xl">
            <div
              className={
                "flex justify-center" + " " + jetbrains_800weight.className
              }
            >
              <Link className="flex" href="/projects">
                Click <p className="mx-2 underline"> here </p>to see my projects
              </Link>
            </div>
            <br />
            <hr className="opacity-50" />
            <br />

            <LatestProjectElement />
          </div>
        </FadeInDiv>

        <br />

        <FadeInDiv>
          <div className="p-5 m-5 bg-black border-2 border-red-600 border-solid rounded-3xl">
            {mounted && (
              <>
                {" "}
                <SignedOut>
                  <div
                    className={
                      "text-4xl flex justify-center shrink text-blue-500 animate-rainbowText text-ellipsis" +
                      " " +
                      jetbrains_800weight.className
                    }
                  >
                    <SignInButton />
                  </div>
                </SignedOut>
                <SignedIn>
                  <div
                    className={
                      "text-4xl flex justify-center text-blue-500 animate-rainbowText text-ellipsis" +
                      " " +
                      jetbrains_800weight.className
                    }
                  >
                    <UserButton />
                    <div className="flex justify-center pl-3 ml-3 border-l-2 border-solid border-slate-400">
                      <SignOutButton />
                    </div>
                  </div>
                </SignedIn>
              </>
            )}
          </div>
        </FadeInDiv>
        <ScrollDown />
      </main>
    </>
  );
}

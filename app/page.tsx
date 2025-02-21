"use client";

import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Marquee from "react-fast-marquee";
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { TypescriptOriginal, NextjsOriginal, ReactOriginal, MongodbOriginal, VscodeOriginal, ExpressOriginal, Html5Original, Css3Original, JavascriptOriginal, CsharpPlain, PythonOriginal, TensorflowLine, Windows11Original, GithubOriginal } from 'devicons-react';
import { SocialIcon } from "react-social-icons";
import { FadeInDiv } from "@/ui/fadeInDiv";
import { useState, useEffect } from "react";
import { LatestProjectElement } from "@/ui/projects/project-elements";
import { space_700weight_italic, space_700weight } from "./fonts/fonts";
import ScrollDown from "@/ui/homepage/scroll-indicator";
import React from "react";

const jetbrains_400weight = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

const jetbrains_800weight = JetBrains_Mono({
  weight: "800",
  subsets: ["latin"],
});

const TimeSince = ({ startDate }: { startDate: string }) => {
  const [yearsAgo, setYearsAgo] = useState<string | null>(null); // Initially null to avoid mismatch

  useEffect(() => {
    // Now safe to update on client-side
    const updateYearsAgo = () => {
      const startTime = new Date(startDate).getTime();
      const now = Date.now();
      const yearsPassed = (now - startTime) / (1000 * 60 * 60 * 24 * 365.25);
      setYearsAgo(yearsPassed.toFixed(9));
    };

    const interval = setInterval(updateYearsAgo, 10);

    return () => clearInterval(interval);
  }, [startDate]);

  if (yearsAgo === null) return null; // Prevent mismatch during SSR

  return <span>{yearsAgo} year old</span>;
};



export default function Page() {
  return (
    <>
      <br />
      <br />
      <main className="overflow-x-hidden">
        <div className={`w-[99vw] animate-fade flex italic h-[100vh] ${space_700weight_italic.className}`}>
          <div className="h-[100vh] items-center content-center pl-50">
            <div className={`ml-[2px]`}>
              <div className={`${jetbrains_400weight.className} relative left-[400px] top-[350px] text-3xl`}>Full stack web developer</div>
              <h1
                className={
                  "text-[170px] left-[50px] bottom-[50px] truncate relative text-ellipsis text-slate-800" +
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
              <div className="flex relative bottom-[225px]">
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
                  Houston, Texas
                </p>
              </div>

            </div>


          </div>
        </div>
        <div className="p-5">
          <FadeInDiv>
            <div className="w-full flex flex-col bg-black justify-center content-center border-red-600 rounded-3xl py-3 border-2">
              <div className="flex content-center justify-center items-center">
                <p className={`${jetbrains_400weight.className}`}>Programming with these tools:</p>
              </div>
              <br />
              <Marquee className="bg-gray-800 py-2" autoFill={true} speed={200}>

                <div className="flex ">
                  <NextjsOriginal className="rounded-full mx-5 border-white border-solid border-4" size="100" />
                  <div className="w-[100px] h-[100px] mx-5 rounded-full flex justify-center content-center bg-white">
                    <ExpressOriginal className="mt-3" size="80" />
                  </div>
                  <TypescriptOriginal className="rounded-2xl mx-5" size="100" />
                  <ReactOriginal size="100" className="mx-5" />
                  <MongodbOriginal size="90" className="mx-5" />
                  <VscodeOriginal size={100} className="mx-5" />
                  <Html5Original size={100} className="mx-5" />
                  <Css3Original size={100} className="mx-5" />
                  <JavascriptOriginal size={100} className="rounded-2xl mx-5" />
                  <CsharpPlain stroke="white" strokeWidth={"3"} size={100}  fill="white" className="mx-5" />
                  <PythonOriginal size={100} className="mx-5" />
                  <TensorflowLine size={100} className="mx-5" />
                  <Windows11Original size={100} className="mx-5" />
                  <GithubOriginal size={100} stroke="white" strokeWidth={"3"} className="mx-5" />
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
          <div className="border-solid border-2 bg-black border-red-600 rounded-3xl p-5 m-5">
            <div
              className={
                "flex justify-center" + " " + jetbrains_800weight.className
              }
            >
              <Link className="flex" href="/projects">
                Click <p className="underline mx-2"> here </p>to
                see my projects
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
        </FadeInDiv>


        <FadeInDiv>
          <div className="border-solid border-2 bg-black border-red-600 rounded-3xl p-5 m-5">
            <SignedOut>
              <div className={"text-4xl flex justify-center shrink text-blue-500 animate-rainbowText text-ellipsis" +
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
        </FadeInDiv>
        <ScrollDown />
      </main>
    </>
  );
}

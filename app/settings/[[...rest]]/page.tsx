"use client";

import { JetBrains_Mono } from "next/font/google";
import { UserProfile } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import React from "react";

const jetbrains_400weight = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
});

export default function SettingsPage() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div className={`h-full w-full flex justify-center ${jetbrains_400weight.className}`}>Loading...</div>;
  }

  if (!user) {
    return (
      <>
        <br />
        <br />
        <div className={`h-full w-full flex justify-center ${jetbrains_400weight.className}`}>
          You need to sign in to view this page.
        </div>
      </>
    );
  }

  return (
    <>
      <div className={`h-full w-full flex justify-center ${jetbrains_400weight.className}`}>
        <UserProfile />
      </div>
    </>
  )
}
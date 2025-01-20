"use client";

import { space_400weight } from "@/app/fonts/fonts"; 
import { TypewriterEffect } from "@/src/components/ui/typewriter-effect";
import { MoveRight } from "lucide-react";

export function HomepageProgrammingIntro() {
    const words = [
        {
            text: "Programming",
        },
        {
            text: "web",
        },
        {
            text: "apps",
        },
        {
            text: "with",
        },
        {
            text: "these",
        },
        {
            text: "tools.",
        },
        {
            text: "",
            icon: MoveRight,
        },
    ];

    return(<>
        <div className="flex flex-col">
            <TypewriterEffect className={`${space_400weight.className} text-3xl flex`} cursorClassName={`bg-blue-700 rounded-2xl`} words={words} />
        </div>
    </>)

}
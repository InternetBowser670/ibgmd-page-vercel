"use client";

import React from "react";
import { JetBrains_Mono } from "next/font/google";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const jetbrains_800weight = JetBrains_Mono({
    weight: "800",
    subsets: ["latin"],
});

import Link from "next/link";
import Pfp from "./homepage/pfp";

export default function Navbar() {
    const links = [
        { name: "Home", href: "/" },
        {
            name: "Projects",
            href: "/projects",
        },
        { name: "Changelog", href: "/changelog" },
    ];

    const pathname = usePathname();

    return (
        <>
            <div className="flex sm:flex w-full justify-center m-5 overflow-hidden">
                <div className="bg-black fixed z-10 justify-center border-solid rounded-2xl min-w-500 flex content-center h-9 m-5 p-5 border-red-500 border-2">
                    <div className="relative bottom-4 flex flex-row w-15 h-8">
                        <div className="flex justify-center">
                            <Link className="h-8 w-8 overflow-hidden" href="/">
                                <Pfp size="2rem" />
                            </Link>
                        </div>
                        <div className="flex flex-row justify-around px-3">
                            {links.map((link) => {
                                return (
                                    <div
                                        className="flex flex-row mx-3 h-full justify-center"
                                        key={link.name}
                                    >
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={clsx(
                                                jetbrains_800weight.className +
                                                    " " +
                                                    "p-1 relative rounded-2xl",
                                                {
                                                    "text-black animate-rainbowText-fast":
                                                        pathname === link.href,
                                                },
                                            )}
                                        >
                                            <p>{link.name}</p>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        </>
    );
}

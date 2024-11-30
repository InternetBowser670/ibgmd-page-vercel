"use client";

import { JetBrains_Mono } from 'next/font/google'

const jetbrains_400weight = JetBrains_Mono({
    weight: '400',
    subsets: ['latin'],
  })
  

import Link from 'next/link';
import Pfp from './homepage/pfp'

export default function Navbar() {

    return (
        <>
            <div className='border-solid rounded-2xl h-50 p-15 border-red-500 border-2 justify-center content-center w-100 jetbrains_400weight.className flex'>
                <div className='flex justify-center content-center'>
                    <div className="shrink h-32">
                        <Link href="/">
                            <Pfp size="2rem" />
                        </Link>
                    </div>

                    <div className='flex flex-row m-5 relative bottom-10'>
                        <ul className={`navbar-menu flex flex-row justify-center content-center ${jetbrains_400weight.className}`}>
                            <li className="jetbrains_400weight.className relative m-5 navbar-item">
                                <Link href="/">
                                    <p className={jetbrains_400weight.className}>
                                        Home
                                    </p>
                                </Link>
                            </li>
                            <li className="relative m-5 navbar-item">
                                <Link href="/projects" >Projects</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
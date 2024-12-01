"use client";

import React from 'react';
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
            <div className='w-full flex justify-center m-5'>
                <div className='justify-center border-solid rounded-2xl flex content-center h-9 m-5 max-w-1/3 min-w-250 p-5 border-red-500 border-2'>
                    <div className='relative bottom-4 w-15 h-11'>
                        <div className='flex h-11'>

                                <Link className='h-10 overflow-hidden' href="/">
                                    <Pfp size="2rem" />
                                </Link>

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
                </div>
            </div>
        </>
    );
}
"use client";

import React from 'react';
import { JetBrains_Mono } from 'next/font/google'
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

const jetbrains_800weight = JetBrains_Mono({
    weight: '800',
    subsets: ['latin'],
  })
  

import Link from 'next/link';
import Pfp from './homepage/pfp'

export default function Navbar() {

    const links = [
        { name: 'Home', href: '/' },
        {
          name: 'Projects',
          href: '/projects',
        },
        { name: 'Changelog', href: '/changelog' },
      ];
      

    const pathname = usePathname();

    return (
        <>
            <div className='hidden sm:flex w-full justify-center m-5 overflow-hidden'>
                <div className='justify-center border-solid rounded-2xl min-w-500 flex content-center h-9 m-5 p-5 border-red-500 border-2'>
                    <div className='relative bottom-4 w-15 h-14'>
                        <div className='inline-grid grid-cols-4 gap-3 grid-rows-1'>

                            <div className='flex justify-center'>
                                <Link className='h-8 w-8 overflow-hidden' href="/">
                                    <Pfp size="2rem" />
                                </Link>
                            </div>

                            {links.map((link) => {
                                            
                                return (
                                    
                                    <div className='flex flex-row w-30 justify-center' key={link.name}>
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={clsx(jetbrains_800weight.className + " " + "p-1 rounded-2xl", {
                                                'bg-gray-700 animate-rainbowText-fast': pathname === link.href,
                                            })}>
                                            <p>{link.name}</p>
                                        </Link>
                                    </div>

                                    
                                );
                            })}

                                
                                
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
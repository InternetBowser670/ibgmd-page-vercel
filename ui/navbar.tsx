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
            <div className='w-full flex justify-center m-5'>
                <div className='justify-center border-solid rounded-2xl flex content-center h-9 m-5 max-w-1/3 min-w-250 p-5 border-red-500 border-2'>
                    <div className='relative bottom-4 w-15 h-11'>
                        <div className='flex h-11'>

                            <Link className='h-10 overflow-hidden' href="/">
                                <Pfp size="2rem" />
                            </Link>

                            <div className='flex flex-row m-5 relative'>
                                <div className='flex flex-row justify-between'>
                                    {links.map((link) => {
                                        
                                        return (
                                            
                                            <div className='flex p-5 flex-row' key={link.name}>
                                                <Link
                                                    key={link.name}
                                                    href={link.href}
                                                    className={clsx(jetbrains_800weight.className + " " + "rounded-2xl", {
                                                        'bg-gray-500 animate-rainbowText-fast': pathname === link.href,
                                                    })}>
                                                    <p className="relative bottom-9 hidden md:block">{link.name}</p>
                                                </Link>
                                            </div>

                                            
                                        );
                                    })}
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
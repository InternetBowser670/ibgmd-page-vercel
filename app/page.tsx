import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Pfp from "@/ui/homepage/pfp";
import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

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
      <main className="">
        <div className="flex flex-wrap gap-4 p-5">
          <div className="max-w-450 flex-1">
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
                      ​ Texas, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />

            <div
              className={
                "flex justify-center" + " " + jetbrains_800weight.className
              }
            >
              <Link className="flex" href="/projects">
                click ​<p className="underline"> here </p>​ to
                see my projects
              </Link>
            </div>

            <br />
            <div className="border-solid border-2 border-red-600 rounded-3xl p-5 m-5">
              <p
                className={
                  "text-5xl text-blue-500 animate-rainbowText text-ellipsis" +
                  " " +
                  jetbrains_800weight.className
                }
              >
                DONATE TO ME: 
                <br />
                <br />
              </p>
              <ul>
                <li className="noBulletPoint">
                  <a className={"mt-2 text-3xl text-blue-500 animate-rainbowText text-ellipsis underline" +
                  " " +
                  jetbrains_800weight.className} href="https://pay.internetbowser.com">
                    https://pay.internetbowser.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-450  content-center flex-1">
            <div className="border-solid border-2 border-red-600 rounded-3xl p-5 m-5">
              <p
                className={
                  "text-5xl text-blue-500 text-ellipsis" +
                  " " +
                  jetbrains_800weight.className
                }
              >
                Next features:
                <br />
                <br />
                
              </p>
              <ul className={
                  "text-3xl text-blue-500 text-ellipsis" +
                  " " +
                  jetbrains_800weight.className
                }>
                  <li>
                    Fixing Firebase issues (1.0)
                  </li>
                  <li>
                    &quot;Contact me&quot; page (1.1)
                  </li>
                  <li>
                    Adding first project (2.0)
                  </li>
                </ul>
            </div>
            <div className="border-solid border-2 border-red-600 rounded-3xl p-5 m-5">
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

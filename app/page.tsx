import Link from "next/link"
import { JetBrains_Mono } from 'next/font/google'
import { MapPinIcon } from '@heroicons/react/24/solid'

const jetbrains_400weight = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
})

const jetbrains_800weight = JetBrains_Mono({
  weight: '800',
  subsets: ['latin'],
})

export default function Page() {
  return (
    <>
      <div className="flex flex-row p-5">
        <div className="w-1/2">
          <div className="flex justify-center content-around">
            <div>
              <div className="">
                <div>
                  <h1 className={"text-3xl text-slate-600" + " " + jetbrains_400weight.className}>
                    ibgmd/
                  </h1>
                </div>  
                <div className="flex justify-center">
                  <p className={"text-7xl text-blue-500" + " " + jetbrains_800weight.className}>
                      InternetBowser
                  </p>
                  
                </div>
                <div className="flex">
                  <div className="w-6">
                   <MapPinIcon className="w-15 h-15 fill-red-600 stroke-red-600" />
                  </div>
                  
                  <p className={"text-lg" + " " + jetbrains_400weight.className}>
                  ​  Texas, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <div className={"flex justify-center"  + " " + jetbrains_800weight.className}>
            <Link className="flex" href="/projects">click ​<p style={{ textDecoration: 'underline' }}> here </p>​ to see my projects</Link>
          </div>
          <br />
          <div className="border-solid border-2 border-red-600 rounded-3xl p-5 m-5">
            <p className={"text-5xl text-blue-500 animate-rainbowText" + " " + jetbrains_800weight.className}>
                        THIS WEBSITE IS STILL IN THE EARLY ALPHA TESTING PAGE - DO NOT WORRY ABOUT MY PROGRAMMING SKILLS
            </p>
          </div>
          
        </div>
        <div className="w-1/2">
          
        </div>
      </div>
    </>
  )
}

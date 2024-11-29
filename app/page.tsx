import Link from "next/link"
import { JetBrains_Mono } from 'next/font/google'
import { MapPinIcon } from '@heroicons/react/24/solid'
import Pfp from '@/ui/homepage/pfp'

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
      <div className="flex flex-wrap gap-4 p-5">
        <div className="max-w-500 flex-1">
          <div className="flex justify-center content-around overflow-hidden border-solid border-2 border-red-600 rounded-3xl p-5 m-5">
            <div className="flex justify-center content-center">
              <div className="flex content-center">
                <div className="relative top-1/4">
                 <Pfp size={"4em"}  />
                </div>
                
              </div>
              <div className="">
                <div>
                  <h1 className={"text-3xl truncate  text-ellipsis text-slate-600" + " " + jetbrains_400weight.className}>
                    ibgmd/
                  </h1>
                </div>  
                <div className="flex justify-center">
                  <p className={"text-4xl truncate  sm:text-5xl md:text-6xl lg:text-7xl text-ellipsis text-blue-500" + " " + jetbrains_800weight.className}>
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
                        THIS WEBSITE IS STILL IN THE EARLY DEVELOPEMENT PHASE - DO NOT WORRY ABOUT MY PROGRAMMING SKILLS
            </p>
          </div>
          
        </div>



        <div className="max-w-500  content-center flex-1">
          <div className="border-solid border-2 border-red-600 rounded-3xl p-5 m-5">
              <p className={"text-4xl text-blue-500 animate-rainbowText" + " " + jetbrains_800weight.className}>
                        Website is currently being updated ~daily, hope to have a reasonable beta version by 12/7/24.
              </p>
            </div>
            </div>
          </div>
    </>
  )
}

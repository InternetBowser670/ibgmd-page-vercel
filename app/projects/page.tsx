import { JetBrains_Mono } from 'next/font/google'
import ProjectElements from '@/ui/projects/project-elements'
import { CheckCircleIcon, MinusCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

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
            <br />
            <br />
            <main>
                <div className='flex flex-col justify-center items-center'>
                    <div className='justify-self-center w-[30vw] self-center bg-black border-2 p-5 rounded-2xl flex flex-col justify-center content-center overflow-x-scroll border-blue-500 border-solid m-2"'>
                        <h1 className={"text-3xl" + " " + jetbrains_800weight.className}>
                            Key:
                        </h1>
                        <br />
                        <div className='flex flex-row'>
                            <div className='min-w-[35px]'><CheckCircleIcon color="#17a61a" className="pr-2" width={35} /></div>
                            <p className={"text-md" + " " + jetbrains_400weight.className}>
                                : Project is available
                            </p>
                        </div>
                        <div className='flex flex-row'>
                        <div className='min-w-[35px]'><MinusCircleIcon color="#d4c71c" className="pr-2" width={35} /></div>
                            <p className={"" + " " + jetbrains_400weight.className}>
                                : Project is in developement
                            </p>
                        </div>
                        <div className='flex flex-row'>
                        <div className='min-w-[35px]'><XCircleIcon color="#ed2626" className="pr-2" width={35} /></div>
                            <p className={"" + " " + jetbrains_400weight.className}>
                                : Project has been terminated
                            </p>
                        </div>
                        
                    </div> 
                    <br />
                    <br />
                    <div className='flex flex-col'>
                        <ProjectElements />
                    </div>
                </div>
            </main>
        </>
    )
}
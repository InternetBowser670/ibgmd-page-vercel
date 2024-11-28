import yosh from '@/public/yosh.png'
import GdDrip from '@/public/gd-drip.png'
import ib from '@/public/ib.png'
import skullPfp from '@/public/goofyskull.png'
import Image from "next/image"
import "@/ui/css/tailwind.css";

export default function PfpCarousel() {
    return (
        <>

            <div className="border-solid border-2 border-red-600 grid grid-cols-2 grid-rows-2 rounded-3xl p-5">
                    <div className='overflow-hidden max-w-200'>
                        <Image src={yosh} alt={`yoshi pfp`} className='makeImageCircular rounded-full overflow-hidden' width={200} />
                    </div>

                    <div className='overflow-hidden max-w-200'>
                        <Image src={GdDrip} alt={`gd pfp`} className='makeImageCircular rounded-full overflow-hidden' width={200} />
                    </div>
                    <div className='overflow-hidden max-w-200'>
                        <Image src={ib} alt={`bowser pfp`} className='makeImageCircular rounded-full overflow-hidden' width={200} />
                    </div>
                    <div className='overflow-hidden max-w-200'>
                        <Image src={skullPfp} alt={`skull pfp`} className='makeImageCircular rounded-full overflow-hidden' width={200} />
                    </div>
            </div>
        </>
        
    );
}
import goofySkull from '@/public/goofyskull.png'
import Image from 'next/image'

export default function Pfp() {
    return (
        <div className='borfer-1 border-solid border-l-fuchsia-500'>
            <Image src={goofySkull} alt='pfp' width={70} className='makeImageCircular h-auto w-30 borfer-1 border-solid border-l-fuchsia-500' />
        </div>
    )
}
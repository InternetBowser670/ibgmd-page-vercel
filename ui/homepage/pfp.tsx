import goofySkull from '@/public/goofyskull.png'
import Image from 'next/image'

export default function Pfp({ size = "1em" }) {
    return (
        <div
      className="rounded-full overflow-hidden flex items-center justify-center"
      style={{
        width: size,
        height: size,
      }}
    >
      <Image
        src={goofySkull} // Replace with your image path
        alt="Profile Picture"

        className="object-contain"
      />
    </div>
    )
}
import { JetBrains_Mono } from 'next/font/google'

const jetbrains_400weight = JetBrains_Mono({
  weight: '400',
  subsets: ['latin'],
})

const jetbrains_800weight = JetBrains_Mono({
  weight: '800',
  subsets: ['latin'],
})

export default function VersionName() {
  return (
    <>
      <p className={"text-md text-white" + " " + jetbrains_400weight.className}>
      Ver. 0.1.0
    </p>
  </>)
}
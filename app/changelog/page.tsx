import { JetBrains_Mono } from "next/font/google";
import Link from "next/link"

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
            <main>
                <div className="flex justify-center items-center">
                    <div>
                        <h1
                            className={
                                "text-3xl" + " " + jetbrains_800weight.className
                            }
                        >
                            This page is under construction
                        </h1>
                        <br />
                        <p className={"" + " " + jetbrains_400weight.className}>
                            This feature is next on my todo list, don&#39;t
                            worry, but for now go to <Link className="underline" href={"/version"}>/version</Link> to see the most recent updates.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}

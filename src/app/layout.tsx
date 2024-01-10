import {ReactNode} from "react";
import {Metadata} from "next";
import {Inter} from 'next/font/google'
import {twMerge} from "tailwind-merge";
import Script from "next/script";

import '@/styles/tailwind.css';
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
})

interface RootLayoutProps {
    children: ReactNode
}

export const metadata: Metadata = {
    title: "Clarwanda",
    description: "Clarwanda is a cell based Church that believes in the Bible and the power to change lives through a living relationship with Jesus Christ. Come join us!",
    keywords: ["Christian Life Assembly", "CLA", "Rwanda", "Church", "Cell Based Church", "Christian", "Jesus", "Christ", "Bible", "Bible Study", "Bible Study Group", "Bible Study Cell"],
    icons: {
        icon: "/favicon.png",
    },
}

const company = "CLA Rwanda";

export default function RootLayout({children}: Readonly<RootLayoutProps>) {
    return (
        <html
            className={twMerge(inter.className, "h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']")}
            lang="en"
        >
        <body className="flex h-full flex-col bg-surface">
        <Header company={company}/>
        <main className="bg-surface pt-32 pb-4">
            {children}
        </main>
        <Script/>
        <Footer/>
        </body>
        </html>
    )
}
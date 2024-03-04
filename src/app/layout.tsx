import { ReactNode } from "react";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

import "@/styles/tailwind.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import clsx from "clsx";
import { getAllMinistries } from "@/sanity/ministries";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Clarwanda",
  description:
    "Clarwanda is a cell based Church that believes in the Bible and the power to change lives through a living relationship with Jesus Christ. Come join us!",
  keywords: [
    "Christian Life Assembly",
    "CLA",
    "Rwanda",
    "Church",
    "Cell Based Church",
    "Christian",
    "Jesus",
    "Christ",
    "Bible",
    "Bible Study",
    "Bible Study Group",
    "Bible Study Cell",
  ],
  icons: {
    icon: "/favicon.png",
  },
};

const company = "CLA Rwanda";

export default async function RootLayout({
  children,
}: Readonly<RootLayoutProps>) {
  const ministries = await getAllMinistries();
  return (
    <html
      className={clsx(
        inter.className,
        "h-full scroll-smooth bg-white antialiased [font-feature-settings:'ss01']"
      )}
      lang="en"
    >
      <body className="bg-surface flex h-full flex-col">
        <Header ministries={ministries} company={company} />
        <main className="bg-surface pt-16 md:pt-32">{children}</main>
        <Script />
        <Footer />
      </body>
    </html>
  );
}

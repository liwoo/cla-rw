import {Header} from "@/components/Header";
import {FC, ReactNode} from "react";
import {Footer} from "@/components/Footer";
import {SEO, SEOProps} from "@/components/SEO";

const company = "CLA Rwanda";

export const MainLayout: FC<{ children: ReactNode, seo: SEOProps }> = ({children, seo}) => {
    return (
        <>
            <SEO
                title={seo.title}
                description={seo.description}
                image={seo.image}
                url={seo.url}
                keywords={seo.keywords}
            />
            <Header company={company} />
            <main className="bg-surface pt-24">
                {children}
            </main>
            <Footer/>
        </>
    )
}
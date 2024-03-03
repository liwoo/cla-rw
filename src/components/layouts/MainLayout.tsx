import { Header } from "@/components/Header";
import { FC, ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Seo } from "@/components/Seo";
import { SEOProps } from "@/utils/types";

const company = "CLA Rwanda";

export const MainLayout: FC<{ children: ReactNode; seo: SEOProps }> = ({
  children,
  seo,
}) => {
  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        image={seo.image}
        url={seo.url}
        keywords={seo.keywords}
      />
      <Header company={company} />
      <main className="bg-surface pt-32 pb-4">{children}</main>
      <Footer />
    </>
  );
};

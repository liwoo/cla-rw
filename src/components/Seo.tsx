import Head from "next/head";
import { SEOProps } from "@/utils/types";

export function Seo({
  title,
  description,
  image,
  url,
  keywords,
}: Readonly<SEOProps>) {
  const pageUrl = url ?? "https://www.centenarybank.co.mw/";
  const logoUrl =
    "https://www.centenarybankmalawi.com/images/centenary-bank-logo.png";
  const pageKeywords: string[] = keywords ?? [
    "Centenary Bank",
    "Malawi",
    "banking",
    "MyBucks",
    "commercial bank",
    "financial services",
    "online banking",
    "savings",
    "loans",
    "investments",
    "merger",
  ];
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={pageKeywords.join(", ")} />
      <meta name="robots" content="index, follow" />
      <meta
        name="googlebot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta
        name="bingbot"
        content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
      />
      <meta name="canonical" content={pageUrl} />
      <meta name="language" content="en" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={image || logoUrl} />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image ?? logoUrl} />
    </Head>
  );
}

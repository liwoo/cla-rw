import {SanityImageAsset, SanityImageCrop, SanityImageHotspot, SanityReference} from "sanity-codegen";

export interface SEOProps {
    title: string;
    description: string;
    image?: string;
    url?: string;
    keywords?: string[];
}

export interface SanityImageAssetLocal {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
}
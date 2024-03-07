import { Leaders, Tenets, Testimonials } from "@/sanity/schema";
import { ReactNode } from "react";
import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from "sanity-codegen";

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

export interface ServiceItem {
  name: string;
  description: string;
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
}

export interface MenuItem {
  name: string;
}

export interface NoticeItem {
  title: string;
  description: string;
  startDate: string | null;
  endDate: string | null;
  coverImage: string | null;
  link: string | null;
}

export interface TestimonialItem {
  name: string;
  img: string;
  testimonial: string;
}

export interface EventItem {
  title: string;
  type: string;
  date: string;
  startTime: string;
  endTime: string;
  description: string;
  coverImg: string;
}

export interface PathsParams {
  params: {
    slug?: string;
  };
}

export type LeaderItem= Leaders & {
  imageUrl: string;
};

export type TestimonialsItem = Testimonials & {
  imageUrl: string;
}

export type MinistryItem = Ministries & {
  imageUrl: string;
  ministryCoverImage: {
    asset: SanityReference<SanityImageAssetLocal>;
  };
  tenets?: Tenets[];
  leaders?: LeaderItem;
  testimonials?: Testimonials[];
};

import { ReactNode } from 'react'
import {
  SanityImageAsset,
  SanityImageCrop,
  SanityImageHotspot,
  SanityReference,
} from 'sanity-codegen'

export interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
  keywords?: string[]
}

export interface SanityImageAssetLocal {
  _type: 'image'
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

export interface ServiceItem {
  name: string
  description: string
  icon: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>
}

export interface MenuItem {
  index: number
  name: string
}

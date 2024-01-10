import {SanityImageAssetLocal, SEOProps} from "@/utils/types";
import {SanityImageAsset} from "sanity-codegen";

export const defaultPageDetails: SEOProps = {
    title: "Welcome to Christian Life Assembly",
    description: "CLA is a cell based Church that believes in the Bible and the power to change lives through a living relationship with Jesus Christ. Come join us!",
    image: "https://i.ytimg.com/vi/VKcrBGDRyVc/maxresdefault.jpg",
    url: "https://clarwanda.org/",
    keywords: ["Christian Life Assembly", "CLA", "Rwanda", "Church", "Cell Based Church", "Christian", "Jesus", "Christ", "Bible", "Bible Study", "Bible Study Group", "Bible Study Cell"],
}

const sanityImageAsset: SanityImageAsset = {
    _type: 'sanity.imageAsset',
    _id: 'unique-id',
    _createdAt: '2021-01-01T00:00:00Z',
    _updatedAt: '2021-01-01T00:00:00Z',
    assetId: 'unique-asset-id',
    _rev: 'unique-revision-id',
    extension: 'jpg',
    metadata: {
        _type: 'sanity.imageMetadata',
        dimensions: {
            _type: 'sanity.imageDimensions',
            aspectRatio: 1.5,
            height: 600,
            width: 900
        },
        hasAlpha: false,
        isOpaque: true,
        lqip: 'data:image/jpeg;base64,...', // base64 encoded low-quality image placeholder
        palette: {
            _type: 'sanity.imagePalette',
            darkMuted: { _type: 'sanity.imagePaletteSwatch', background: '#...', foreground: '#...', population: 10, title: 'Dark Muted' },
            darkVibrant: { _type: 'sanity.imagePaletteSwatch', background: '#...', foreground: '#...', population: 20, title: 'Dark Vibrant' },
            dominant: { _type: 'sanity.imagePaletteSwatch', background: '#...', foreground: '#...', population: 30, title: 'Dominant' },
            lightMuted: { _type: 'sanity.imagePaletteSwatch', background: '#...', foreground: '#...', population: 40, title: 'Light Muted' },
            lightVibrant: { _type: 'sanity.imagePaletteSwatch', background: '#...', foreground: '#...', population: 50, title: 'Light Vibrant' },
            muted: { _type: 'sanity.imagePaletteSwatch', background: '#...', foreground: '#...', population: 60, title: 'Muted' },
            vibrant: { _type: 'sanity.imagePaletteSwatch', background: '#...', foreground: '#...', population: 70, title: 'Vibrant' }
        }
    },
    mimeType: 'image/jpeg',
    originalFilename: 'dummy.jpg',
    path: 'path/to/asset',
    sha1hash: 'uniqueSha1Hash',
    size: 102400, // in bytes
    uploadId: 'uniqueUploadId',
    url: 'https://example.com/path/to/image.jpg'
};

export const defaultImage: SanityImageAssetLocal = {
    asset: {
        _ref: sanityImageAsset.assetId,
        _type: 'reference'
    },
    _type: 'image'
}

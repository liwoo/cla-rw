import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Post Type — `string`
   *
   *
   */
  postType?: "Devotional" | "Blog Post";

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Author>;

  /**
   * Audience — `array`
   *
   *
   */
  audience?: Array<SanityKeyedReference<Audience>>;

  /**
   * Staff Member — `reference`
   *
   *
   */
  staff?: SanityReference<Staff>;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<Category>>;

  /**
   * Tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyedReference<Tag>>;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;
}

/**
 * Sermon
 *
 *
 */
export interface Sermon extends SanityDocument {
  _type: "sermon";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Sermon Type — `string`
   *
   *
   */
  sermonType?: "Audio" | "Video" | "Audio & Video";

  /**
   * Youtube Link — `string`
   *
   *
   */
  youtubeLink?: string;

  /**
   * Soundcloud Link — `string`
   *
   *
   */
  soundcloudLink?: string;

  /**
   * Sermon Excerpt — `text`
   *
   *
   */
  excerpt?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Main Preacher — `reference`
   *
   *
   */
  preacher?: SanityReference<Preacher>;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Sermon Series — `reference`
   *
   *
   */
  series?: SanityReference<Series>;

  /**
   * Sermon Scripture Reference — `reference`
   *
   *
   */
  scripture?: SanityReference<Scripture>;

  /**
   * Sermon Audeince — `array`
   *
   *
   */
  audience?: Array<SanityKeyedReference<Audience>>;

  /**
   * Tags — `array`
   *
   *
   */
  tags?: Array<SanityKeyedReference<Tag>>;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;
}

/**
 * Staff Member
 *
 *
 */
export interface Staff extends SanityDocument {
  _type: "staff";

  /**
   * Staff Full Name — `string`
   *
   *
   */
  staffName?: string;

  /**
   * Department — `string`
   *
   *
   */
  department?:
    | "Media"
    | "Grounds"
    | "Hospitality"
    | "Kitchen"
    | "Administration";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Profile Image — `image`
   *
   *
   */
  profileImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Preacher
 *
 *
 */
export interface Preacher extends SanityDocument {
  _type: "preacher";

  /**
   * Preacher Full Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Staff Member — `boolean`
   *
   *
   */
  isStaff?: boolean;

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Biography — `text`
   *
   *
   */
  bio?: string;

  /**
   * Profile Image — `image`
   *
   *
   */
  profileImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Cover Image — `image`
   *
   *
   */
  coverImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Audience Category
 *
 *
 */
export interface Audience extends SanityDocument {
  _type: "audience";

  /**
   * Audience Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Audience Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Cover Image — `image`
   *
   *
   */
  coverImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Audience Primary Color — `string`
   *
   *
   */
  color?:
    | "AliceBlue"
    | "AntiqueWhite"
    | "Aqua"
    | "Aquamarine"
    | "Azure"
    | "Beige"
    | "Bisque"
    | "Black"
    | "BlanchedAlmond"
    | "Blue"
    | "BlueViolet"
    | "Brown"
    | "BurlyWood"
    | "CadetBlue"
    | "Chartreuse"
    | "Chocolate"
    | "Coral"
    | "CornflowerBlue"
    | "Cornsilk"
    | "Crimson"
    | "Cyan"
    | "DarkBlue"
    | "DarkCyan"
    | "DarkGoldenRod"
    | "DarkGray"
    | "DarkGrey"
    | "DarkGreen"
    | "DarkKhaki"
    | "DarkMagenta"
    | "DarkOliveGreen"
    | "DarkOrange"
    | "DarkOrchid"
    | "DarkRed"
    | "DarkSalmon"
    | "DarkSeaGreen"
    | "DarkSlateBlue"
    | "DarkSlateGray"
    | "DarkSlateGrey"
    | "DarkTurquoise"
    | "DarkViolet"
    | "DeepPink"
    | "DeepSkyBlue"
    | "DimGray"
    | "DimGrey"
    | "DodgerBlue"
    | "FireBrick"
    | "FloralWhite"
    | "ForestGreen"
    | "Fuchsia"
    | "Gainsboro"
    | "GhostWhite"
    | "Gold"
    | "GoldenRod"
    | "Gray"
    | "Grey"
    | "Green"
    | "GreenYellow"
    | "HoneyDew"
    | "HotPink"
    | "IndianRed"
    | "Indigo"
    | "Ivory"
    | "Khaki"
    | "Lavender"
    | "LavenderBlush"
    | "LawnGreen"
    | "LemonChiffon"
    | "LightBlue"
    | "LightCoral"
    | "LightCyan"
    | "LightGoldenRodYellow"
    | "LightGray"
    | "LightGrey"
    | "LightGreen"
    | "LightPink"
    | "LightSalmon"
    | "LightSeaGreen"
    | "LightSkyBlue"
    | "LightSlateGray"
    | "LightSlateGrey"
    | "LightSteelBlue"
    | "LightYellow"
    | "Lime"
    | "LimeGreen"
    | "Linen"
    | "Magenta"
    | "Maroon"
    | "MediumAquaMarine"
    | "MediumBlue"
    | "MediumOrchid"
    | "MediumPurple"
    | "MediumSeaGreen"
    | "MediumSlateBlue"
    | "MediumSpringGreen"
    | "MediumTurquoise"
    | "MediumVioletRed"
    | "MidnightBlue"
    | "MintCream"
    | "MistyRose"
    | "Moccasin"
    | "NavajoWhite"
    | "Navy"
    | "OldLace"
    | "Olive"
    | "OliveDrab"
    | "Orange"
    | "OrangeRed"
    | "Orchid"
    | "PaleGoldenRod"
    | "PaleGreen"
    | "PaleTurquoise"
    | "PaleVioletRed"
    | "PapayaWhip"
    | "PeachPuff"
    | "Peru"
    | "Pink"
    | "Plum"
    | "PowderBlue"
    | "Purple"
    | "RebeccaPurple"
    | "Red"
    | "RosyBrown"
    | "RoyalBlue"
    | "SaddleBrown"
    | "Salmon"
    | "SandyBrown"
    | "SeaGreen"
    | "SeaShell"
    | "Sienna"
    | "Silver"
    | "SkyBlue"
    | "SlateBlue"
    | "SlateGray"
    | "SlateGrey"
    | "Snow"
    | "SpringGreen"
    | "SteelBlue"
    | "Tan"
    | "Teal"
    | "Thistle"
    | "Tomato"
    | "Turquoise"
    | "Violet"
    | "Wheat"
    | "White"
    | "WhiteSmoke"
    | "Yellow"
    | "YellowGreen";
}

/**
 * Belief
 *
 *
 */
export interface Belief extends SanityDocument {
  _type: "belief";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Belief Scripture Reference — `reference`
   *
   *
   */
  scripture?: SanityReference<Scripture>;

  /**
   * Description of Belief — `string`
   *
   *
   */
  description?: string;
}

/**
 * Author
 *
 *
 */
export interface Author extends SanityDocument {
  _type: "author";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Bio — `array`
   *
   *
   */
  bio?: Array<SanityKeyed<SanityBlock>>;
}

/**
 * Sermon Series
 *
 *
 */
export interface Series extends SanityDocument {
  _type: "series";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

/**
 * Scripture Reference
 *
 *
 */
export interface Scripture extends SanityDocument {
  _type: "scripture";

  /**
   * Bible Book — `string`
   *
   *
   */
  bibleBook?:
    | "Genesis"
    | "Exodus"
    | "Leviticus"
    | "Numbers"
    | "Deuteronomy"
    | "Joshua"
    | "Judges"
    | "Ruth"
    | "1 Samuel"
    | "2 Samuel"
    | "1 Kings"
    | "2 Kings"
    | "1 Chronicles"
    | "2 Chronicles"
    | "Ezra"
    | "Nehemiah"
    | "Esther"
    | "Job"
    | "Psalm"
    | "Proverbs"
    | "Ecclesiastes"
    | "Song of Solomon"
    | "Isaiah"
    | "Jeremiah"
    | "Lamentations"
    | "Ezekiel"
    | "Daniel"
    | "Hosea"
    | "Joel"
    | "Amos"
    | "Obadiah"
    | "Jonah"
    | "Micah"
    | "Nahum"
    | "Habakkuk"
    | "Zephaniah"
    | "Haggai"
    | "Zechariah"
    | "Malachi"
    | "Matthew"
    | "Mark"
    | "Luke"
    | "John"
    | "Acts"
    | "Romans"
    | "1 Corinthians"
    | "2 Corinthians"
    | "Galatians"
    | "Ephesians"
    | "Philippians"
    | "Colossians"
    | "1 Thessalonians"
    | "2 Thessalonians"
    | "1 Timothy"
    | "2 Timothy"
    | "Titus"
    | "Philemon"
    | "Hebrews"
    | "James"
    | "1 Peter"
    | "2 Peter"
    | "1 John"
    | "2 John"
    | "3 John"
    | "Jude"
    | "Revelation";

  /**
   * Chapter — `number`
   *
   *
   */
  chapter?: number;

  /**
   * Verse Start — `number`
   *
   *
   */
  verseStart?: number;

  /**
   * Verse End — `number`
   *
   *
   */
  verseEnd?: number;
}

/**
 * SocialMedia
 *
 *
 */
export interface SocialMedia extends SanityDocument {
  _type: "socialMedia";

  /**
   * Social Media Title — `string`
   *
   *
   */
  socialMediaTitle?: string;

  /**
   * Link — `string`
   *
   *
   */
  link?: string;
}

/**
 * Tag
 *
 *
 */
export interface Tag extends SanityDocument {
  _type: "tag";

  /**
   * Ttag — `string`
   *
   *
   */
  tag?: string;
}

/**
 * Cell Leader
 *
 *
 */
export interface CellLeader extends SanityDocument {
  _type: "cellLeader";

  /**
   * Cell Leader Full Name  — `string`
   *
   *
   */
  name?: string;

  /**
   * Phone Number — `string`
   *
   *
   */
  phoneNumber?: string;

  /**
   * email — `string`
   *
   *
   */
  email?: string;

  /**
   * cellCode — `reference`
   *
   *
   */
  cellCode?: SanityReference<CellCodes>;

  /**
   * Leader image — `image`
   *
   *
   */
  leaderImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Cell
 *
 *
 */
export interface Cell extends SanityDocument {
  _type: "cell";

  /**
   * Cell Name  — `string`
   *
   *
   */
  name?: string;

  /**
   * Cell Leader — `array`
   *
   *
   */
  cellLeader?: Array<SanityKeyedReference<CellLeader>>;

  /**
   * cellCode — `reference`
   *
   *
   */
  cellCode?: SanityReference<CellCodes>;
}

/**
 * Ministries
 *
 *
 */
export interface Ministries extends SanityDocument {
  _type: "ministries";

  /**
   * Ministry  — `string`
   *
   *
   */
  name?: string;

  /**
   * Main Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Ministry Verse — `string`
   *
   *
   */
  minstryVerse?: string;

  /**
   * Ministry Image — `image`
   *
   *
   */
  ministryImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Ministry Cover Image — `image`
   *
   *
   */
  ministryCoverImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Notices
 *
 *
 */
export interface Notices extends SanityDocument {
  _type: "notices";

  /**
   * Title  — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Link — `string`
   *
   *
   */
  link?: string;

  /**
   * Start Date — `date`
   *
   *
   */
  startDate?: string;

  /**
   * End Date — `date`
   *
   *
   */
  endDate?: string;

  /**
   * Cover Image — `image`
   *
   *
   */
  coverImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * News
 *
 *
 */
export interface News extends SanityDocument {
  _type: "news";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Published Date — `datetime`
   *
   *
   */
  date?: string;
}

/**
 * Call To Action
 *
 *
 */
export interface CallToAction extends SanityDocument {
  _type: "callToAction";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Cover Image — `image`
   *
   *
   */
  coverImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Order Number — `number`
   *
   *
   */
  order?: number;

  /**
   * Is Cell Description — `boolean`
   *
   *
   */
  isCell?: boolean;

  /**
   * Link — `string`
   *
   *
   */
  link?: string;
}

/**
 * Cell Codes
 *
 *
 */
export interface CellCodes extends SanityDocument {
  _type: "cellCodes";

  /**
   * Cell Code — `string`
   *
   *
   */
  cellCode?: string;
}

/**
 * Zone
 *
 *
 */
export interface Zone extends SanityDocument {
  _type: "zone";

  /**
   * Zone Name — `string`
   *
   *
   */
  zoneName?: string;

  /**
   * Zone Leader — `array`
   *
   *
   */
  zoneLeader?: Array<SanityKeyedReference<ZoneLeader>>;
}

/**
 * Zone Leader
 *
 *
 */
export interface ZoneLeader extends SanityDocument {
  _type: "zoneLeader";

  /**
   * Zone Leader Name — `string`
   *
   *
   */
  zoneLeaderName?: string;

  /**
   * Phonenumber — `string`
   *
   *
   */
  phoneNumber?: string;

  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Zone Name — `string`
   *
   *
   */
  zoneName?: string;

  /**
   * Zone sections — `array`
   *
   *
   */
  zoneSections?: Array<SanityKeyedReference<ZoneSection>>;
}

/**
 * Zone Section
 *
 *
 */
export interface ZoneSection extends SanityDocument {
  _type: "zoneSection";

  /**
   * Zone Section Name — `string`
   *
   *
   */
  zoneSectionName?: string;

  /**
   * Zone Section Leaders — `array`
   *
   *
   */
  zoneSectionLeaders?: Array<SanityKeyedReference<ZoneSectionLeader>>;
}

/**
 * Zone Section Leader
 *
 *
 */
export interface ZoneSectionLeader extends SanityDocument {
  _type: "zoneSectionLeader";

  /**
   * Zone Section Leader Name — `string`
   *
   *
   */
  zoneSectionLeaderName?: string;

  /**
   * Phonenumber — `string`
   *
   *
   */
  phoneNumber?: string;

  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Zone Section Name — `string`
   *
   *
   */
  zoneSectionName?: string;

  /**
   * Cell Codes — `array`
   *
   *
   */
  cellCodes?: Array<SanityKeyedReference<CellCodes>>;
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type Documents =
  | Post
  | Sermon
  | Staff
  | Preacher
  | Audience
  | Belief
  | Author
  | Series
  | Category
  | Scripture
  | SocialMedia
  | Tag
  | CellLeader
  | Cell
  | Ministries
  | Notices
  | News
  | CallToAction
  | CellCodes
  | Zone
  | ZoneLeader
  | ZoneSection
  | ZoneSectionLeader;

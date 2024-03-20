import {AxesClassColor, AxesUid} from "~/global/getClassColorUidFromAxesUid";

export interface IHemApi_allProjectInfo {
  projects: {[slug: string]: IHemApi_projectInfo}
}


export interface IHemApi_projectInfo {
  uid:        string,
  title:      string,
  authors:    IHemApi_authorInfo[],
  dateStart:  string,
  dateEnd:    string,
  showMonth: string,
  cover: { [slug: string]: IHemApi_imageData  },
  themes: IHemApi_tag_theme[],
  axes: IHemApi_tag_axes[],
}

export interface IHemApi_projectDetails extends IHemApi_projectInfo {
  partners: string,
  team: string,
  financement: string,
  publications: string,
  content: { [key: string]: IHemApi_bloks_text | IHemApi_bloks_image | IHemApi_bloks_video | IHemApi_blocks_gallery },
  filesChapters: Record<string, IHemApi_filesChapter>
}

export interface IHemApi_fileInfo {
  extension: string;
  mime: string;
  modified: number;
  name: string;
  niceSize: string;
  type: string;
  url: string;
  id: string;
  caption?: string;
}

export interface IHemApi_filesChapter {
  title: string
  uid: string
  slug: string
  uri: string
  textDescription: string
  files: Record<string, IHemApi_fileInfo>
}

export interface IHemApi_bloks {
  type: 'text' | 'image' | 'gallery' | 'video'
  isHidden: boolean
}

export interface IHemApi_bloks_text extends IHemApi_bloks {
  type: 'text'
  value: string
}

export interface IHemApi_bloks_image extends IHemApi_bloks {
  type: 'image'
  caption: string,
  alt: string,
  link: string,
  photoCredit: string,
  image: IHemApi_imageData,
}

export interface IHemApi_bloks_video extends IHemApi_bloks {
  type: "video",
  isHidden: false,
  content: {
    url: string,
    caption: "video caption"
  }
}

export interface IHemApi_blocks_gallery extends IHemApi_bloks{
    type: 'gallery'
    content: IHemApi_imageData[]
}

export interface IHemApi_imageData {
  caption: string,
  alt: string | null,
  link: string | null,
  photoCredit: string | null,
  url: string,
  mediaUrl: string,
  width:    number,
  height:   number,
  resize: {
    tiny:   string,
    small:  string,
    reg:    string,
    large:  string,
    xxl:    string
  }
}

export interface IHemApi_authorInfo {
  author: {
    value: string
  },
  firstname: string,
  Name: string
}

export interface IHemApi_communaute {
  pages: Record<string, IHemApi_Person>
}

export interface IHemApi_Person {
  uid: string
  data: string
  firstname: string
  name: string
  job: string
}

export interface IHemApi_tag_theme {
    title: string,
    uuid: string,
    uri: string,
    uid: string,
}

export interface IHemApi_tag_axes extends IHemApi_tag_theme {
    theme: AxesClassColor
}

export interface IHemApi_PersonDetails {
    "uid":          string,
    "title":        string,
    "firstname":    string,
    "name":         string,
    "bio":          string,
    "job":          string,
    "jobdetail":    string,
    "mail":         string,
    "publications":         {
        "id":                       string,
        "publicationdescription":   string,
        "publicationlink":          string
    }[] | undefined,
    "researchProject": {
        [key: string]: {
            "children": string[],
            "content": {
                "title": string,
                "text": string,
                "cover": string,
                "datestart": string,
                "dateend": string,
                "showmonth": string,
                "author": string,
                "partners": string,
                "team": string,
                "financement": string,
                "axes": string,
                "themes": string,
                "theme": string,
                "axe": string,
                "imagesfiles": string,
                "videofiles": string,
                "autiofiles": string,
                "pdffiles": string,
                "categories": string,
                "uuid": string
            },
            "files": string[],
            "id": string,
            "mediaUrl": string,
            "mediaRoot": string,
            "num": number,
            "parent": string,
            "slug": string,
            "uid": string,
            "uri": string,
            "url": string
        }
    } | undefined,
    "cover": IHemApi_imageData | null
}

export interface IHemApi_searchResult {
    "query": string,
    "result": {[key: string]: IHemApi_projectInfo },
    "minLength": 2
}

export interface IHemApi_about {
    "uid": string,
    "title": string,
    "abouttext": (IHeadingBlock | ITextBlock)[]
}

export interface IHeadingBlock {
    "type": "heading",
    "content": {
        "level": "h2" | "h3" | "h4" | "h5" | "h6",
        "text": string
    },
    "isHidden": false
}

export interface ITextBlock         {
    "type": 'text',
    "isHidden": boolean,
    "value": string
}

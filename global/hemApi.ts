import {AxesUid} from "~/global/getClassColorUidFromAxesUid";

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
  themes: {
    title: string
    uid: string
  }[],
  axes: {
    title: string
    uid: AxesUid
  }[],
}

export interface IHemApi_projectDetails extends IHemApi_projectInfo {
  partners: string,
  team: string,
  financement: string,
  content: { [key: string]: IHemApi_bloks_text | IHemApi_bloks_image },
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


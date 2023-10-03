export interface IHemApi_allProjectInfo {
  projects: {[slug: string]: IHemApi_projectInfo}
}


export interface IHemApi_projectInfo {
  title:      string,
  authors:    IHemApi_authorInfo[],
  dateStart:  string,
  dateEnd:    string,
  cover: { [slug: string]: IHemApi_imageData  },
  themes:     {
    title: string
  }[],
  axes: [
    {
      title: "Interprétation historique"
    }
  ]
}

export interface IHemApi_imageData {
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


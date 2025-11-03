import {IHemApi_projectInfo} from "~/global/hemApi";

export function projectsSort(projects: IHemApi_projectInfo[]): IHemApi_projectInfo[] {
  return [...projects].sort((a, b) => {
    return a.title.localeCompare(b.title, ['fr', 'en',], {ignorePunctuation: true, sensitivity: 'base'})
  })
}

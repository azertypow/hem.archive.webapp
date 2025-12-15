import {IHemApi_projectInfo} from "~/global/hemApi";

function removeLeadingArticles(title: string): string {
  return title.replace(/^(le|la|un|une|a|an|the)\s+/i, '').trim()
}

export function projectsSort(projects: IHemApi_projectInfo[]): IHemApi_projectInfo[] {

  return [...projects].sort((a, b) => {
    const titleA = removeLeadingArticles(a.title)
    const titleB = removeLeadingArticles(b.title)
    return titleA.localeCompare(titleB, ['fr', 'en',], {ignorePunctuation: true, sensitivity: 'base'})
  })
}

import {IHemApi_projectInfo} from "~/global/hemApi";

function removeLeadingArticles(title: string): string {
  const titleWithoutAsterisks_WithoutApostrophes =
    title
      .replace(/\*/g, '')
      .replace(/l’|l'|d'|d’/gi, '')
  return titleWithoutAsterisks_WithoutApostrophes.trim().replace(/^(le|la|un|une|a|an|the|les)\s+/i, '').trim()
}

export function projectsSort(projects: IHemApi_projectInfo[]): IHemApi_projectInfo[] {

  return [...projects].sort((a, b) => {
    const titleA = removeLeadingArticles(a.title)
    const titleB = removeLeadingArticles(b.title)

    console.log('a: ', titleA)
    console.log('b: ', titleB)

    return titleA.localeCompare(titleB, ['fr', 'en',], {ignorePunctuation: true, sensitivity: 'base'})
  })
}

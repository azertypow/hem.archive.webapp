import {IHemApi_allProjectInfo, IHemApi_communaute, IHemApi_projectDetails} from "~/global/hemApi"

export const hemApiBaseUrl = 'https://hemadmin.sdrvl.ch/webapp/api/v1'
// export const hemApiBaseUrl = 'http://localhost:8000/webapp/api/v1'

export async function getProjectsData() {
  const response = await fetch(`${hemApiBaseUrl}/projects`)
  return await response.json() as IHemApi_allProjectInfo
}

export async function getProjectDataByUdi(uid:string) {
  const response = await fetch(`${hemApiBaseUrl}/project-by-uid/${uid}`)
  return await response.json() as (IHemApi_projectDetails | {error: string})
}

// todo: check error response in Kirby API project
export async function getCommunityData() {
  const response = await fetch(`${hemApiBaseUrl}/community`)
  return await response.json() as (IHemApi_communaute | {error: string})
}

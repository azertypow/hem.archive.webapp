import {IHemApi_allProjectInfo} from "~/global/hemApi"

export const hemApiBaseUrl = 'https://hemadmin.sdrvl.ch/webapp/api/v1'

export async function getProjectsData() {
  const response = await fetch(`${hemApiBaseUrl}/projects`)
  return await response.json() as IHemApi_allProjectInfo
}

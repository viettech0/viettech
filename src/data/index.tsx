const contributorData = require("./contributors.json")

export const contributors: Contributor[] = contributorData

export interface Contributor {
  photo: string
  socialNetworks: SocialNetwork[]
  fullName: string
  title: string
  description: string
  color: "green" | "blue" | "purple" | "yellow"
}

export interface SocialNetwork {
  name?: string
  type: SocialType
  website?: string
}

export type SocialType =
  | "youtube"
  | "twitter"
  | "linkedin"
  | "github"
  | "facebook"
  | "earth"
  | "medium"

import { SocialType } from "../data"

export function getSocialNetworkHost(socialType: SocialType) {
  switch (socialType) {
    case "github":
      return "https://github.com"
    case "linkedin":
      return "https://www.linkedin.com/in"
    case "twitter":
      return "https://twitter.com"
    case "youtube":
      return "https://www.youtube.com/channel"
      case "facebook":
        return "https://www.facebook.com"
    default:
      return
  }
}

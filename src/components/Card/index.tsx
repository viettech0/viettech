import React from "react"
import { Contributor, SocialType, SocialNetwork } from "../../data"
import { Linkedin } from "../SvgIcon/linkedin"
import { Youtube } from "../SvgIcon/youtube"
import { Github } from "../SvgIcon/github"
import { Twitter } from "../SvgIcon/twitter"
import { Facebook } from "../SvgIcon/facebook"
import { getSocialNetworkHost } from "../../utils/get-social-network-host"

import "./style.css"

type SocialIcons = {
  [key in SocialType]: React.ReactNode
}

const socialIcons: SocialIcons = {
  linkedin: <Linkedin />,
  youtube: <Youtube />,
  github: <Github />,
  twitter: <Twitter />,
  facebook: <Facebook />,
}

export function Card(props: CardProps) {
  const { photo, fullName, title, description, socialNetworks, color } = props

  return (
    <div className={`card ${color}`}>
      <div className="overlay" />
      <div className="mb-5 z-index-1">
        <img loading="lazy" className="img-photo" src={photo} alt={fullName} />
      </div>

      <div className="flex flex-direction-column align-items-center mb-5 height-200 z-index-1">
        <div className="bold font-size-4 text-align-center ">{fullName}</div>
        <div className="font-size-1 text-align-center text-gray bold mb-2">
          <i>{title}</i>
        </div>
        <div className="font-size-1 text-align-center">{description}</div>
      </div>

      <hr className="z-index-1" />

      <div className="flex flex-wrap z-index-1">
        {socialNetworks.map((item: SocialNetwork, index) => {
          const { type, name } = item
          const socialUrl = `${getSocialNetworkHost(type)}/${name}`
          return (
            <a
              key={index}
              href={socialUrl}
              target="_blank"
              className="flex p-2"
            >
              {socialIcons[type]}
            </a>
          )
        })}
      </div>
    </div>
  )
}

type CardProps = Contributor

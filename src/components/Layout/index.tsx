import * as React from "react"
import { Link } from "gatsby"

import "./style.css"

const Layout = ({ children, size = '' }) => {
  const header = (
    <div className="flex align-items-center">
      <div className="flex-1">
        <Link to="/">
          <img
            className="display-block logo"
            src="https://user-images.githubusercontent.com/6290720/175758279-0ff52cf3-749b-4a81-8c82-d7d06aa1c69a.png"
            alt="Viet Tech"
          />
        </Link>
      </div>

      <div>
        <Link to="/about">About us</Link>
      </div>
      &nbsp;|&nbsp;
      <div>
        <Link to="/project-ideas">Side-project ideas</Link>
      </div>
    </div>
  )
  const width = size ? `max-width-${size}` : ''

  return (
    <div className={`global-wrapper ${width}`}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="flex flex-direction-column text-align-center">
        <div>VietTech © {new Date().getFullYear()}</div>
      </footer>
    </div>
  )
}

export default Layout

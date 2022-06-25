import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  const header = (
    <div className="header-container">
      <Link to="/">
        <img
          className="display-block"
          width={200}
          src="https://user-images.githubusercontent.com/6290720/175758279-0ff52cf3-749b-4a81-8c82-d7d06aa1c69a.png"
          alt="Viet Tech"
        />
      </Link>
    </div>
  )

  return (
    <div className="global-wrapper">
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer className="text-align-center">
        VietTech © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout

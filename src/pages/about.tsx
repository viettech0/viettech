import React from "react"
import Layout from "../components/Layout"
import { Card } from "../components/Card"
import { contributors } from "../data"
import Seo from "../components/seo"

export default function About() {
  return (
    <Layout size="5xl">
      <Seo title="About us" />
      <p className="about-p">
        Viet Tech is a community for Vietnamese people interested in Tech. The
        goal of Viet Tech is to share and pay it forward, to help the next
        generation have an easier time joining the tech industry and advance in
        their career. Everyone has a chance to share their experiences/ask
        questions about topics that they don’t know with absolutely no judgment,
        no disrespect.
      </p>

      <div className="flex justify-content-center">
        <h3>About us 👇</h3>
      </div>

      <div className="flex flex-wrap justify-content-center">
        {contributors.map((item, index) => (
          <div className="p-2" key={index}>
            <Card {...item} />
          </div>
        ))}
      </div>
    </Layout>
  )
}

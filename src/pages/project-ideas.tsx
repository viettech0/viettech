import React from "react"
import Layout from "../components/Layout"
import { Card } from "../components/Card"
import Seo from "../components/seo"

export default function ProjectIdeas() {
  return (
    <Layout size="5xl">
      <Seo title="Side project ideas" />

      <div className="flex justify-content-center">
        <h3>Side-project Ideas 🌟</h3>
      </div>
      <div>
        <ul>
          <li>Switch among views to filter resources/projects by tags</li>
          <li>To suggest your favorite resources or side project ideas:
            <ul>
              <li>Comment on this <a href="https://waiting-brush-53b.notion.site/5b8da6961cc642c4b8cc204750ae43b4?v=4ee20bbdff9d4518ac4b4ba20c80895b">Notion page</a> (requires Notion login), OR</li>
              <li>Submit a PR to <a href="https://github.com/viettech0/viettech">Viet Tech repo</a>. We recommend using the <i>project_ideas_template.md`</i> pull request template for faster code reviews. To use the template, use <i>&template=project_ideas_template.md</i> when you open a pull request, e.g. <i>https://github.com/viettech0/viettech/compare/janedoe-branch-name?expand=1&template=project_ideas_template.md</i></li>
            </ul>
          </li>
          <li>Guidelines for choosing new resources
            <ul>
              <li>Free resources preferred</li>
              <li>Duration tags: `short` = couple of hours; `long` = couple of days</li>
              <li>Difficulty tags: `beginner` for those who have taken 1-2 intro to programming courses; `intermediate` for those who have taken >= 3 programming courses; `advanced` for those who want to drill into a specific topic</li>
            </ul>
          </li>
        </ul>
      </div>
      <br></br>
      <div>
        <iframe src="https://v1.embednotion.com/embed/42fbc4f3cc8c495e80b4f48b6ef12fcf"></iframe>
      </div>
    </Layout>
  )
}

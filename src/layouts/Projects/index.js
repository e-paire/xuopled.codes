import React from "react"
import {FormattedMessage} from "react-intl"
import Box from "../../components/Box"
import Nav from "../../components/Nav"
import Page from "../../components/Page"
import Pattern from "../../components/Pattern"
import Title from "../../components/Title"
import styles from "./index.css"

const websites = [
  {key: "boscnegre", url: "https://www.boscnegre-vacances.com"},
  {key: "cedphoto", url: "https://www.ced.photo"},
]

const projects = [
  {
    key: "gatsby-source-google-docs",
    description: "Gatsby plugin to use Google Docs as a data source",
  },
  {
    key: "react-google-places-suggest",
    description:
      "React component to select geolocated suggestion from Google Maps Places API",
  },
  {
    key: "react-google-maps-loader",
    description:
      "Simple loader to use google maps services into your react applications",
  },
  {
    key: "react-svg-line-chart",
    description:
      "A lightweight responsive line chart component for React using only SVG",
  },
  {
    key: "react-google-map",
    description:
      "React component to render a map with markers from Google Maps API",
  },
]

const videos = [
  {
    label: "Travelling Iceland",
    url: "https://www.youtube.com/watch?v=MiYZJFeAfa0",
  },
  {
    label: "Travelling Peru",
    url: "https://www.youtube.com/watch?v=vcESp-NkxoI",
  },
  {
    label: "Travelling Indonesia",
    url: "https://www.youtube.com/watch?v=psGQJSLKBVQ",
  },
  {
    label: "Travelling New Zealand",
    url: "https://www.youtube.com/watch?v=deOkHldypmk&t=63s",
  },
  {
    label: "Tenerife",
    url: "https://www.youtube.com/watch?v=GjsUcpNCr0M&vl=fr",
  },
]

const Projects = () => (
  <Page className={styles.projects}>
    <Pattern page="projects" />
    <Nav
      items={[
        {pathname: "/", key: "home", position: "bottom"},
        {pathname: "/about", key: "about", position: "top"},
        {pathname: "/contact", key: "contact", position: "right"},
        {pathname: "/skills", key: "skills", position: "left"},
      ]}
    />
    <Title text="Showcase" theme="projects" />
    <Box>
      <div className={styles.box}>
        <div className={styles.title}>{"Sites internet"}</div>
        {websites.map((website, i) => (
          <div key={i} className={styles.project}>
            <a className={styles.link} href={website.url}>
              <FormattedMessage id={`showcase.websites.${website.key}.title`} />
            </a>
            {": "}
            <FormattedMessage
              id={`showcase.websites.${website.key}.description`}
            />
          </div>
        ))}
        <div className={styles.title}>{"Open source"}</div>
        {projects.map((project, i) => (
          <div key={i} className={styles.project}>
            <a
              className={styles.link}
              href={`https://github.com/cedricdelpoux/${project.key}`}
            >
              {project.key}
            </a>
            {": "}
            {project.description}
          </div>
        ))}
        <div className={styles.title}>{"Videos"}</div>
        {videos.map((video, i) => (
          <div key={i} className={styles.project}>
            <a className={styles.link} href={video.url}>
              {video.label}
            </a>
          </div>
        ))}
      </div>
    </Box>
  </Page>
)

export default Projects

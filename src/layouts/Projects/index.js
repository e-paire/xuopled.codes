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
    key: "react-interactive-component",
    description: "Create interactive demo for your React Component with ease",
  },
  {
    key: "react-demo-page",
    description: "Build a demo page for your react component with ease",
  },
  {
    key: "react-bank-card",
    description: "React component to display nice credit bank card",
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
    label: "Tenerife",
    description: "My trip around Tenerife (Canary Islands, Spain)",
    url: "https://www.youtube.com/watch?v=GjsUcpNCr0M&vl=fr",
  },
  {
    label: "Ars waterfall",
    description: "One of the largest waterfall in Pyrénées (France)",
    url: "https://www.youtube.com/watch?v=9X4uqNKdM3Q",
  },
  {
    label: "Oô lake and its waterfall",
    description: "Lake + waterfall = <3",
    url: "https://www.youtube.com/watch?v=9_ZwdA9pFvo",
  },
  {
    label: "Araing lake",
    description: "This frozen lake was amazing to see from the sky",
    url: "https://www.youtube.com/watch?v=6l599KAC8Q4",
  },
]

const Projects = () =>
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
      <div className={styles.title}>
        {"Sites internet"}
      </div>
      {websites.map((website, i) =>
        <div key={i} className={styles.project}>
          <a className={styles.link} href={website.url}>
            <FormattedMessage id={`showcase.websites.${website.key}.title`} />
          </a>
          {": "}
          <FormattedMessage
            id={`showcase.websites.${website.key}.description`}
          />
        </div>
      )}
      <div className={styles.title}>
        {"Open source"}
      </div>
      {projects.map((project, i) =>
        <div key={i} className={styles.project}>
          <a
            className={styles.link}
            href={`https://xuopled.github.io/${project.key}`}
          >
            {project.key}
          </a>
          {": "}
          {project.description}
        </div>
      )}
      <div className={styles.title}>
        {"Videos"}
      </div>
      {videos.map((video, i) =>
        <div key={i} className={styles.project}>
          <a className={styles.link} href={video.url}>
            {video.label}
          </a>
          {": "}
          {video.description}
        </div>
      )}
    </Box>
  </Page>

export default Projects

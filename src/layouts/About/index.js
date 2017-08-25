import React from "react"
import {FormattedMessage} from "react-intl"

import Box from "../../components/Box"
import Nav from "../../components/Nav"
import Page from "../../components/Page"
import Pattern from "../../components/Pattern"
import Title from "../../components/Title"

import IconGithub from "../../components/IconGithub"
import IconTwitter from "../../components/IconTwitter"
import IconMail from "../../components/IconMail"

import styles from "./index.css"

const About = () =>
  <Page className={styles.about}>
    <Pattern page="about" />
    <Nav
      items={[
        {pathname: "/", key: "home", position: "top"},
        {pathname: "/contact", key: "contact", position: "right"},
        {pathname: "/projects", key: "projects", position: "bottom"},
        {pathname: "/skills", key: "skills", position: "left"},
      ]}
    />
    <Title text="About" theme="about" />
    <Box>
      <FormattedMessage id="about" />
      <div className={styles.social}>
        <a
          href="mailto:xuopled@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconMail />
        </a>
        <a
          href="https://twitter.com/xuopled"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconTwitter />
        </a>
        <a
          href="https://github.com/xuopled"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconGithub />
        </a>
      </div>
    </Box>
  </Page>

export default About

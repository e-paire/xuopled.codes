import React from "react"
import {FormattedMessage} from "react-intl"
import Box from "../../components/Box"
import Nav from "../../components/Nav"
import Page from "../../components/Page"
import Pattern from "../../components/Pattern"
import Title from "../../components/Title"
import styles from "./index.css"

const Skills = () => (
  <Page className={styles.skills}>
    <Pattern page="skills" />
    <Nav
      items={[
        {pathname: "/", key: "home", position: "left"},
        {pathname: "/about", key: "about", position: "top"},
        {pathname: "/contact", key: "contact", position: "right"},
        {pathname: "/projects", key: "projects", position: "bottom"},
      ]}
    />
    <Title text="Skills" theme="skills" />
    <Box>
      <div className={styles.skill}>
        <a href="https://registry.jsonresume.org/cedricdelpoux">
          <FormattedMessage id="skills.checkout_resume" />
        </a>
      </div>
      <div className={styles.skill}>
        <div className={styles.title}>
          <FormattedMessage id="skills.responsive_design.title" />
        </div>
        <div className={styles.description}>
          <FormattedMessage id="skills.responsive_design.description" />
        </div>
      </div>
      <div className={styles.skill}>
        <div className={styles.title}>
          <FormattedMessage id="skills.web_dev.title" />
        </div>
        <div className={styles.description}>
          <FormattedMessage id="skills.web_dev.description" />
        </div>
      </div>
      <div className={styles.skill}>
        <div className={styles.title}>
          <FormattedMessage id="skills.web_design.title" />
        </div>
        <div className={styles.description}>
          <FormattedMessage id="skills.web_design.description" />
        </div>
      </div>
      <div className={styles.skill}>
        <div className={styles.title}>
          <FormattedMessage id="skills.watch.title" />
        </div>
        <div className={styles.description}>
          <FormattedMessage id="skills.watch.description" />
        </div>
      </div>
      <div className={styles.skill}>
        <div className={styles.title}>
          <FormattedMessage id="skills.open_source.title" />
        </div>
        <div className={styles.description}>
          <FormattedMessage id="skills.open_source.description" />
        </div>
      </div>
    </Box>
  </Page>
)

export default Skills

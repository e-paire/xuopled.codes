import React, {Component} from "react"
import {FormattedMessage} from "react-intl"

import Nav from "../../components/Nav"
import Page from "../../components/Page"
import Pattern from "../../components/Pattern"
import CartoonXuopled from "../../components/CartoonXuopled"

import styles from "./index.css"

class Homepage extends Component {
  render() {
    return (
      <Page className={styles.home}>
        <Pattern page="home" />
        <Nav
          items={[
            {pathname: "/about", key: "about", position: "top"},
            {pathname: "/contact", key: "contact", position: "right"},
            {pathname: "/projects", key: "projects", position: "bottom"},
            {pathname: "/skills", key: "skills", position: "left"},
          ]}
        />
        <div className={styles.screen}>
          <div className={styles.line}>
            <div className={styles.textContainer}>
              <span className={styles.text}>
                <FormattedMessage id="homepage.screen.1" />
              </span>
              <br />
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.textContainer}>
              <span className={styles.text}>
                <FormattedMessage id="homepage.screen.2" />
              </span>
              <br />
              <br />
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.textContainer}>
              <span className={styles.text}>
                <FormattedMessage id="homepage.screen.3" />
              </span>
              <br />
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.textContainer}>
              <span className={styles.text}>
                <FormattedMessage id="homepage.screen.4" />
              </span>
              <br />
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.textContainer}>
              <span className={styles.text}>
                <FormattedMessage id="homepage.screen.5" />
              </span>
              <br />
              <br />
            </div>
          </div>
          <div className={styles.line}>
            <div className={styles.textContainer}>
              <span className={styles.text}>
                <FormattedMessage id="homepage.screen.6" />
              </span>
              <br />
            </div>
          </div>
        </div>
        <div className={styles.xuopled}>
          <CartoonXuopled />
        </div>
      </Page>
    )
  }
}

export default Homepage

import React from "react"
import {FormattedMessage, injectIntl, intlShape} from "react-intl"

import Page from "../../components/Page"
import Nav from "../../components/Nav"
import Pattern from "../../components/Pattern"
import Box from "../../components/Box"
import Title from "../../components/Title"

import styles from "./index.css"

const Contact = ({intl}) =>
  <Page className={styles.contact}>
    <Pattern page="contact" />
    <Nav
      items={[
        {pathname: "/", key: "home", position: "right"},
        {pathname: "/about", key: "about", position: "top"},
        {pathname: "/projects", key: "projects", position: "bottom"},
        {pathname: "/skills", key: "skills", position: "left"},
      ]}
    />
    <Title text="Contact" theme="contact" />
    <Box>
      <form method="post" name="contact" className={styles.form} data-netlify>
        <label htmlFor="email">
          <FormattedMessage id="contact.email" />
        </label>
        <input
          className={styles.input}
          id="email"
          type="email"
          name="email"
          placeholder={intl.formatMessage({id: "contact.your_email"})}
        />
        <label htmlFor="message">
          <FormattedMessage id="contact.message" />
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          rows="10"
          placeholder={intl.formatMessage({id: "contact.your_message"})}
        />
        <input type="hidden" name="form-name" value="contact" />
        <button className={styles.button}>
          <FormattedMessage id="contact.send" />
        </button>
      </form>
    </Box>
  </Page>

Contact.propTypes = {
  intl: intlShape.isRequired,
}

export default injectIntl(Contact)

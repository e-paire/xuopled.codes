import React, {PropTypes} from "react"
import styles from "./index.css"

const Page = ({children, className}) => (
  <div className={`${styles.page} ${className}`}>
    {children}
  </div>
)

Page.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string.isRequired,
}

export default Page

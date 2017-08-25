import React, {PropTypes} from "react"

import styles from "./index.css"

const Box = ({children}) => (
  <div className={styles.box}>
    {children}
  </div>
)

Box.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Box

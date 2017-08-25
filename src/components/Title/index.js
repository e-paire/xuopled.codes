import React, {PropTypes} from "react"

import styles from "./index.css"

const Title = ({text, theme}) =>
  <svg
    viewBox="0 0 960 300"
    width="100%"
    className={`${styles.title} ${styles[theme]}`}
  >
    <g>
      <symbol id="text">
        <text textAnchor="middle" x="50%" y="50%">
          {text}
        </text>
      </symbol>
      <g>
        <use xlinkHref="#text" className={styles.text} />
        <use xlinkHref="#text" className={styles.text} />
      </g>
    </g>
  </svg>

Title.propTypes = {
  theme: PropTypes.oneOf(["about", "contact", "projects", "skills"]),
  text: PropTypes.string.isRequired,
}

export default Title

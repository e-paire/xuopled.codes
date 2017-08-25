import React, {PropTypes} from "react"

import styles from "./index.css"

function getSymbol(page) {
  switch (page) {
    case "about":
      // dot
      return (
        <circle
          cx="10"
          cy="10"
          r="1"
          fill="rgba(0,0,0,0.3)"
          stroke="#343434"
          strokeWidth="0"
        />
      )

    case "contact":
      // circle
      return (
        <circle
          cx="10"
          cy="10"
          r="4"
          fill="transparent"
          stroke="rgba(0,0,0,0.13)"
        />
      )

    case "home":
      // cross
      return (
        <path
          fill="transparent"
          stroke="rgba(255,255,255,0.15)"
          d="M5 5l10 10M5 15L15 5"
          strokeLinecap="square"
        />
      )

    case "projects":
      // square
      return (
        <path
          fill="transparent"
          stroke="rgba(0,0,0,0.1)"
          d="M5 5h10v10H5z"
          strokeLinecap="square"
        />
      )

    case "skills":
      // triangle
      return (
        <path
          fill="transparent"
          stroke="rgba(0,0,0,0.1)"
          d="M5 15l5-10 5 10"
          strokeLinecap="square"
        />
      )

    default:
      return null
  }
}

const Pattern = ({page}) =>
  <svg className={styles.pattern}>
    <defs>
      <pattern id={page} width="20" height="20" patternUnits="userSpaceOnUse">
        {getSymbol(page)}
      </pattern>
    </defs>
    <path fill={`url(#${page})`} d="M0 0h3000v3000H0z" />
  </svg>

Pattern.propTypes = {
  page: PropTypes.oneOf(["about", "contact", "home", "projects", "skills"]),
}

export default Pattern

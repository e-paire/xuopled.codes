import React, {Component, PropTypes} from "react"
import {Link} from "react-router"
import classNames from "classnames"
import {FormattedMessage} from "react-intl"

import Pattern from "../../components/Pattern"

import styles from "./index.css"

const transitions = {
  top: "Down",
  right: "Left",
  bottom: "Up",
  left: "Right",
}

class Nav extends Component {
  constructor() {
    super()

    this.state = {
      open: false,
    }

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    this.setState({open: !this.state.open})
  }

  render() {
    const {open} = this.state
    const {items} = this.props
    return (
      <div className={open ? styles.open : null}>
        <nav className={styles.nav}>
          <ul>
            {items.map(item =>
              <li
                key={item.key}
                className={classNames(
                  styles.item,
                  styles[item.key],
                  styles[item.position]
                )}
              >
                <Link
                  key={item.key}
                  to={{
                    pathname: item.pathname,
                    state: {transition: `slide${transitions[item.position]}`},
                  }}
                >
                  <span className={styles.text}>
                    <FormattedMessage id={`nav.${item.key}`} />
                  </span>
                  <div className={styles.preview}>
                    <Pattern page={item.key} />
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <div className={styles.toggle} onClick={this.toggleNav}>
          <div className={styles.icon} />
        </div>
      </div>
    )
  }
}

Nav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      pathname: PropTypes.string,
      position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
    })
  ),
}

Nav.defaultProps = {
  items: [],
}

export default Nav

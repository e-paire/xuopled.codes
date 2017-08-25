import React, {Component, PropTypes} from "react"
import {IntlProvider} from "react-intl"
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

import {getLocale, getIntl} from "./utils/intl"

import styles from "./App.css"

class App extends Component {
  render() {
    const {location: {state, pathname}} = this.props
    const transition = state ? state.transition : "slideUp"
    const locale = getLocale(pathname)
    const intl = getIntl(locale)
    return (
      <IntlProvider {...intl}>
        <ReactCSSTransitionGroup
          component="div"
          transitionName={{
            enter: styles[`${transition}Enter`],
            enterActive: styles[`${transition}Enter_active`],
            leave: styles[`${transition}Leave`],
            leaveActive: styles[`${transition}Leave_active`],
            appear: styles[`${transition}Appear_active`],
            appearActive: styles[`${transition}Appear_active`]
          }}
          transitionEnterTimeout={700}
          transitionLeaveTimeout={700}
        >
          {React.cloneElement(this.props.children, {
            key: pathname,
          })}
        </ReactCSSTransitionGroup>
      </IntlProvider>
    )
  }
}

App.propTypes = {
  children: PropTypes.any.isRequired,
  location: PropTypes.object.isRequired,
}

export default App

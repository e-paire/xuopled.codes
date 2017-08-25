import React, {Component, PropTypes} from "react"
import Head from "./components/Head"

import "./styles/index.css"

class Html extends Component {
  render() {
    return (
      <html lang="fr">
        <Head />
        <body>
          <main>
            {this.props.children}
          </main>
          <script
            id="initial-props"
            type="application/json"
            dangerouslySetInnerHTML={{__html: this.props}}
          />
          <script src="/assets/js/bundle.js" />
        </body>
      </html>
    )
  }
}

Html.propTypes = {
  children: PropTypes.any.isRequired,
}

export default Html

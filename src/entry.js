import React from "react"
import ReactDOM from "react-dom"
import ReactDOMServer from "react-dom/server"
import {
  Router,
  RouterContext,
  match,
  createMemoryHistory,
  browserHistory,
} from "react-router"
import routes from "./routes"

import Html from "./Html"

if (typeof document !== "undefined") {
  ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.querySelector("main")
  )
}

export default (locals, callback) => {
  const history = createMemoryHistory()
  const location = history.createLocation(locals.path)
  match({routes, location}, (error, redirectLocation, renderProps) => {
    callback(
      null,
      `<!DOCTYPE html>${ReactDOMServer.renderToStaticMarkup(
        <Html>
          <RouterContext {...renderProps} />
        </Html>
      )}`
    )
  })
}

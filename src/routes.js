import App from "./App"
import Homepage from "./layouts/Homepage"
import About from "./layouts/About"
import Contact from "./layouts/Contact"
import Projects from "./layouts/Projects"
import Skills from "./layouts/Skills"

const routes = {
  path: "/",
  component: App,
  indexRoute: {component: Homepage},
  childRoutes: [
    {path: "about", component: About},
    {path: "contact", component: Contact},
    {path: "projects", component: Projects},
    {path: "skills", component: Skills},
  ],
}

export default routes

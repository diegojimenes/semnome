import {
  createBrowserRouter
} from "react-router-dom"

import Start from "../views/start"
import Menu from "../views/menu"

export default createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
])
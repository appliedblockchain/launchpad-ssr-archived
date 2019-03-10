import React from 'react'

import { asyncComponent } from '@jaredpalmer/after'

const placeholder = () => (<div>...LOADING...</div>)

const route = (path, component, options) => {
  let exact = true
  if (options && !options.exact) exact = false
  return {
    path: path,
    exact: exact,
    component: asyncComponent({
      loader: () => import(`./components/${component}`),
      Placeholder: () => placeholder,
    }),
  }
}

export default [
  route("/", "home/Home"),
  route("/about", "about/About"),
  route("/users", "users/Users"),
  route("/companies", "companies/Companies"),
  route("/newresource", "newresource/NewResourceIndex"),
  route("/newresource/new", "newresource/NewResourceNew"),
  route("/newresource/1/edit", "newresource/NewResourceEdit", { exact: false }),
  route("/about", "about/About"),
]

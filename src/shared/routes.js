import React from 'react'

import { asyncComponent } from '@jaredpalmer/after'

const placeholder = () => (<div>...LOADING...</div>)

const route = (path, component) => {
  return {
    path: path,
    exact: true,
    component: asyncComponent({
      loader: () => import(`./components/${component}`),
      Placeholder: () => placeholder,
    }),
  }
}

export default [
  route("/", "home/Home"),
  route("/about", "about/About"),
]

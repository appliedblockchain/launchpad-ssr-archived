import React from 'react'

import { asyncComponent } from '@jaredpalmer/after'

const placeholder = () => (<div>...LOADING...</div>)

const route = (path, component, options) => {
  let exact = true
  if (options && !options.exact) {
    exact = false
  }
  return {
    path: path,
    exact: exact,
    component: asyncComponent({
      loader: () => import(`./components/${component}`),
      Placeholder: () => placeholder
    })
  }
}

export default [
  route('/', 'home/Home'),
  route('/about', 'about/About'),
  route('/users', 'users/Users'),
  route('/companies', 'companies/Companies'),
  route('/myresource', 'myresource/MyResourceIndex'),
  route('/myresource/new', 'myresource/MyResourceNew'),
  route('/myresource/:id/edit', 'myresource/MyResourceEdit', { exact: false }),
  route('/about', 'about/About')
]

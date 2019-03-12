// import React from 'react'
// import { asyncComponent } from '@jaredpalmer/after'
//
// const placeholder = () => (<div>...LOADING...</div>)
//
// const route = (path, component, options) => {
//   let exact = !(options && !options.exact)
//   return {
//     path: path,
//     exact: exact,
//     component: asyncComponent({
//       loader: () => import(`./components/${component}`),
//       Placeholder: () => placeholder
//     })
//   }
// }
//
// export default [
//   route('/', 'home/Home'),
//   route('/login', 'login/Login'),
//   route('/about', 'about/About'),
//   route('/users', 'users/Users'),
//   route('/companies', 'companies/Companies'),
//   route('/myresource', 'myresource/MyResourceIndex'),
//   route('/myresource/new', 'myresource/MyResourceNew'),
//   route('/myresource/:id/edit', 'myresource/MyResourceEdit', { exact: false }),
//   // route('/*', 'notFound/NotFound', { exact: false })
// ]


const React = require('react')

class SamplePage extends React.Component {
  render() {
    return (
      <div className="SamplePage Page">
        test
      </div>
    )
  }
}


const ReactDOMServer = require('react-dom/server')

const homeComponentSource = SamplePage
const homeComponent = ReactDOMServer.renderToStaticMarkup(homeComponentSource)


module.exports = {
  homeComponent: homeComponent
}

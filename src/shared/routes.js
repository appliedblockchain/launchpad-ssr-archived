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

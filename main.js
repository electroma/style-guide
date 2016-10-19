import React from 'react'
import ReactDOM from 'react-dom'
const Hey = require('whippersnapper/build/Hey.js')
const Text = require('whippersnapper/build/Text.js')
require('./style.css')
require('zzzss/dist/css/zzzss.css')


const Code = React.createClass({
  getInitialState: function() {
      return { isCodeSnippetVisible: false }
  },

  render: function() {
    const { codeSnippet } = this.props;
    const codeSnippetClass =
      this.state.isCodeSnippetVisible ? `code-snippet` : `code-snippet hidden`
    return (
      <div>
        <span
          className="code"
          onClick={ () => {
            this.setState({ isCodeSnippetVisible: !this.state.isCodeSnippetVisible })
          }}
          >code</span>
        <div
            className={codeSnippetClass}
          >{codeSnippet}</div>
        </div>
    )
  }
})

class Thing extends React.Component {
  render() {
    return (
      <div>
        <div className="intro">
          <h1>Style guide</h1>
          <p>Demonstrating the Whippersnapper React component library with the zzzss style library.</p>
        </div>
        <h2>Hey component</h2>
        <Hey />
        <Code codeSnippet="<Hey />" />
        <h2>Text component</h2>
        <Text
          label="Planet"
          content="Jupiter"
        />
        <Code codeSnippet='<Text label="Planet" content="Jupiter" />' />
      </div>
    )
  }
}

ReactDOM.render(<Thing />, document.getElementById('app'))

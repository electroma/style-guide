import React from 'react'

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
        <div className={codeSnippetClass}>{codeSnippet}</div>
        </div>
    )
  }
})

export default Code

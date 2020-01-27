import React, { Component } from 'react'
import { markdown } from 'markdown'

class BinViewer extends Component {
  render() {
    const htmlContent = markdown.toHTML(this.props.bin.content)
    return (
      <div id="binView" className="col-sm-6 col-md-6">
        <h4 className="text-center text-muted">Output</h4>
        <div id="binViewer" dangerouslySetInnerHTML={{ __html: htmlContent }} style={{ 'height': "70vh", "overflowY": "scroll" }}></div>
      </div>
    )
  }
}

export default BinViewer

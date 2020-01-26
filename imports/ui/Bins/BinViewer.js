import React, { Component } from 'react'
import { markdown } from 'markdown'

class BinViewer extends Component {
  render() {
    const htmlContent = markdown.toHTML(this.props.bin.content)
    return (
      <div id="binViewer" className="col-sm-6 col-md-5" style={{ 'height': "70vh", "overflowY": "scroll" }}>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
      </div>
    )
  }
}

export default BinViewer

import React, { Component } from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/markdown/markdown'

class BinEditor extends Component {
  onEditorChange(content) {
    Meteor.call('bin.update', this.props.bin._id, content)
  }
  render() {
    console.log(this.props.bin)
    return (
      <div className="col-sm-6 col-md-6" style={{ "height": "70vh" }}>
        <h4 className="text-center text-muted">Markdown Input</h4>
        <CodeMirror
          onChange={this.onEditorChange.bind(this)}
          value={this.props.bin.content}
          options={{
            lineNumbers: true,
            autofocus: true,
            dragDrop: true,
            mode: "markdown"
          }} />
      </div>
    )
  }
}

export default BinEditor;
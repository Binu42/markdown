import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class BinEditor extends Component {
  onEditorChange(content) {
    Meteor.call('bin.update', this.props.bin._id, content);
  }
  render() {
    return (
      <div
        className={window.innerWidth < 635 ? 'col-sm-6 col-md-6 p-0' : 'px-2'}
      >
        <h4 className='text-center text-muted'>Markdown Input</h4>
        <CodeMirror
          onChange={this.onEditorChange.bind(this)}
          value={this.props.bin.content}
          options={{
            lineNumbers: true,
            autofocus: true,
            dragDrop: true,
            mode: 'markdown',
          }}
        />
      </div>
    );
  }
}

export default BinEditor;

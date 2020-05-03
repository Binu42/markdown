import React, { Component } from 'react';
import { markdown } from 'markdown';

class BinViewer extends Component {
  render() {
    const htmlContent = markdown.toHTML(this.props.bin.content);
    return (
      <div
        id='binView'
        className={window.innerWidth < 635 ? 'col-md-6 col-sm-6 p-0' : ''}
      >
        <h4 className='text-center text-muted'>Output</h4>
        <div
          id='binViewer'
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          style={{ height: '100vh', overflowY: 'scroll', padding: '10px' }}
        ></div>
      </div>
    );
  }
}

export default BinViewer;

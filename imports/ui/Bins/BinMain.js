import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';
import SplitPane from 'react-split-pane';
import { Bins } from '../../api/bins';
import BinEditor from './BinEditor';
import BinViewer from './BinViewer';
import BinShare from './BinShare';

class BinMain extends Component {
  render() {
    if (!this.props.bin) {
      return (
        <div className='spinner-grow text-secondary' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      );
    }
    return (
      <div className='p-4'>
        {window.innerWidth > 635 ? (
          <div className='row' style={{ height: '100vh', marginTop: '40px' }}>
            <SplitPane split='vertical' defaultSize={window.innerHeight}>
              <BinEditor bin={this.props.bin} />
              <BinViewer bin={this.props.bin} />
            </SplitPane>
          </div>
        ) : (
          <div style={{ marginTop: '40px' }}>
            {' '}
            <BinEditor bin={this.props.bin} />
            <BinViewer bin={this.props.bin} />{' '}
          </div>
        )}
        <div className='row'>
          <div className='col-md-12'>
            <BinShare bin={this.props.bin}></BinShare>
          </div>
        </div>
      </div>
    );
  }
}

export default createContainer((props) => {
  const { bid } = props.match.params;
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

  return { bin: Bins.findOne(bid) };
}, BinMain);

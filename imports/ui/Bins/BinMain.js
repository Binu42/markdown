import React, { Component } from 'react'
import { createContainer } from 'react-meteor-data'
import { Bins } from '../../api/bins'
import BinEditor from './BinEditor'
import BinViewer from './BinViewer'
import BinShare from './BinShare'

class BinMain extends Component {
  render() {
    if (!this.props.bin) {
      return <div className="spinner-grow text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    }
    return (
      <div className="p-4">
        <div className="row" style={{ "marginTop": "80px" }}>
          <BinEditor bin={this.props.bin} />
          <BinViewer bin={this.props.bin} />
          <BinShare bin={this.props.id}></BinShare>
        </div>
      </div>
    )
  }
}

export default createContainer((props) => {
  const { bid } = props.match.params;
  Meteor.subscribe('bins');

  return { bin: Bins.findOne(bid) }
}, BinMain)
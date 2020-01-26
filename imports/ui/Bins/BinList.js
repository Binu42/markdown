import React, { Component } from 'react'
import { createContainer } from 'react-meteor-data';
import { Bins } from '../../api/bins'
import { Link } from 'react-router-dom'

class BinList extends Component {
  onBinRemove(bin) {
    Meteor.call('bin.remove', bin);
  }

  renderList() {
    return (
      this.props.bins.map(bin => {
        return (
          <li className="list-group-item" key={bin._id}>
            <Link to={`/bins/${bin._id}`}> Bin {bin._id}</Link>
            <span className="float-right">
              <button className="btn btn-danger pull-right" onClick={() => this.onBinRemove(bin)}>Remove&emsp;<i className="fas fa-trash"></i></button>
            </span>
          </li>
        )
      })
    );
  }
  render() {
    return (
      <div className="container" style={{ "marginTop": "90px" }}>
        <div className="list-group">
          {this.renderList()}
        </div>
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

  return { bins: Bins.find({}).fetch() };
}, BinList);

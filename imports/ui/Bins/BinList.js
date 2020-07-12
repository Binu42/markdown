import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';
import { Bins } from '../../api/bins';
import { Link } from 'react-router-dom';

class BinList extends Component {
  onBinRemove(bin) {
    Meteor.call('bin.remove', bin);
  }

  renderList() {
    if (this.props.bins.length === 0) {
      return (
        <li className='list-group-item text-center'>
          No bin is available, Create bin to see it here
        </li>
      );
    }
    return this.props.bins.map((bin) => {
      return (
        <li className='list-group-item' key={bin._id}>
          <Link to={`/bins/${bin._id}`}> {bin.name}</Link>
          {this.props.user && (
            <span className='float-right'>
              <button
                className='btn btn-danger pull-right'
                onClick={() => this.onBinRemove(bin)}
              >
                Remove&emsp;<i className='fas fa-trash'></i>
              </button>
            </span>
          )}
          <br />
          <span>{bin.description}</span>
        </li>
      );
    });
  }

  listName() {
    if (this.props.user) {
      return <h1 className='text-center text-muted'>Your Markdowns</h1>;
    }
    return <h1 className='text-center text-muted'>Public Markdowns</h1>;
  }

  render() {
    return (
      <div className='container' style={{ marginTop: '90px' }}>
        {this.listName()}
        <div className='list-group'>{this.renderList()}</div>
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

  return { bins: Bins.find({}).fetch(), user: Meteor.userId() };
}, BinList);

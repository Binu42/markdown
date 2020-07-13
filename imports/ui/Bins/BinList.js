import React, { Component } from 'react';
import { createContainer } from 'react-meteor-data';
import { Bins } from '../../api/bins';
import { Link } from 'react-router-dom';

class BinList extends Component {
  onBinRemove(bin) {
    Meteor.call('bin.remove', bin);
  }

  constructor(props) {
    super(props);
    this.state = {
      bid: '',
      name: '',
      description: '',
    };
  }

  onBinUpdate() {
    Meteor.call('bin.updateDetails', this.state);
  }

  renderList(bins, user) {
    if (bins.length === 0) {
      return (
        <li className='list-group-item text-center'>
          You have not created any Bin :), Create bin to see it here
        </li>
      );
    }
    return bins.map((bin) => {
      return (
        <li className='list-group-item' key={bin._id}>
          <Link to={`/bins/${bin._id}`}> {bin.name}</Link>
          {user && (
            <span className='float-right'>
              <button
                className='btn btn-success'
                data-toggle='modal'
                onClick={() =>
                  this.setState({
                    bid: bin._id,
                    name: bin.name,
                    description: bin.description,
                  })
                }
                data-target='#edit'
              >
                Edit&emsp;<i className='fas fa-edit'></i>
              </button>{' '}
              {user === bin.ownerId && (
                <button
                  className='btn btn-danger pull-right'
                  onClick={() => this.onBinRemove(bin)}
                >
                  Remove&emsp;<i className='fas fa-trash'></i>
                </button>
              )}
            </span>
          )}
          <br />
          <span>{bin.description}</span>
        </li>
      );
    });
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  editBinModal() {
    return (
      <div
        className='modal fade'
        id='edit'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='edit'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title text-uppercase' id='editTitle'>
                Bin Description
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <div className='form-group'>
                <label htmlFor='name' className='text-dark'>
                  Bin Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='form-control'
                  placeholder='Enter Bin Name'
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  required
                />
                <label htmlFor='description'>Description</label>
                <textarea
                  className='form-control'
                  name='description'
                  id='description'
                  name='description'
                  placeholder='Enter Bin Description Here'
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  rows='3'
                ></textarea>
                <button
                  type='submit'
                  onClick={this.onBinUpdate.bind(this)}
                  className='btn btn-success mt-2'
                  data-dismiss='modal'
                >
                  Update
                </button>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-warning'
                data-dismiss='modal'
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  listName() {
    if (this.props.user) {
      return <h1 className='text-center text-muted'>Your Markdowns</h1>;
    }
    return <h1 className='text-center text-muted'>Public Markdowns</h1>;
  }

  render() {
    const { bins, user } = this.props;
    const userBins = [];
    let publicBins = [];
    const sharedBins = [];
    if (user) {
      bins.forEach((bin) => {
        if (bin.ownerId === null) {
          if (bin.sharedWith.length === 0) publicBins.push(bin);
          else if (bin.sharedWith.length !== 0) {
            let c = 0;
            bin.sharedWith.find((email) => {
              if (Meteor.user() && email === Meteor.user().emails[0].address) {
                c++;
                sharedBins.push(bin);
              }
            });
            if (c === 0) {
              publicBins.push(bin);
            }
          }
        } else if (bin.ownerId === user) userBins.push(bin);
      });
    } else {
      publicBins = bins;
    }

    return (
      <div className='container' style={{ marginTop: '70px' }}>
        {user && (
          <>
            <h1 className='text-center text-muted'>Your Markdowns</h1>
            <div className='list-group'>{this.renderList(userBins, user)}</div>
          </>
        )}

        {sharedBins.length > 0 && (
          <>
            <h1 className='text-center text-muted mt-4'>Shared Markdowns</h1>
            <div className='list-group'>
              {this.renderList(sharedBins, user)}
            </div>
          </>
        )}

        {publicBins.length > 0 && (
          <>
            <h1 className='text-center text-muted mt-4'>Public Markdowns</h1>
            <div className='list-group'>
              {this.renderList(publicBins, null)}
            </div>
          </>
        )}
        {this.editBinModal()}
      </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('bins');
  Meteor.subscribe('sharedBins');

  return { bins: Bins.find({}).fetch(), user: Meteor.userId() };
}, BinList);

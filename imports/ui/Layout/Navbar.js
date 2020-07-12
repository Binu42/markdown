import React, { Component } from 'react';
import Account from './Account';
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    };
  }
  handleInputChange = (e) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  onBinClick = (e) => {
    e.preventDefault();

    if (this.state.name !== '') {
      Meteor.call('bins.insert', this.state, (err, bId) => {
        browserHistory.push(`/bins/${bId}`);
        window.location = `/bins/${bId}`;
      });
    }
  };
  createBinModal() {
    return (
      <div
        className='modal fade'
        id='login'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='login'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title text-uppercase' id='loginTitle'>
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
              <form>
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
                    onChange={this.handleInputChange}
                    rows='3'
                  ></textarea>
                  <button
                    type='submit'
                    onClick={this.onBinClick.bind(this)}
                    className='btn btn-success mt-2'
                  >
                    Create
                  </button>
                </div>
              </form>
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
  render() {
    return (
      <>
        <nav className='navbar navbar-expand-sm navbar-light fixed-top'>
          <div className='container' style={{ padding: '0' }}>
            <Link className='navbar-brand font-weight-bold text-dark' to='/'>
              <i className='fab fa-react text-primary'></i>&emsp;MarkDown
            </Link>
            <button
              className='navbar-toggler d-lg-none'
              type='button'
              data-toggle='collapse'
              data-target='#collapsibleNavId'
              aria-controls='collapsibleNavId'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='collapsibleNavId'>
              <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>
                    <i className='fa fa-home' aria-hidden='true'></i>&emsp;Home{' '}
                    <span className='sr-only'>(current)</span>
                  </Link>
                </li>
                <li className='nav-item ml-md-2' style={{ cursor: 'pointer' }}>
                  <a
                    className='btn btn-success'
                    className='nav-link'
                    data-toggle='modal'
                    data-target='#login'
                  >
                    <i className='fa fa-plus-circle' aria-hidden='true'></i>
                    &emsp;Create Bin
                  </a>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/about'>
                    <i className='fa fa-user-circle' aria-hidden='true'></i>
                    &emsp;About
                  </Link>
                </li>
                <li className='nav-item'>
                  <Account />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.createBinModal()}
      </>
    );
  }
}

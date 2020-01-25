import React, { Component } from 'react'
import Account from './Account'
import { Link } from 'react-router-dom';
import { browserHistory } from 'react-router'

export default class Navbar extends Component {
  onBinClick = (e, history) => {
    e.preventDefault();

    Meteor.call('bins.insert', (err, bId) => {
      browserHistory.push(`/bins/${bId}`)
      window.location = `/bins/${bId}`
    })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand font-weight-bold text-dark" to="/"><i className="fab fa-react text-primary"></i>&emsp;MarkDown</Link>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#!" onClick={this.onBinClick.bind(this)}>Create Bin</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Account />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

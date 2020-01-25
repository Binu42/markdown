import React, { Component } from 'react'
import Account from './Account'

export default class Navbar extends Component {
  onBinClick = (e) => {
    e.preventDefault();

    Meteor.call('bins.insert')
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand font-weight-bold text-dark" href="/"><i className="fab fa-react text-primary"></i>&emsp;MarkDown</a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!" onClick={this.onBinClick.bind(this)}>Create Bin</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
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

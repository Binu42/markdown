import React, { Component } from 'react'

class BinShare extends Component {
  onShareClick() {
    const email = this.refs.email.value;
    console.log(email)
  }
  render() {
    return (
      <div id="bin-share" className="row">
        <div className="input-group">
          <input type="email" className="form-control" ref="email" placeholder="Enter email" />
          <span className="input-group-btn">
            <button className="btn btn-dark" type="button" onClick={this.onShareClick.bind(this)}>Share Bin</button>
          </span>
        </div>
      </div>
    )
  }
}

export default BinShare

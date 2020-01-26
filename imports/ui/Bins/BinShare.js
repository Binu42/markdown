import React, { Component } from 'react'

class BinShare extends Component {
  onShareClick() {
    const email = this.refs.email.value;
    if (email.trim() !== '') {
      console.log(this.props.bin, email)
      Meteor.call('bin.share', this.props.bin._id, email)
      this.refs.email.value = ""
    }
  }

  renderSharedList() {
    return this.props.bin.sharedWith.map(email => {
      return (<button key={email} className="btn btn-light">{email}</button>);
    })
  }
  render() {
    return (
      <div id="bin-share" className="row">
        <div className="col-md-6">
          <div className="input-group">
            <input type="email" className="form-control" ref="email" placeholder="Enter email" />
            <span className="input-group-btn">
              <button className="btn-share btn btn-dark" type="button" onClick={this.onShareClick.bind(this)}>Share Bin</button>
            </span>
          </div>
        </div>
        <div className="col-md-6">
          <small>Shared With:</small>&emsp;
          <div className="btn-group">{this.renderSharedList()}</div>
        </div>
      </div>
    )
  }
}

export default BinShare

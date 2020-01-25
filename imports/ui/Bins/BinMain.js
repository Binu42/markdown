import React, { Component } from 'react'

export default class BinMain extends Component {
  render() {
    console.log(this.props.match.params.bid)
    return (
      <div style={{ "marginTop": "90px" }}>
        BinMain
      </div>
    )
  }
}

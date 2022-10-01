import React, { Component } from "react";

export default class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <p>
          <img src={this.props.itemPng} />
          {this.props.itemName}
        </p>
      </>
    );
  }
}

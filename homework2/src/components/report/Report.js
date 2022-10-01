import React, { Component } from "react";

export default class Report extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { item } = this.props;
    return (
      <div>
        This {item[0]} report is unmounted {item[1]} times
      </div>
    );
  }
}

import React, { Component } from "react";

export default class CardInner extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.handelReported(this.props.item);
  }
  render() {
    return (
      <div className="cardInner">
        <p>{this.props.item}</p>
      </div>
    );
  }
}

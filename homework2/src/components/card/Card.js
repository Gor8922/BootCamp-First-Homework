import React, { Component } from "react";
import CardInner from "./CardInner";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };
  }

  handleShow = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    const { item, handelReported } = this.props;
    const { isShow } = this.state;
    return (
      <>
        <div className="card">
          {
            <button className="hide" onClick={this.handleShow}>
              {isShow ? "hide" : "show"}
            </button>
          }
          {isShow && <CardInner item={item} handelReported={handelReported} />}
        </div>
      </>
    );
  }
}

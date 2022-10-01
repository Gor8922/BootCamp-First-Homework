import React, { Component } from "react";
import Card from "../card/Card";
import Report from "../report/Report";

export default class Wrapper extends Component {
  constructor() {
    super();
    this.cards = [1, 2, 3, 4, 5];
    this.state = {
      isReported: true,
      report: {},
    };
  }

  clickReport = () => {
    this.setState({
      isReported: !this.state.isReported,
    });
  };

  handelReported = (el) => {
    const { report } = this.state;
    const arg = report[el] ? report[el] + 1 : 1;
    console.log(arg);
    this.setState({
      report: { ...report, [el]: arg },
    });
  };

  render() {
    const { cards } = this;
    return (
      <div className="all">
        {cards.map((item, i) => {
          return (
            <div key={i} className="wrapper">
              <Card item={item} handelReported={this.handelReported} />
            </div>
          );
        })}
        <div>
          <button onClick={this.clickReport}>Report</button>
          {!this.state.isReported &&
            Object.entries(this.state.report).map((item, i) => {
              return <Report key={i} item={item} />;
            })}
        </div>
      </div>
    );
  }
}

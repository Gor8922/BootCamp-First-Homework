import React, { Component } from "react";

export default class CounterSettings extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.setState({
      ...JSON.parse(localStorage.getItem("state")),
    });
  }
  render() {
    const { count, maxValue, minValue, step } = this.props;
    const disableAdd = count + step > maxValue ? true : false;
    const disableSub = count - step <= minValue ? true : false;

    return (
      <div>
        <label>Max Value</label>
        <input
          type="number"
          value={maxValue}
          onChange={this.props.handleMaxValue}
        />
        <label>Min Value</label>
        <input
          type="number"
          value={minValue}
          onChange={this.props.handleMinValue}
        />
        <label>Step</label>
        <input type="number" value={step} onChange={this.props.handleStep} />
        <button disabled={disableAdd} onClick={this.props.handleAdd}>
          Add
        </button>
        <button disabled={disableSub} onClick={this.props.handleSub}>
          Sub
        </button>
        <button onClick={this.props.reset}>Reset</button>

        <p>Count {count}</p>
      </div>
    );
  }
}

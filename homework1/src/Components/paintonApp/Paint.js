import React, { Component } from "react";
import CounterSettings from "../counterSettings/CounterSettings";

export default class Paint extends Component {
  constructor() {
    super();
    this.state = {
      maxValue: 0,
      minValue: 0,
      step: 0,
      count: 0,
    };
  }

  handleMaxValue = (e) => {
    this.setState({
      maxValue: Number(e.target.value),
    });
  };

  componentDidMount() {
    this.setState({
      ...JSON.parse(localStorage.getItem("state")),
    });
  }
  handleMinValue = (e) => {
    this.setState({
      minValue: Number(e.target.value),
    });
  };

  handleStep = (e) => {
    this.setState({
      step: Number(e.target.value),
    });
  };

  handleAdd = () => {
    this.setState({
      count: this.state.count + this.state.step,
    });
  };

  handleSub = () => {
    this.setState({
      count: this.state.count - this.state.step,
    });
  };

  reset = () => {
    this.setState({
      count: 0,
    });
    localStorage.setItem("state", JSON.stringify(this.state));
  };

  render() {
    const { count, maxValue, minValue, step } = this.state;
    const {
      handleMaxValue,
      handleMinValue,
      handleStep,
      handleAdd,
      handleSub,
      reset,
    } = this;

    return (
      <CounterSettings
        handleMaxValue={handleMaxValue}
        handleMinValue={handleMinValue}
        handleStep={handleStep}
        handleAdd={handleAdd}
        handleSub={handleSub}
        reset={reset}
        count={count}
        maxValue={maxValue}
        minValue={minValue}
        step={step}
      />
    );
  }
}

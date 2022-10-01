import "./App.css";

import React, { Component } from "react";
import Search from "./components/search/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      search: null,
      data: {},
    };
  }

  componentDidMount() {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => {
        const arr = [];
        res.forEach((element) => {
          arr.push([element.name.common, element.flags.png]);
        });
        return arr;
      })
      .then((rez) => {
        this.setState({
          data: rez,
        });
      });
  }

  handleSearch = (e) => {
    setTimeout(() => {
      this.setState({
        search: e.target.value.toLowerCase(),
      });
    }, 1000);
  };

  render() {
    const { data, search } = this.state;
    console.log(data);
    return (
      <div>
        <input type="text" onChange={(e) => this.handleSearch(e)} />
        <div>
          {search &&
            data.map((item, i) => {
              if (item[0].toLowerCase().includes(search)) {
                return <Search key={i} itemName={item[0]} itemPng={item[1]} />;
              }
            })}
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Print from "./components/print";

const list = ["React", "Redux", "Angular", "PyQt"];
const DEFAULT_QUERY = "redux";
const PATH_BASE = "https://hn.algolia.com/api/v1";
const PATH_SEARCH = "/search";
const PARAM_SEARCH = "query=";
const PARAM_PAGE='page='

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // list,
      // var: "",
      result: null,
      searchTerm: DEFAULT_QUERY
    };
  }

  // onDismiss = () => {
  //   this.state.list.pop();
  //   var l = this.state.list;
  //   this.setState({ list: l });
  // };

  // Add = () => {
  //   this.state.list.push(this.state.var);
  //   const updated = this.state.list;
  //   this.setState({ list: updated });
  // };

  // onUpdate1 = event => {
  //   const changeValue = event.target.value;
  //   this.setState({ var: changeValue });
  // };

  setSearchTopstories = result => {
    const res = result;
    this.setState({ result: res });
  };

  fetchSearchTopstories = (searchTerm,page) => {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
      .then(response => response.json())
      .then(result => this.setSearchTopstories(result));
  };

  componentDidMount() {
    const { searchTerm } = this.state;
    this.fetchSearchTopstories(searchTerm,0);
  }

  render() {
    if (!this.state.result) {
      return null;
    } else {
      return (
        <div className="App">
          {/* <Print
          value={this.state.result.hits}
          onChange={this.onUpdate1}
          onClick={this.Add}
          delete={this.onDismiss}
          /> */}
          <p>{JSON.stringify(this.state.result.hits)}</p>
        </div>
      );
    }
    
  }
}

export default App;

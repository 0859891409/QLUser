import React, { Component } from "react";
import "../App.css";
import AddUser from "./AddUser";
import Header from "./Header";
import Search from "./Search";
import Table from "./Table";
import dataUser from "./Data.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hienThiForm: true,
      data: dataUser,
    };
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm,
    });
  };
  render() {
    // console.log(this.state.data);
    return (
      <div>
        <Header></Header>
        <div className="container">
          <div className="row">
            <Search
              ketnoi={() => {
                this.doiTrangThai();
              }}
            ></Search>
          </div>
          <div className="row">
            <Table dataUserProp={this.state.data}></Table>
            <AddUser hienThiForm={this.state.hienThiForm}></AddUser>
          </div>
        </div>
      </div>
    );
  }
}

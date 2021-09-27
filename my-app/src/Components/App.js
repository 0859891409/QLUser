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
      state_get_value_search:''
    };
  }

  doiTrangThai = () => {
    this.setState({
      hienThiForm: !this.state.hienThiForm,
    });
  };
  Ket_noi_Search = (value) =>{
    console.log(value);
    this.setState({
      state_get_value_search: value
    });
  }
  Find_User = ()=>{
    var mangSearch =[]
    this.state.data.map((item) =>{
      if(item.name.indexOf(this.state.state_get_value_search) !== -1){
        mangSearch.push(item)
      }
     
    })
    return mangSearch

  }
  render() {
    // console.log(this.state.data);
    return (
      <div>
        <Header></Header>
        <div className="container">
          <div className="row">
            <Search
              lay_du_lieu ={(value)=>this.Ket_noi_Search(value)}
              ketnoi={() => {
                this.doiTrangThai();
              }}
            ></Search>
          </div>
          <div className="row">
            <Table  dataUserProp={this.Find_User()}></Table>
            <AddUser hienThiForm={this.state.hienThiForm}></AddUser>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import TableDataRow from "./TableDataRow";
import dataUser from "./Data.json";

export default class Table extends Component {
  mappingDataUser = () =>
    this.props.dataUserProp.map((value, key) => (
      <TableDataRow
        username={value.name}
        stt={key}
        tel={value.tel}
        permission={value.Permission}
      ></TableDataRow>
    ));
  render() {
    // console.log(this.props.dataUserProp)
    return (
      <div className="col">
        <table className="table table-striped table-inverse table-hover">
          <thead className="thead-inverse">
            <tr>
              <th>STT</th>
              <th>HỌ TÊN</th>
              <th>ĐIỆN THOẠI</th>
              <th>QUYỀN</th>
              <th>CHỨC NĂNG</th>
            </tr>
          </thead>
          <tbody>
            {/* <TableDataRow></TableDataRow> */}
            {this.mappingDataUser()}
          </tbody>
        </table>
      </div>
    );
  }
}

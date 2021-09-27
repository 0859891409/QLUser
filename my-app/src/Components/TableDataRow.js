import React, { Component } from 'react'

export default class TableDataRow extends Component {
  cacQuyen = () => {
    if (this.props.permission === 1) {
      return "Adim";
    } else if (this.props.permission === 2) {
      return "Modrator";
    } else {
      return "Normal User";
    }
  };
  render() {
    return (
      <tr>
        <td scope="row">{this.props.stt + 1}</td>
        <td>{this.props.username}</td>
        <td>{this.props.tel}</td>
        <td>{this.cacQuyen()}</td>
        <td>
          <div className="btn-group">
            <div className="btn btn-warning">
              <box-icon name="edit-alt" /> Sửa
            </div>
            <div className="btn btn-danger">
              <box-icon name="x-circle" /> Xóa
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

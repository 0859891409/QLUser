import React, { Component } from "react";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthainut: true,
    };
  }

  xuLyTrangThai = () => {
    this.setState({
      trangthainut: !this.state.trangthainut,
    });
  };

  hienNut = () => {
    if (this.state.trangthainut === true) {
      return (
        <div
          className="btn btn-outline-info btn-block"
          onClick={() => {
            this.xuLyTrangThai();
          }}
        >
          Thêm mới
        </div>
      );
    } else {
      return (
        <div
          className="btn btn-outline-secondary btn-block"
          onClick={() => {
            this.xuLyTrangThai();
          }}
        >
          Đóng
        </div>
      );
    }
  };

  hienForm = () => {
    if (this.state.trangthainut === false) {
      return (
        <div className="card border-primary mb-3">
          <div className="card-header">Thêm thành viên</div>
          <div className="card-body text-primary">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Tên user"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Số điện thoại"
              />
            </div>
            <div className="form-group">
              <select className="form-control" name id>
                <option selected>Choose...</option>
                <option value={1}>Admin</option>
                <option value={2}>User</option>
                <option value={3}>Modrator</option>
              </select>
            </div>
            <div className="form-group">
              <div className="btn btn-block btn-primary">Thêm</div>
            </div>
          </div>
        </div>
      );
    }
  };
  //;lay thong tin tu bo, hienj thi trang thai fom
  kiemTraTrangThai = () =>{
      if(this.props.hienThiForm===true){
          return (
            <div className="card border-primary mb-3 col-12">
              <div className="card-header">Thêm thành viên</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên user"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Số điện thoại"
                  />
                </div>
                <div className="form-group">
                  <select className="form-control" name id>
                    <option selected>Choose...</option>
                    <option value={1}>Admin</option>
                    <option value={2}>User</option>
                    <option value={3}>Modrator</option>
                  </select>
                </div>
                <div className="form-group">
                  <div className="btn btn-block btn-primary">Thêm</div>
                </div>
              </div>
            </div>
          );
      }
  }
  render() {
    // console.log(this.props.hienThiForm);
    return (
      <div>
        {/* {this.hienNut()} */}
        {/* {this.hienForm()} */}
        {this.kiemTraTrangThai()}
      </div>
    );
  }
}

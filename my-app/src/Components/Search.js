import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="row">
                    <div className="col-9">
                        <div className="searchForm">
                            <div className="form-group">
                                <div className="btn-group">
                                    <input type="text" className="form-control" name id aria-describedby="helpId" placeholder="Nhập từ khóa" />
                                    <div className="btn btn-info">Tìm</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="btn-group">
                            <div className="btn btn-outline-info" onClick={() =>{ this.props.ketnoi()}}>Thêm mới</div>
                            <div className="btn btn-outline-secondary">Đóng</div>
                        </div>
                    </div>
                </div>
                <hr></hr>
            </div>

        )
    }
}

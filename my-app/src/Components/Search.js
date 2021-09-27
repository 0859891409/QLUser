import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dulieunhap: ''
        }
    }
    
    isCheck = (event) => {
        const dulieu = event.target.value
        this.setState({
            dulieunhap: dulieu,
        });
    }
    render() {
        return (
            <div className="col-12">
                <div className="row">
                    <div className="col-9">
                        <div className="searchForm">
                            <div className="form-group">
                                <div className="btn-group">
                                    <input type="text" onChange={(event)=>this.isCheck(event)} className="form-control" name id aria-describedby="helpId" placeholder="Nhập từ khóa" />
                                    <div className="btn btn-info" onClick={()=>this.props.lay_du_lieu(this.state.dulieunhap)}>Tìm</div>
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

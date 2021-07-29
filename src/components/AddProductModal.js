import React,{ Component } from "react";

class AddProductModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:"",
            name: "",
            price: "",
            content: "",
            status: 'false',
        }
    }
    
    onHandleChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.value;
        this.setState({
          [name]: value,
        });
      };
    
    onClose = () => {
        this.setState({
          name: "",
          price: "",
          content: "",
        });
        window.$("#addProduct").modal("hide");
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            name: "",
            price: "",
            content: "",
            status: 'false',
          });
         
    }

    render() {
        return (
            <div
              className="modal fade"
              id="addProduct"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="addProduct"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content" >
                  <div className="modal-header">
                    <h5 className="modal-title">Thêm sản phẩm</h5>
                    <button type="button" className="close" onClick={this.onClose}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body ">
                    <div className="form-group ">
                      <label htmlFor="title" className="mb-1">Tên sản phẩm</label>
                      <input
                        className="mb-2 form-control"
                        type="text"
                        placeholder="Tên sản phẩm"
                        size="60"
                        name="name"
                        id="name"
                        value={this.state.name}
                        onChange={this.onHandleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="content" className="mb-1">Giá sản phẩm (VNĐ)</label>
                      <input
                        className="mb-2 form-control"
                        type="text"
                        placeholder="Giá sản phẩm"
                        size="60"
                        name="price"
                        id="price"
                        value={this.state.price}
                        onChange={this.onHandleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="content " className="mb-1">Mô tả sản phẩm</label>
                      <textarea
                        className="form-control"
                        rows="5"
                        cols="63"
                        placeholder="Mô tả sản phẩm"
                        id="content"
                        name="content"
                        value={this.state.content}
                        onChange={this.onHandleChange}
                      ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content " className="mb-1">Trạng thái</label>
                        <select  className="form-control" name="status" value={this.state.status} onChange={this.onHandleChange}>
                            <option value={true}>Kích hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={this.onClose}
                    >
                      Hủy
                    </button>
                    <button
                      type="button"
                      className="btn btn-success"
                      data-dismiss="modal"
                      onClick={this.onSubmit}
                    >
                      Thêm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}
export default AddProductModal;
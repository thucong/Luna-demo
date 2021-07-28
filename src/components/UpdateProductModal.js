import React,{ Component } from "react";

class UpdateProductModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: "",
            name: "",
            price: "",
            content: "",
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...nextProps.product})
    }

    onHandleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;
        this.setState({
          [name]: value,
        });
      };
    
    onClose = () => {
        window.$("#updateProduct").modal("hide");
    }
   
    onSubmitUpdate = (e) => {
        e.preventDefault();
        this.props.onSubmitUpdate(this.state);
       
    }
    
    render() {
        let {name, price, content} = this.state;
        return (
            <div
              className="modal fade"
              id="updateProduct"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="updateProduct"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content" >
                  <div className="modal-header">
                    <h5 className="modal-title">Sửa sản phẩm</h5>
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
                        value={name}
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
                        value={price}
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
                        value={content}
                        onChange={this.onHandleChange}
                      ></textarea>
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
                      onClick={this.onSubmitUpdate}
                    >
                      Sửa
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}
export default UpdateProductModal;
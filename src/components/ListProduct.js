import React, { Component } from "react";

class ListProduct extends Component {
    listProduct = (products) => {
        let result = null;
        if(products.length > 0){
            result = products.map((product, index)=>{
                return (
                    <tr key={product.id}>
                        <th scope="row" >{index + 1 }</th>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td><button className="btn btn-danger">Xóa</button></td>
                    </tr>
                )
            })
        }
        return result;
    }
  render() {
      var products = this.props.products;
    return (
      <table className="table table-bordered ">
        <thead>
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Giá sản phẩm (VNĐ)</th>
            <th scope="col">Chức năng</th>
          </tr>
        </thead>
        <tbody>
           {this.listProduct(products)}
         
        </tbody>
      </table>
    );
  }
}
export default ListProduct;

import React, { Component } from "react";
import ItemProduct from "./ItemProduct";

class ListProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            choice_delete:""
        }
    }
    listProduct = (products) => {
        let result = null;
        if(products.length > 0){
            result = products.map((product, index)=>{
                return (
                    <ItemProduct key={product.id} product={product} index={index} onDelete={this.props.onDelete} onUpdate={this.props.onUpdate}/>
                )
            })
        }
        return result;
    }
  render() {
      var products = this.props.products;
    return (
        <div>
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
        </div>
      
    );
  }
}
export default ListProduct;

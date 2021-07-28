import React,{ Component } from "react";

class ItemProduct extends Component{
    constructor(props){
        super(props);
        this.state = {
            choose_delete:""
        }
    }
    onDelete = () => {
        this.props.onDelete(this.props.product.id);
    }
    onUpdate = () => {
        this.props.onUpdate(this.props.product.id);
    }
    render(){
        var {product, index} = this.props;
        return (
            <tr key={product.id} >
                <th scope="row" >{index + 1 }</th>
                <td onClick={this.onUpdate}>{product.name}</td>
                <td>{product.price}</td>
                <td><button className="btn btn-danger" onClick={this.onDelete}>Xóa</button></td>
            </tr>
        )
    }
}
export default ItemProduct;
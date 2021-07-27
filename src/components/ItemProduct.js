import React,{ Component } from "react";

class ItemProduct extends Component{
    constructor(props){
        super(props);
        this.state = {
            choose_delete:""
        }
    }
    // onChoice = (e,id) => {
    //     this.setState({choose_delete:id})
    //     window.$('#deleteProduct').modal('show');
    // }
    onDelete = () => {
        this.props.onDelete(this.props.product.id);
    }
    onUpdate = () => {
        
    }
    render(){
        var {product, index} = this.props;
        return (
            <tr key={product.id} onClick={this.onUpdate}>
                <th scope="row" >{index + 1 }</th>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><button className="btn btn-danger" onClick={this.onDelete}>Xóa</button></td>
            </tr>
        )
    }
}
export default ItemProduct;
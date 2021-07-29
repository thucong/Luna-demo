import { data } from "jquery";
import React, { Component } from "react";
import "./App.css";
import AddProductModal from "./components/AddProductModal";
import DeleteProductModal from "./components/DeleteProductModal";
import ListProduct from "./components/ListProduct";
import UpdateProductModal from "./components/UpdateProductModal";
import "./style.css";
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: [{
                id: "",
                name: "",
                price: "",
                content:"",
                status: false,
            }],
            productUpdate: "",
            productDelete: ""
        }
    }

    randomId = () => {
        var min = 1;
        var max = 100;
        return min + (Math.random() * (max-min));
    }

    componentDidMount(){
        if(localStorage && localStorage.getItem('products')){
            var products = JSON.parse(localStorage.getItem('products'));
            this.setState({ products: products});
           // console.log(products);
        }
    }

    onAddProduct = (e) => {
        window.$("#addProduct").modal("show");
    }

    onSubmit = (data) => {
       var products = this.state.products;
        data.id = this.randomId();
        products.push(data);
       this.setState({products: products});
       localStorage.setItem('products', JSON.stringify(products));
    }

    findIndex = (id) => {
        var {products} = this.state;
        var result = null;
        products.forEach((product, index) => {
            if(product.id === id){
                result = index;
            }
        })
        return result;
    }
    
    showFormDelete = () => {
        window.$('#deleteProduct').modal('show');
    }
    onChooseDelete = (id) => {
        var {products} = this.state;
        var index =  this.findIndex(id);
        var productDelete = products[index];
        this.setState({productDelete:productDelete});
        this.showFormDelete();
    }
    
    onDelete = (data) => {
        var products = this.state.products;
        var index = this.findIndex(data.id);
        if(index !== -1){
            products.splice(index,1);
            this.setState({ products: products})
            this.setState({productDelete: ""});
        }
         localStorage.setItem('products', JSON.stringify(products));
    }

    showFormUpdate = () => {
        window.$("#updateProduct").modal('show');
    }

    onUpdate = (id) => {
        var {products} = this.state;
        var index = this.findIndex(id);
        var productUpdate = products[index];
        this.setState({
            productUpdate: productUpdate
        });
        this.showFormUpdate();
    }

    onSubmitUpdate = (data) => {
        var products = this.state.products;
        if(data.id){
            var index = this.findIndex(data.id);
            products[index] = data;
            this.setState({productUpdate:""});
        }
        this.setState({products: products});
       localStorage.setItem('products', JSON.stringify(products));
    }

    render() {
        var products = this.state.products;
        var productUpdate = this.state.productUpdate;
        var productDelete = this.state.productDelete; 
        return (
            <div className="mt-5 container">
                <div className="text-center">
                    <h1 className="h1">Thông tin sản phẩm</h1> 
                </div>
                <hr />
                <div className="mb-2">
                    <button className="btn btn-primary" onClick={this.onAddProduct}> <i className="fas fa-plus"></i> Thêm sản phẩm</button>
                    {/* <button className="btn btn-success ml-2" onClick={this.onList}>Xem sản phẩm</button> */}
                </div>
                <div>
                    <ListProduct products={products}  onUpdate={this.onUpdate} onChooseDelete={this.onChooseDelete}/>
                </div>
                <AddProductModal onSubmit={this.onSubmit}/>
                <UpdateProductModal product={productUpdate} onSubmitUpdate={this.onSubmitUpdate}/>
                <DeleteProductModal product={productDelete} onDelete={this.onDelete}/>
            </div>
        );
    }
}
export default App;

import React, { Component } from "react";
import "./App.css";
import AddProductModal from "./components/AddProductModal";
import ListProduct from "./components/ListProduct";
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
            }],
            choice_delete: "",
        }
       
    }
   
    // onList = () => {
    //     var products = [
    //         {
    //             id: this.randomId(),
    //             name: 'T-shirt',
    //             price: 50.000,
    //         },
    //         {
    //             id: this.randomId(),
    //             name: 'tie',
    //             price: 30.000,
    //         },
    //     ]
    //     this.setState({products: products});
    //     console.log(products);
    //     localStorage.setItem('products', JSON.stringify(products));
    // }
    randomId = () => {
        var min = 1;
        var max = 100;
        return min + (Math.random() * (max-min));
    }
    componentWillMount(){
        if(localStorage && localStorage.getItem('products')){
            var products = JSON.parse(localStorage.getItem('products'));
            this.setState({ products: products});
            console.log(products);
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
    onDelete = (id) => {
        var {products} = this.state;
        var index = this.findIndex(id);
        if(index !== -1){
            products.splice(index,1);
            this.setState({ products: products})
        }
        localStorage.setItem('products', JSON.stringify(products));
    }
    render() {
        var products = this.state.products;
        console.log(products);
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
                    <ListProduct products={products} onDelete={this.onDelete} onUpdate={this.onUpdate}/>
                </div>
                <AddProductModal onSubmit={this.onSubmit}/>
              
                
            </div>
        );
    }
}
export default App;

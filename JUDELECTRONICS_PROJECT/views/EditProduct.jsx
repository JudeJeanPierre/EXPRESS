const React = require('react');
class EditProduct extends React.Component{
    render() {
        const myStyle = {
            color: 'red',
            backgroundColor: 'orange',
            textAlign: 'left',   
        };
        const { product } = this.props;
        return(
            <div style={myStyle}>
                <form action={`/products/${this.props.product._id}?_method=PUT`} method="POST"><br/>
                Name: <input defaultValue={this.props.product.name} type= "text" name="name" /><br/><br/>
                Image: <input defaultValue={this.props.product.image} type= "text" name="image" /><br/><br/>
                Brand: <input defaultValue={this.props.product.brand} type= "text" name="brand" /> <br/><br/>
                Price: <input defaultValue={this.props.product.price} type= "text" name="price" /><br/><br/>
                Product Details: <input defaultValue={this.props.product.product_details} type= "text" name="product_details" /><br/><br/>
                Category: <input defaultValue={this.props.product.category} type= "text" name="category" /><br/><br/>
                Product_id: <input defaultValue={this.props.product.product_id} 
                type= "text" name="product_id" /><br/><br/>
                Quantity in Stock: <input defaultValue={this.props.product.inStock} 
                type= "text" name="inStock" required /> <br/><br/>
                Is it confirmed product is New ? {this.props.product.isProductNew? (
                <input type= "checkbox" name="isProductNew" defaultChecked />
                ) : (
                    <input type="checkbox" name="isProductNew" />
                )}
                <br/><br/>
                <input type="submit" name="" value=" Update Product's Data" /> <br/>
                </form>

            </div>
        );
    }
}

module.exports = EditProduct;
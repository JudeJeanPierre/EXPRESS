const React = require("react");
const DefaultLayout = require("./layouts/Default");
class ShowProduct extends React.Component {
    render() {
        const { product } = this.props;
        return (
            <DefaultLayout title={"Product Profile"}>
                <div>
                <h4>Name: {this.props.product.name}</h4>
                <h4>Image:</h4> <img src= {this.props.product.image} />
                <h4>Brand: {this.props.product.brand}</h4>
                <h4>Price: {this.props.product.price}</h4>
                <h4>Product Details: {this.props.product.product_details}</h4>
                <h4>Category: {this.props.product.category}</h4>
                <h4>Product Identification: {this.props.product.product_id}</h4>
                <h4>Quantity in Stock: {this.props.product.inStock}</h4>
                <h4>
                    Status: {this.props.isProductNew
                        ? "Brand New Product"
                        : "Refurbished/Used Product"}
                </h4>
                <br />
                <a href="/products">Back to Product Listings</a>
                </div>
            </DefaultLayout>
        );
    }
}
module.exports = ShowProduct;
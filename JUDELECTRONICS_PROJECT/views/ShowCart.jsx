const React = require("react");
const DefaultLayout = require("./layouts/Default");
class ShowCart extends React.Component {
    render() {
        const { cart } = this.props;
        return (
            <DefaultLayout title={"Cart Profile"}>
                <a href="/home">Back to Home</a><br/><br/>
                <div>
                <h4>Cart's Number: {this.props.cart.cartName}</h4>
                <h4>User ID: {this.props.cart.userId}</h4>
                <h4>Product Name: {this.props.cart.productName}</h4>
                <h4>Product ID #: {this.props.cart.product_id} </h4>
                <h4>Quantity: {this.props.cart.quantity}</h4>
                <br />
                <a href="/carts">Back to all Carts</a><br/><br/>
                </div>
            </DefaultLayout>
        );
    }
}
module.exports = ShowCart;
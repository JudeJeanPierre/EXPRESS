const React = require("react");
const DefaultLayout = require("./layouts/Default");
class ShowOrder extends React.Component {
    render() {
        const { order } = this.props;
        return (
            <DefaultLayout title={"Order Profile"}>
                <a href="/home">Back to Home</a><br/><br/>
                <div>
                <h4>Order's Name: {this.props.order.orderName}</h4>
                <h4>User ID: {this.props.order.userId}</h4>
                <h4>Address: {this.props.order.address}</h4>
                <h4>Product Name: {this.props.order.productName}</h4>
                <h4>Product ID #: {this.props.order.product_id} </h4>
                <h4>Category: {this.props.order.category}</h4>
                <h4>Quantity: {this.props.order.quantity}</h4>
                <h4>Amount: {this.props.order.amount}</h4>
                <br />
                <a href="/orders">Back to all Orders</a><br/><br/>
                </div>
            </DefaultLayout>
        );
    }
}
module.exports = ShowOrder;
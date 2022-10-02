const React = require('react');
class EditOrder extends React.Component{
    render() {
        const myStyle = {
            color: 'red',
            backgroundColor: 'skyblue',
            textAlign: 'left',   
        };
        const { order } = this.props;
        return(
            <div style={myStyle}>
                <form action={`/orders/${this.props.order._id}?_method=PUT`} method="POST"><br/>
                Name: <input defaultValue={this.props.order.orderName} type= "text" orderName="name" /><br/><br/>
                User ID: <input defaultValue={this.props.order.userId} type= "text" name="userId" /><br/><br/>
                Address: <input defaultValue={this.props.order.address} type= "text" name="address" /><br/><br/>
                Product Name: <input defaultValue={this.props.order.productName} type= "text" name="productName" /> <br/><br/>
                Product ID #: <input defaultValue={this.props.order.product_id} type= "text" name="product_id" /><br/><br/>
                Category: <input defaultValue={this.props.order.category} type= "text" name="category" /><br/><br/>
                Quantity: <input defaultValue={this.props.order.quantity} type= "number" name="quantity" /><br/><br/>
                Amount: <input defaultValue={this.props.order.amount} type= "number" name="amount" required /> <br/><br/>
                <input type="submit" name="" value=" Update Order" /> <br/><br/>
                <a href="/orders">Back to all Orders List</a><br/><br/>
                <a href="/home">Back to Home</a>
                </form>

            </div>
        );
    }
}

module.exports = EditOrder;
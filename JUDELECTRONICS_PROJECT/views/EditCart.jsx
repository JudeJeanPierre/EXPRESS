const React = require('react');
class EditCart extends React.Component{
    render() {
        const myStyle = {
            color: 'red',
            backgroundColor: 'pink',
            textAlign: 'left',   
        };
        const { cart } = this.props;
        return(
            <div style={myStyle}>
                <form action={`/carts/${this.props.cart._id}?_method=PUT`} method="POST"><br/>
                Cart Number: <input defaultValue={this.props.cart.cartNumber} type= "text" cartNumber="name" /><br/><br/>
                User ID: <input defaultValue={this.props.cart.userId} type= "text" name="userId" /><br/><br/>
                Product Name: <input defaultValue={this.props.cart.productName} type= "text" name="productName" /> <br/><br/>
                Product ID #: <input defaultValue={this.props.cart.product_id} type= "text" name="product_id" /><br/><br/>
                Quantity: <input defaultValue={this.props.cart.quantity} type= "number" name="quantity" /><br/><br/>
                <input type="submit" name="" value=" Update Cart Information" /> <br/><br/>
                <a href="/carts">Back to Carts Dashboard</a><br/><br/>
                <a href="/home">Back to Home</a>
                </form>

            </div>
        );
    }
}

module.exports = EditCart;
const React = require("react");
const DefaultLayout = require("./layouts/default");
class NewOrder extends React.Component {
    render() {
        return (
            <DefaultLayout title={"New Order"}>
                <a href="/home">Back to Home</a>
                <br/>
                <div>
                    <form action="/orders" method="POST"> <br />
                        Order's Name: <input type="text" name="orderName" />
                        <br /><br />
                        User Id: <input type="text" name="userId" />
                        <br /><br />
                        Address: <input type="text" name="address" />
                        <br /><br />
                        Product Name: <input type="text" name="productName" />
                        <br /><br />
                        Product ID #: <input type="text" name="product_id" />
                        <br /><br />
                        Category: <input type="text" name="category" />
                        <br /><br />
                        Quantity: <input type="number" name="quantity" />
                        <br /><br />
                        Amount: <input type="Number" name="amount" />
                        <br /><br />
                        <input type="submit" name="" value="Add Order to List" />
                    </form> <br/>
                    <a href="/orders">Back to Orders</a><br/><br/>
                    
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = NewOrder;
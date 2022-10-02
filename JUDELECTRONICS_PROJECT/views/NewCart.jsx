const React = require("react");
const DefaultLayout = require("./layouts/default");
class NewCart extends React.Component {
    render() {
        return (
            <DefaultLayout title={"New Cart"}>
                <a href="/home">Back to Home</a>
                <br/>
                <div>
                    <form action="/carts" method="POST"> <br />
                        Cart Number: <input type="text" name="cartNumber" />
                        <br /><br />
                        User Id: <input type="text" name="userId" />
                        <br /><br />
                        Product Name: <input type="text" name="productName" />
                        <br /><br />
                        Product ID #: <input type="text" name="product_id" />
                        <br /><br />
                        Quantity: <input type="number" name="quantity" />
                        <br /><br />
                        <input type="submit" name="" value="Add Cart" />
                    </form> <br/>
                    <a href="/carts">Back to Carts</a><br/><br/>
                    
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = NewCart;
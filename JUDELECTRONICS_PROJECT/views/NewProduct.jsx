const React = require("react");
const DefaultLayout = require("./layouts/default");
class NewProduct extends React.Component {
    render() {
        return (
            <DefaultLayout title={"New Product Arrival"}>
                <a href="/home">Back to Home</a><br/><br/>
                <div>
                    <form action="/products" method="POST"> <br />
                        Product Name: <input type="text" name="productName" />
                        <br /><br />
                        Image: <input type="text" name="image" />
                        <br /><br />
                        Brand: <input type="text" name="brand" />
                        <br /><br />
                        Price: <input type="text" name="price" />
                        <br /><br />
                        Product Details: <input type="text" name="product_details" />
                        <br /><br />
                        Category: <input type="text" name="category" />
                        <br /><br />
                        Product ID #: <input type="text" name="product_id" />
                        <br /><br />
                        Quantity in Stock: <input type="number" name="inStock" />
                        <br /><br />
                        Is Product Brand New : <input type="checkbox" name="isProductNew" />
                        <br /><br />
                        <input type="submit" name="" value="Add Product to Stock" />
                    </form> <br/>
                    <a href="/products">Back to Product Stock</a>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = NewProduct;
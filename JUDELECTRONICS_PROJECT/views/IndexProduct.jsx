const React = require("react");
const DefaultLayout = require("./layouts/Default");

class IndexProduct extends React.Component {
    render() {
        const { products } = this.props;
        return (
            <DefaultLayout title={"Explore Our Products"}>
                <a href="/home">Back to Home</a><br/><br/><br/>
                <div>
                <nav>
                    <a href="/products/new">Add New Product to Stock</a>
                </nav><br />
                <ol>
                    {products.map((product, i) => {
                        return (
                            <li key={i}>
                                <a href={`/products/${product.id}`}>{product.productName}</a>
                                <br />
                                <a href={`/products/${product._id}/edit`}>Edit Product's Data</a> <br/>

                                <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="Delete Product" /> <br/><br/>
                                </form>
                            </li>
                        );
                    })}
                </ol>
                <br/><br/>
                </div>
            </DefaultLayout>
        );
    }
}
module.exports = IndexProduct
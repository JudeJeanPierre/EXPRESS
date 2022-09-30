const React = require("react");
const DefaultLayout = require("./layouts/Default");

class IndexProduct extends React.Component {
    render() {
        const { products } = this.props;
        return (
            <DefaultLayout title={"Product Stock"}>
                <div>
                <nav>
                    <a href="/products/new">Add New Product to Stock</a>
                </nav>
                <ol>
                    {products.map((product, i) => {
                        return (
                            <li key={i}>
                                <a href={`/products/${product.id}`}>{product.name}</a>
                                <br /><br/>
                                <a href={`/products/${product._id}/edit`}>Edit Product's Data</a> <br/>

                                <form action={`/products/${product._id}?_method=DELETE`} method="POST"><br/>
                                    <input type="submit" value="Delete" /> <br/><br/><br/>
                                </form>
                            </li>
                        );
                    })}
                </ol>
                </div>
            </DefaultLayout>
        );
    }
}
module.exports = IndexProduct
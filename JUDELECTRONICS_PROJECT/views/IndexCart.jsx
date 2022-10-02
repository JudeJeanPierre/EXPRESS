const React = require("react");
const DefaultLayout = require("./layouts/Default");

class IndexCart extends React.Component {
    render() {
        const { carts } = this.props;
        return (
            <DefaultLayout title={"All Carts"}>
                <a href="/home">Back to Home</a><br/><br/><br/>
                <div>
                <nav>
                    <a href="/carts/new">Add a New Cart</a>
                </nav><br />
                <ol>
                    {carts.map((cart, i) => {
                        return (
                            <li key={i}>
                                <a href={`/carts/${cart.id}`}>{cart.cartNumber}</a>
                                <br />
                                <a href={`/carts/${cart._id}/edit`}>Update Cart</a> <br/>

                                <form action={`/carts/${cart._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="Move from Cart" /> <br/><br/>
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
module.exports = IndexCart
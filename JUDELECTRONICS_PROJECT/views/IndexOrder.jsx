const React = require("react");
const DefaultLayout = require("./layouts/Default");

class IndexOrder extends React.Component {
    render() {
        const { orders } = this.props;
        return (
            <DefaultLayout title={"All Orders"}>
                <a href="/home">Back to Home</a><br/><br/><br/>
                <div>
                <nav>
                    <a href="/orders/new">Add a New Order</a>
                </nav><br />
                <ol>
                    {orders.map((order, i) => {
                        return (
                            <li key={i}>
                                <a href={`/orders/${order.id}`}>{order.orderName}</a>
                                <br />
                                <a href={`/orders/${order._id}/edit`}>Edit order's Data</a> <br/>

                                <form action={`/orders/${order._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="Delete Order" /> <br/><br/>
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
module.exports = IndexOrder
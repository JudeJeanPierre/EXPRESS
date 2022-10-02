const React = require("react");
const DefaultLayout = require("./layouts/Default");

class IndexUser extends React.Component {
    render() {
        const { users } = this.props;
        return (
            <DefaultLayout title={"All Users List"}>
                <a href="/home">Back to Home</a><br/><br/><br/>
                <div>
                <nav>
                    <a href="/users/new">Add New User to the List</a>
                </nav><br />
                <ol>
                    {users.map((user, i) => {
                        return (
                            <li key={i}>
                                <a href={`/users/${user.id}`}>{user.name}</a>
                                <br />
                                <a href={`/users/${user._id}/edit`}>Edit User Information</a> <br/>

                                <form action={`/users/${user._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="Delete User" /> <br/><br/>
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
module.exports = IndexUser
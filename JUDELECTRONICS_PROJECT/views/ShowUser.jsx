const React = require("react");
const DefaultLayout = require("./layouts/Default");
class ShowUser extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <DefaultLayout title={"User Profile"}>
                <div>
                <h4>Name: {this.props.user.name}</h4>
                <h4>User Name: {this.props.user.userName}</h4>
                <h4>Email: {this.props.user.email}</h4>
                <h4>Phone: {this.props.user.phone}</h4>
                <h4>Password: {this.props.user.password}</h4>
                <h4>User Status: {this.props.user.isAdmin
                ? "This User is an Administrator" : "This is a simple User, not an Administrator"}</h4>
                <br/><br/>
                <a href="/users">Back to Users Dashboard</a>
                <br/><br/>
                <a href="/home">Back to Home</a>
                </div>
            </DefaultLayout>
        );
    }
}
module.exports = ShowUser;
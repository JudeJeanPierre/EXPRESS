const React = require("react");
const DefaultLayout = require("./layouts/default");
class NewUser extends React.Component {
    render() {
        return (
            <DefaultLayout title={"New User Profile"}>
                <a href="/home">Back to Home</a><br/><br/>
                <div>
                    <form action="/users" method="POST"> <br />
                        Name: <input type="text" name="name" />
                        <br /><br />
                        User Name: <input type="text" name="userName" />
                        <br /><br />
                        Email: <input type="text" name="email" />
                        <br /><br />
                        Phone: <input type="text" name="phone" />
                        <br /><br />
                        Password: <input type="text" name="password"/>
                        <br /><br />
                        Is User an Administrator: <input type="checkbox" name="isAdmin" />
                        <br /><br />
                        <input type="submit" name="" value="Add User to List" />
                    </form> <br/>
                    <a href="/users">Back to Users' Page</a>
                </div>
            </DefaultLayout>
        );
    }
}

module.exports = NewUser;
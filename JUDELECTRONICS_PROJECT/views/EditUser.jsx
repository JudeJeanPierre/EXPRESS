const React = require('react');
class EditUser extends React.Component{
    render() {
        const myStyle = {
            color: 'red',
            backgroundColor: 'lime',
            textAlign: 'left',   
        };
        const { user } = this.props;
        return(
            <div style={myStyle}>
                <form action={`/users/${this.props.user._id}?_method=PUT`} method="POST"><br/>
                Name: <input defaultValue={this.props.user.name} type= "text" name="name" /><br/><br/>
                User Name: <input defaultValue={this.props.user.userName} type= "text" name="userName" /> <br/><br/>
                Email: <input defaultValue={this.props.user.email} type= "text" name="email" /><br/><br/>
                Phone: <input defaultValue={this.props.user.phone} type= "text" name="phone" /><br/><br/>
                Password: <input defaultValue={this.props.user.password} type= "text" name="password" /><br/><br/>
                Is this User an Administrator  ? {this.props.user.isAdmin? (
                <input type= "checkbox" name="isAdmin" defaultUnchecked />
                ) : (
                    <input type="checkbox" name="isAdmin" />
                )}
                <br/><br/>
                <input type="submit" name="" value=" Update User" /> <br/>
                </form>
                <br/><br/>
                <a href="/users">Back to Users List</a>
                <br/><br/>
                <a href="/home">Back to Home</a>
            </div>
        );
    }
}

module.exports = EditUser;
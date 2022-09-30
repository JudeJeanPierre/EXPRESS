const React = require('react');
class Edit extends React.Component{
    render() {
        const myStyle = {
            color: 'red',
            backgroundColor: 'yellow',
            textAlign: 'left',   
        };
        const { member } = this.props;
        return(
            <div style={myStyle}>
                <form action={`/members/${member._id}?_method=PUT`} method="POST"><br/>
                Name: <input defaultValue={member.name} type= "text" name="name" /><br/><br/>
                Address: <input defaultValue={member.address} type= "text" name="address" /><br/><br/>
                Email: <input defaultValue={member.email} type= "text" name="email" /> <br/><br/>
                Phone: <input defaultValue={member.phone} type= "text" name="phone" /><br/><br/>
                Year of repentance: <input defaultValue={member.repentanceYear} 
                type= "number" name="repentanceYear" /><br/><br/>
                Church of Affiliation Location: <input defaultValue={member.churchAffiliationLocation} 
                type= "text" name="churchAffiliationLocation" required /> <br/><br/>
                Pastor: <input defaultValue={member.pastor} type= "text" name="pastor" /> <br/><br/>
                Is It Confirmed Member is Baptized? {member.memberIsBaptized? (
                <input type= "checkbox" name="memberIsBaptized" defaultChecked />
                ) : (
                    <input type="checkbox" name="memberIsBaptized" />
                )}
                <br/><br/>
                <input type="submit" name="" value=" Update Member Data" /> <br/>
                </form>

            </div>
        );
    }
}

module.exports = Edit;
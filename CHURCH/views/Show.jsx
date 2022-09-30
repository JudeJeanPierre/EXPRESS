const React = require("react");

class Show extends React.Component {
    render() {
        const myStyle = {
            color: 'red',
            backgroundColor: '#ccc',
            textAlign: 'left',   
        };
        
        return (
            <div style={myStyle}><br/>
                <h2>Name: {this.props.member.name}</h2>
                <h5>Address: {this.props.member.address}</h5>
                <h5>Email: {this.props.member.email}</h5>
                <h5>Phone: {this.props.member.phone}</h5>
                <h5>Year of Repentance: {this.props.member.repentanceYear}</h5>
                <h5> Location of Affiliation Church: {this.props.member.churchAffiliationLocation}</h5>
                <a href={`/pastors/${this.props.pastorId}`}><h5>Pastor: {this.props.member.pastor}</h5></a>
                <h4>Note: 
                    {this.props.member.memberIsBaptized
                        ? " It is confirmed this member is baptized. Alleluia!"
                        : " Unfortunately, this member is not baptized yet. More prayers."}
                </h4>
                <br />
                <a href="/members">Back to Membership Home Page</a>
            </div>
        );
    }
}

module.exports = Show;
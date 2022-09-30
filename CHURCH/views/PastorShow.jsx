const React = require("react");

class PastorShow extends React.Component {
    render() {
        const myStyle = {
            color: 'red',
            backgroundColor: 'skyblue',
            textAlign: 'left',   
        };
        
        return (
            <div style={myStyle}><br/>
            
                <h2>Name: {this.props.pastor.name}</h2>
                <h5>Email: {this.props.pastor.email}</h5>
                <h5>Phone: {this.props.pastor.phone}</h5>
                <h5>Region of the Church: {this.props.pastor.churchRegion}</h5>
                <h5>Rank in Church: {this.props.pastor.rankInChurch}</h5>
                <h4> Status:
                    {this.props.pastor.isMissionBoardMember
                        ? " This Pastor is a Mission's Board Member."
                        : " This Pastor is not part of the Mission's Board"}
                </h4>
                <br />
                <a href="/members">Back to Membership Home Page</a>
            </div>
        );
    }
}

module.exports = PastorShow;
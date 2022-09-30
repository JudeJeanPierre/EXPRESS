const React = require("react");
class New extends React.Component {
    render() {
        const myStyle = {
            color: 'red',
            backgroundColor: 'lime',
            textAlign: 'left',   
        };
        return(
            <div style={myStyle}>
                <form action="/members" method="POST"><br/>
                Name: <input type= "text" name="name" required />
                <br/><br/>
                Address: <input type= "text" name="address" required />
                <br/><br/>
                Email: <input type= "text" name="email" required /> 
                <br/><br/>
                Phone: <input type= "text" name="phone" required />
                <br/><br/>
                Year of repentance: <input type= "number" name="repentanceYear" required />
                <br/><br/>
                Church of Affiliation Location: <input type= "text" name="churchAffiliationLocation" required />
                <br/><br/>
                Pastor: <input type= "text" name="pastor" required /> 
                <br/><br/>
                Member is Baptized: <input type= "checkbox" name="memberIsBaptized" required />
                <br/> <br/>
                <input type="submit" name="" value="Create New Member" />
                </form>

                {/* <form action="/pastors" method="POST">
                Name: <input type= "text" name="name" required />
                Email: <input type= "text" name="email" required /> 
                Phone: <input type= "number" name="phone" required />
                Region of the Church : <input type= "text" name="churchRegion" required />
                Rank in Church: <input type= "text" name="rankInChurch" required /> 
                Member is Baptized: <input type= "checkbox" name="memberIsBaptized" required />
                Is Member of Mission's Board: <input type="Boolean" name="isMissionBoardMember" required />
                </form> */}
            </div>
        );
    }
}

module.exports = New;
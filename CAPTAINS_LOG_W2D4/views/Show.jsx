const React = require("react");

class Show extends React.Component {
    render() {
        const myStyle = {
            color: 'red',
            backgroundColor: '#ccc',
            textAlign: 'left',   
        };
        return (
            <div style={myStyle}>
                <h1>{this.props.log.title}</h1>
                <h3>{this.props.log.entry}</h3>
                <h3>
                    {this.props.log.shipIsBroken
                        ? "It is confirmed ou ship is not broken. Great news!"
                        : "Bad News! Our ship is broken."}
                </h3>
                <br />
                <a href="/logs">Back to Logs</a>
            </div>
        );
    }
}

module.exports = Show;
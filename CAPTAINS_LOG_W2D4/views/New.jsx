const React = require("react");
class New extends React.Component {
    render() {
        const myStyle = {
            color: 'red',
            backgroundColor: '#ccc',
            textAlign: 'center',   
        };
        return (

            <div style = {myStyle}>
                <form action="/logs" method="POST">
                    Title: <input type="text" name="title" />
                    <br />
                    Entry: <input type="text" name="entry" />
                    <br />
                    Ship is broken: <input type="checkbox" name="shipIsBroken" />
                    <br />
                    <input type="submit" name="" value="Create Log" />
                </form>
            </div>
        );
    }
}

module.exports = New;
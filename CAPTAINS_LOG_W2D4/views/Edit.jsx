const React = require("react");

class Edit extends React.Component {
    render() {
        const myStyle = {
            color: 'red',
            backgroundColor: '#ccc',
            textAlign: 'left',   
        };
        const { log } = this.props;
        return (
            <div style = {myStyle}>
                <form action={`/logs/${log._id}?_method=PUT`} method="POST">
                    Title: <input defaultValue={log.title} type="text" name="title" />
                    <br />
                    Entry: <input defaultValue={log.entry} type="textarea" name="entry" />
                    <br /> Is it confirmed the ship is broken?
                    {log.shipIsBroken ? (
                        <input type="checkbox" name="shipIsBroken" defaultChecked />
                    ) : (
                        <input type="checkbox" name="shipIsBroken" />
                    )}
                    <br />
                    <input type="submit" value="Update Log" /> <br />
                </form>
            </div>
        );
    }
}

module.exports = Edit;
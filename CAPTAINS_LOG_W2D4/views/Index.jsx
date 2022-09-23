const React = require("react");

class Index extends React.Component {
    render() {
        const { logs } = this.props;
        console.log(logs);
        return (
            <div>
                <h1>Captain's Logs List:</h1>
                <nav>
                    <a href="/logs/new">Create New Log</a>
                </nav>
                <ol>
                    {logs.map((log, i) => {
                        return (
                            <li key={i}>
                                <a href={`/logs/${log.id}`}>{log.title}</a>
                                <br />
                                <a href={`/logs/${log._id}/edit`}>Log for Editing</a>

                                <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="Delete" />
                                </form>
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
}

module.exports = Index;
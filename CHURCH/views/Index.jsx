const React = require("react");
class Index extends React.Component {
    render() {
        const myStyle = {
        color: 'red',
        backgroundColor: '#ccc',
        textAlign: 'left',   
    };

        const { members } = this.props;
        console.log(members);
        return (
            <div style={myStyle}>
                <h1>Church Member's List:</h1>
                <nav>
                    <a href="/members/new">Create New Member</a>
                </nav>
                <ol>
                    {members.map((member, i) => {
                        return (
                            <li key={i}>
                                <a href={`/members/${member.id}`}>{member.name}</a>
                                <br /><br/>
                                <a href={`/members/${member._id}/edit`}>Edit Member's Data</a> <br/>

                                <form action={`/members/${member._id}?_method=DELETE`} method="POST"><br/>
                                    <input type="submit" value="Delete" /> <br/><br/><br/>
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
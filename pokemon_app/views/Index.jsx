const React = require('react');
class Index extends React.Component {
        render() {
            
            const myStyle = {
                color: 'red',
                backgroundColor: '#ccc',
                textAlign: 'left',   
            };

            const { pokemon } = this.props;
            return(
                <div style={myStyle}>
                <h1>See All The Pokemon</h1>
                <ul>
                    {pokemon.map((mon, i) => {
                        return(
                            <li>
                                <a href={`/pokemon/${i}`}> 
                                {mon.name.charAt(0).toUpperCase() + mon.name.slice(1)}
                                </a> <br/><br/>
                            </li>
                        );
                    })}
                </ul> 

                </div>
            );
            }
        }  

module.exports = Index;
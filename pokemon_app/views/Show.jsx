const React = require('react');
class Show extends React.Component {
        render() {
            
            const myStyle = {
                color: 'red',
                backgroundColor: '#ccc',
                textAlign: 'center',   
            };

            const poke  = this.props.pokemon;
            return(
                <div style={myStyle}>
                <h1>See All The Pokemon</h1>
                <h2>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</h2>
                <img src={poke.img + ".jpg"} alt="" />
        
                </div>
            );
            }
        }  

module.exports = Show;
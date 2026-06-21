import React, { Component } from "react";

export default class Pokemon02 extends Component {
  state = {
    pokemon: null,
  };

  async componentDidMount(){

try{
    const response = await  fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    
     this.setState({
             pokemon: data.sprites.front_default,
        });
}catch(error){
    console.log(error);
    
}
    }   

  render() {
    return (
    <div>
          
        <div style={{maxWidth: 1170, margin: '0 auto', padding: 20}}>
           { 
          this.state.pokemon ?
          <img src={this.state.pokemon} alt="Pokemon" />
          :<p>No!</p>
           }
       
        </div>
    
    </div>
  )};
};

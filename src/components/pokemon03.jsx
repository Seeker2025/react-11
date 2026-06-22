import React, { Component } from "react";

export default class Pokemon03 extends Component {
  state = {
    pokemon: null,
  };

   componentDidMount(){
    this.toGetData()
  }
toGetData = async () => {
try{
    const response = await  fetch('https://pokeapi.co/api/v2/pokemon/lugia');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    
    this.setState({
             pokemon: data.sprites.other.home.front_default,
        });
}catch(error){
    console.log(error);
}
    }   

  render() {
    return (
    <div>
          
        <div style={{
            maxWidth: 1170,
            margin: '0 auto',
            padding: 20,
            marginLeft: 27
            }}>
           { 
          this.state.pokemon ?
          <img src={this.state.pokemon} width="70" alt="Pokemon" />
          :<p>No!</p>
           }
       
        </div>
    
    </div>
  )};
};

import React, { Component } from "react";
import Pokemon from "./pokemon";
import Pokemon02 from "./pokemon02";

export default class App extends Component {
  // state = {
  //   pokemon: null,
  // };

  // componentDidMount(){
  //   setTimeout(()=>{
  //     fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //      .then(res => res.json())
  //      .then(data => {
  //         this.setState({
  //           pokemon: data.sprites.front_default,
  //      })})


  //   }, 1000);
      
  //   }   

  render() {
    return (
    <div>
      {/* React homework template */}

        {/* <div style={{maxWidth: 1170, margin: '0 auto', padding: 20}}>
           { 
          this.state.pokemon ?
          <img src={this.state.pokemon} alt="Pokemon" />
          :<p>No!</p>
           }
       
        </div> */}

        <Pokemon/>
        <Pokemon02/>

    </div>
  )};
};

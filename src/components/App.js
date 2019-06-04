import React, { Component } from 'react'
import anime from 'animejs'


export default class App extends Component {

  componentDidMount(){
    anime({
      targets: ".divs",
      translateX: 300,
    })    
  }


  render() {
    return (
      <div className="divs"> 
        Hola mundo
      </div>
    )
  }
}


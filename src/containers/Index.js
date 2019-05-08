import React, { Component } from 'react'
import CountNumber from '../components/CountNumber';

class Index extends Component {
  state = {
    number: 0
  }

  addNumber = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  render() {
    return (
      <div>
        <h2>Index</h2>
        <CountNumber number={this.state.number} />
        <button onClick={this.addNumber}>Hola</button>
      </div>
    )
  }
}

export default Index
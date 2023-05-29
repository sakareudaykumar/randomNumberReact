import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  generateNum = () => {
    const genenumber = Math.ceil(Math.random() * 100)
    this.setState({number: genenumber})
  }

  render() {
    const {number} = this.state
    return (
      <div className="card">
        <h1 className="heading">Random Number</h1>
        <p className="para">
          Generate a random number should be generated in the range of 0 to 100
        </p>
        <button type="button" className="button" onClick={this.generateNum}>
          Generate
        </button>
        <p className="number">{number}</p>
      </div>
    )
  }
}
export default RandomNumberGenerator

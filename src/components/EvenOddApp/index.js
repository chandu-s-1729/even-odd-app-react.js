// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onRandomIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="head-count"> Count {count} </h1>
          <p className="text-count">
            Count is {count % 2 === 0 ? 'Even' : 'Odd'}
          </p>
          <button
            onClick={this.onRandomIncrement}
            className="increase-btn"
            type="button"
          >
            Increment
          </button>
          <p className="disclaimer">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp

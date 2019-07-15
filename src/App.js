import React, { Component } from "react"
import SpiceTable from "./components/spiceTable/SpiceTable"
import "./styles/App.scss"

class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      spices: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch("./data/spices.json")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          spices: data.spices
        })
      })
  }

  handleClick(event) {
    event.preventDefault()
    console.log("clicked!")
    this.setState({
      // activeColor: event.target.name
    })
  }

  render() {
    return (
      <article className="App">
        <SpiceTable
          spices={this.state.spices}
          handleClick={this.handleClick}
        />
      </article>
    )
  }
}

export default App

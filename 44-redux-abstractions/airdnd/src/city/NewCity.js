import React from 'react'
import { createCity } from '../actions'
import { connect } from 'react-redux'

class NewCity extends React.Component {

  state = {
    name: "",
    series: "",
    image_url: "",
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.createCity(this.state)
    .then(response => {
      this.props.history.push("/cities")
    })
  }

  render(){

    const { name, series, image_url } = this.state
     return (
      <div>
        <div className="splash">
          <img className="image" src="https://s.newsweek.com/sites/www.newsweek.com/files/styles/full/public/2019/04/04/universe-big-bang.jpg" alt="splash"/>
        </div>
        <div className="centered panel">
          <h1 className="form-header">Add a city</h1>
          <form onSubmit={this.handleSubmit} className="form">
            <input onChange={this.handleChange} value={name} name="name" placeholder="Name" /><br/>
            <input onChange={this.handleChange} value={series}name="series" placeholder="Series" /><br/>
            <input onChange={this.handleChange} value={image_url} name="image_url" placeholder="Image" /><br/>
            <input id="city-create-button" type="submit"/>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, { createCity })(NewCity)
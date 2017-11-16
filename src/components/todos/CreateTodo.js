import React, { Component } from 'react'

class CreateTodo extends Component {

  state = {
    uInput: ""
  }

  handleChange = (ev) => {
    this.setState({uInput: ev.target.value})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.store.dispatch({type: "ADD_TODO", payload: this.state.uInput})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">add todo</label>
          <input type='text' onChange={this.handleChange} value={this.state.uInput}/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default CreateTodo;

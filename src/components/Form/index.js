import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state={
      task: '',
    }
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({task: event.target.value});
  }

  render(){
    return(
      <form onSubmit={(e) => this.props.addTodo(e, this.state.task)}>
        <input 
        type="text"
        value={this.state.task}
        onChange={this.onInputChange}
        placeholder="Adicione uma tarefa"
      />
        <button type="submit">+</button>
      </form>
    )
  }
}

export default Form;
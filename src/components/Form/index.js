import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state={
      task: '',
      priority: 'alta',
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onInputChange(event){
    this.setState({task: event.target.value});
  }

  handleChange(event) {
    this.setState({priority: event.target.value});
  }

  render(){
    return(
      <form onSubmit={(e) => this.props.addTodo(e, this.state.task, this.state.priority)}>
        <input 
        type="text"
        value={this.state.task}
        onChange={this.onInputChange}
        placeholder="Adicione uma tarefa"
      />
        <select value={this.state.priority} onChange={this.handleChange}>
          <option priority="alta">Alta</option>
          <option priority="media">Media</option>
          <option priority="baixa">Baixa</option>
        </select>
        <button type="submit">+</button><br></br>
      </form>
    )
  }
}

export default Form;
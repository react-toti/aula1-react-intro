import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state={
      task: '',
      priority: 'alta',
    }
    this.onInputChange = this.onInputChange.bind(this);
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
        <select onChange={this.handleChange.bind(this)}>
          <option value="alta">Alta</option>
          <option value="media">Media</option>
          <option value="baixa">Baixa</option>
        </select>
        <button type="submit">+</button><br></br>
      </form>
    )
  }
}

export default Form;
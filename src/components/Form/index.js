import React from 'react';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state={
      task: '',
      prioridade: ''
    }
    //this.onInputChange = this.onInputChange.bind(this);
    //this.onSelectChange = this.onSelectChange.bind(this);
  }

  onInputChange(event){
    this.setState({task: event.target.value});
  }
  onSelectChange(event){
    this.setState({prioridade: event.target.value});
  }

  render(){
    return(
      <form onSubmit={(e) => {this.props.addTodo(e, this.state.task, this.state.prioridade);
        document.getElementById("inputText").value = "";}}> {/* por que o input não estar mudando o valor para "" ao fazer  o submit? */}
        <input 
        id = "inputText"
        type="text"
        value={this.state.task}
        onChange={this.onInputChange.bind(this)}
        placeholder="Adicione uma tarefa"
        />
        <select name="prioridade" onChange={this.onSelectChange.bind(this)}>
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baixa">Baixa</option>
        </select>
        <button type="submit">+</button>
      </form>
    )
  }
}

export default Form;
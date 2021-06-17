import React from 'react';
import Form from '../../components/Form';
import ListAlta from '../../components/ListAlta';
import ListMedia from '../../components/ListMedia';
import ListBaixa from '../../components/ListBaixa';

class Main extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: [{"Alta": [], "Media": [], "Baixa": []}],
    }
  }

  addTodo(event, val, prioridade){
    event.preventDefault();
    
    var todo = { text: val };
    if (prioridade === "") {
      prioridade = "Alta";
    }

    if (val === "") {
      this.addTodo.stop()
    }
    switch (prioridade) {

      case "Alta" : 
        this.state.data[0].Alta.push(todo);
        this.setState({data: this.state.data});
        break;

      case "Media" : 
        this.state.data[0].Media.push(todo);
        this.setState({data: this.state.data});
        break;

      case "Baixa" : 
        this.state.data[0].Baixa.push(todo);
        this.setState({data: this.state.data});
        break;

      default: break;
    }
    
  };

  removeTodoAlta(event,value){
    event.preventDefault();
    var array = this.state.data;
    const remainder = this.state.data[0].Alta.filter((todo) => {
      return todo.text !== value;
    });

    array[0].Alta = remainder;
    this.setState({data: array})
  }
  removeTodoMedia(event,value){
    event.preventDefault();
    var array = this.state.data;

    const remainder = this.state.data[0].Media.filter((todo) => {
      return todo.text !== value;
    });

    array[0].Media = remainder;
    this.setState({data: array})
  }
  removeTodoBaixa(event,value){
    event.preventDefault();
    var array = this.state.data;
    const remainder = this.state.data[0].Baixa.filter((todo) => {
      return todo.text !== value;
    });

    array[0].Baixa = remainder;
    this.setState({data: array})
  }

  render() {
    return(
      <>
        <h1>Main</h1>
        <Form addTodo={this.addTodo.bind(this)}></Form>
        <ListAlta todos={this.state.data[0].Alta} remove={this.removeTodoAlta.bind(this)}></ListAlta>
        <ListMedia todos={this.state.data[0].Media} remove={this.removeTodoMedia.bind(this)}></ListMedia>
        <ListBaixa todos={this.state.data[0].Baixa} remove={this.removeTodoBaixa.bind(this)}></ListBaixa>
      </>
    )
  }

}

export default Main;
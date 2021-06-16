import React from 'react';
import Form from '../../components/Form';
import List from '../../components/List';

class Main extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data: [],  
    }
  }

  addTodo(event, val, priority){
    event.preventDefault();

    const todo = { text: val, priority: priority };

    this.state.data.push(todo);

    this.setState({data: this.state.data});
  };

  removeTodo(event,value){
    event.preventDefault();

    const remainder = this.state.data.filter((todo) => {
      if(todo.text !== value) return todo;
    });

    this.setState({data: remainder})
  }


  render() {
    return(
      <>
        <h1>Main</h1>
        <Form addTodo={this.addTodo.bind(this)}></Form>
        <List todos={this.state.data} remove={this.removeTodo.bind(this)}></List>
      </>
    )
  }

}

export default Main;
import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleComplete } from '../actions';

class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addTodo = () => {
        this.props.addTodo(this.state.todo);
        this.setState({
            todo: ''
        });
    }

    render() {
        return (
            <div>
                <h2>Todo List</h2>
                <input 
                    type='text' 
                    name='todo' 
                    value={this.state.todo}
                    placeholder='todo'
                    onChange={this.handleChange}
                />

                <button onClick={this.addTodo}>Add todo</button>
  
                {this.props.todos.map((todo, id) => (
                    <div onClick={() => this.props.toggleComplete(id)} key={id} className='todo'>
                        <p>{todo.name}</p>
                    </div>
                ))}
  
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos
    }
}

export default connect(mapStateToProps, { addTodo, toggleComplete })(TodoList);
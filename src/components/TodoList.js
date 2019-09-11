import React from 'react';
import style from './todolist.css';

class TodoList extends React.Component {
    render() {
      return (
      <ul className={style.todolist} >
        {this.props.todos.map(data =>
            <li key={data.id} onClick={() => this.props.remove(data.id)}>
              <span className={style.number}>{data.id}:</span>
              <span className={style.task}>{data.text}</span>
            </li>)}
      </ul>
      );
    }
  }

export default TodoList;
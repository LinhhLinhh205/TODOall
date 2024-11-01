import {Component} from 'react'
import TodoItem from './TodoItem'
export default class TodoList extends Component{
    render(){
        let {item,idx,deleteTodo,editTodo,saveTodo,editTodoItem,todoList}=this.props;
        return(
            <div>
                {todoList.map((item,idx)=>{
                    return <TodoItem key={item.id} idx={idx} item={item} deleteTodo={deleteTodo} editTodo={editTodo} saveTodo={saveTodo} editTodoItem={editTodoItem} />
                })}
            </div>
        )
    }
}
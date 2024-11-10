import { useDispatch, useSelector } from "react-redux"
import { allRead, deleteAll, deleteTodo, markAsRead } from "./features/todo/todoSlice";
import NewTodo from  './NewTodo';


export default function Todo(){

    const todolist = useSelector((state) => state.todos);
    const dispatch = useDispatch();
 
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    const handleRead = (id) => {
        dispatch(markAsRead(id));
    }

    return (<div className="Todo">
        <NewTodo />
        <hr></hr>
        <div  className="features">
            <h3>TODO LIST</h3>
            <button onClick={() => dispatch(deleteAll())} className="delBtn btn">DeleteAll</button>
            <button onClick={() => dispatch(allRead())} className="readBtn btn">ReadAll</button>
        </div>
        <div className="list">
            <ol>
                {todolist.map((todo) => {
                    return <div className="li_div">
                            <li key={todo.id} style={{ textDecoration: todo.isDone ? "line-through" : ""}}> {todo.task} </li>
                            <span className="li_btn">
                                <button onClick={() => handleDelete(todo.id)} className="delBtn btn" style={{ width: 'auto'}}><i class="fa-solid fa-trash"></i></button>
                                <button onClick={() => handleRead(todo.id)} className="readBtn btn" style={{ width: 'auto'}}><i class="fa-solid fa-check"></i></button>
                            </span>
                        </div>
                })}
            </ol>
        </div>
    </div>)
}
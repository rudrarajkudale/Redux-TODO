import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "./features/todo/todoSlice";

export default function newTODO(){

    let [task, setTask] = useState("");
    let dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(task));
        setTask("");
    }
    return (
        <form onSubmit={handleSubmit} className="task_form">
            <input value={task} onChange={(e) => setTask(e.target.value)} className="task_input"></input>
            <button className="addBtn btn">ADD</button>
        </form>
    )
}
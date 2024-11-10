import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos : [{
        id : "abc", task: "code", isDone : false
    }]
}

export const todoSlice = createSlice(
    {
        name : "todo",
        initialState,
        reducers : {
            addTodo : (state, action) => {
                let newTask = {
                    id : nanoid(),
                    task : action.payload,
                    isDone : false
                }
                state.todos.push(newTask);
            },

            deleteTodo : (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id != action.payload)
            },

            markAsRead : (state, action) => {
                state.todos.forEach((task) => {
                    if(task.id === action.payload){
                        task.isDone = true;
                    }
                })
            },

            allRead : (state,action) => {
                state.todos.map((todo) => {
                    todo.isDone = true;
                })
            },

            deleteAll : (state,action) => {
                state.todos = [];
            }
        }
    }
)

export const { addTodo, deleteTodo, markAsRead, deleteAll, allRead} = todoSlice.actions;
export default todoSlice.reducer;
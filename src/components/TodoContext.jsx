import { createContext, useContext, useReducer, useRef, useState } from "react";

// const [todos,setTodos]=useState([]);
// const actions= action =>{
//     switch(action){
//     case "CREATE":
//         return state.concat(action.todo);
//     case "TOGGLE":
//         return state.map(todo=>
//             todo.id===action.id?{...todo,done:!todo.done}:todo);
//     case "REMOVE":
//         return state.filter(todo=>todo.id !== action.id);
//     default:
//         throw new Error("Unhandled action type: $(action.type)");
//     };
// }
const initialTodos= []
const todoReducer=(state, action)=>{
    switch(action.type){
    case "CREATE":
        return state.concat(action.todo);
    case "TOGGLE":
        return state.map(todo=>
            todo.id===action.id?{...todo,done:!todo.done}:todo);
    case "REMOVE":
        return state.filter(todo=>todo.id !== action.id);
    default:
        throw new Error("Unhandled action type: $(action.type)");
    };
}

const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

export const TodoProvider=({children})=>{
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(1);
    // const dispatch=({action})=>{

    // }
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}
const notFoundContext=()=> {throw new Error("Cannot find TodoProvider");}
export const useTodoState=()=>{
    const context = useContext(TodoStateContext);
    if(!context) notFoundContext();
    return context;
}

export const useTodoDispatch=()=>{
    const context = useContext(TodoDispatchContext);
    if(!context) notFoundContext();
    return context;
}

export const useTodoNextId=()=>{
    const context = useContext(TodoDispatchContext);
    if(!context) notFoundContext();
    return context;
}
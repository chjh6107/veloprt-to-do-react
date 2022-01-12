import { createContext, useContext, useRef, useState } from "react";

const TodoContext = createContext();
const SetTodoContext = createContext();
const TodoOnToggleContext = createContext();
const TodoNextIdContext = createContext();

const todoActions=({type, id})=>{
    if(type==="TOGGLE"){
        // todos.map(todo=>{
            // console.log(todo);
            // if(todo.id===id){
            //     console.log("test");
            //     setTodos({...todos,done:!todo.done});
            // }
        // });
    }
}
export const TodoProvider=({children})=>{
    const [todos,setTodos]=useState([
        {
            id:1,
            text:"프로젝트 생성하기",
            done: true
        },
        {
            id:2,
            text:"컴포넌트 스타일링 하기",
            done: false
        }
    ]);
    
    const nextId = useRef(3);
    return(
        <TodoContext.Provider value={todos}>
            <SetTodoContext.Provider value={todoActions}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </SetTodoContext.Provider>
        </TodoContext.Provider>
    );
} 

export const useTodo=()=>{
    return useContext(TodoContext);
}

export const useSetTodo=()=>{
    return useContext(SetTodoContext, TodoOnToggleContext);
}

export const useTodoNextId=()=>{
    return useContext(TodoNextIdContext);
}
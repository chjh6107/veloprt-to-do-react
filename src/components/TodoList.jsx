import styled from "styled-components";
import { useTodo } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

const TodoListBlock=styled.div`
    padding: 20px 32px;
`;

const TodoList=()=>{
    const todos = useTodo();
    return(
        <TodoListBlock>
            {todos.map(todo=>
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
            )}
        </TodoListBlock>
    )
}

export default TodoList;
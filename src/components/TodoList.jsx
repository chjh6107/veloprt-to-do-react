import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock=styled.div`
    flex: 1;
    padding: 20px 32px 48px;
    overflow-y: auto;
    /* background: gray; //테스트용 */
`;

const TodoList=()=>{
    return (
        <TodoListBlock>
            <TodoItem text="밥먹기" done={true}/>
            <TodoItem text="밥안먹기" done={false}/>
        </TodoListBlock>
    )
}
export default TodoList;
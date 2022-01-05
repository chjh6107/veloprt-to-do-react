import styled from "styled-components";
import { getFullDate, getToday } from "../common/common";
import { useTodoState } from "./TodoContext";

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #e9ecef;
    h1{
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }
    .day{
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }
    .tasks-left{
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

const TodoHead=()=>{
    const todos=useTodoState();
    const unDoneTasks = todos.filter(todo=>!todo.done);
    return(
        <TodoHeadBlock>
            <h1>{getFullDate()}</h1>
            <div className="day">{getToday()}</div>
            <div className="tasks-left">할 일 {unDoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;
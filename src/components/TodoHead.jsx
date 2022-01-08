import styled from "styled-components";
import { getFullDate, getTodayName } from "../common/common";
import Clock from "./Clock";

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px;
    border-bottom: 1px solid #e0ecef;
    h1{
        margin: 0;

    }
    .day{
        font-size: 18px;
        margin-top: 8px;
        color: #9b9b9b;

    }
    .tasks-left{
        font-size: 18px;
        margin-top: 32px;
        color: #20c997;
        font-weight: bold;
    }
`;

const TodoHead = () => {
    return(
        <TodoHeadBlock>
            <h1>{getFullDate()}</h1>
            <span className="day">{getTodayName()}</span>
            <Clock/>
            <div className="tasks-left">할 일 NaN개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;
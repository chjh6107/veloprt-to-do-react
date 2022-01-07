import styled from "styled-components";
import { getFullDate, getTodayName } from "../common/common";

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px;
    border-bottom: 1px solid #e0ecef;
    h1{
        margin: 0;

    }
    .tasks-left{
        margin-top: 32px;
    }
`;

const TodoHead = () => {
    return(
        <TodoHeadBlock>
            <h1>{getFullDate()}</h1>
            <div className="day">{getTodayName()}</div>
            <div className="tasks-left">할 일 NaN개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;
import styled from "styled-components";

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
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
    return(
        <TodoHeadBlock>
            <h1>{(()=>{
                const now = new Date();
                return now.getFullYear()+"년 "+(now.getMonth()+1)+"월 "+now.getDate()+"일";
                })()}</h1>
            <div className="day">
                {(()=>{
                    const now = new Date();
                    const days="일월화수목금토";
                    return days[now.getDay()]+"요일";
                })()}
            </div>
            <div className="tasks-left">할 일 2개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;
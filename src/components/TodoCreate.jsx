import styled from "styled-components";

const CircleButton=styled.button`
    background-color: #58E2B6;
    &:hover{
        background-color: #5deec0;
    }
    &:active{
        background-color: #4ecea5;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
    color: #f1f1f1;
    font-weight: 100;
    width: 80px;
    height: 80px;
    border: none;
    border-radius: 50%;
`;

const TodoCreate=()=>{
    return(
        <>
            <CircleButton>
                +
            </CircleButton>
        </>
    );
}

export default TodoCreate;
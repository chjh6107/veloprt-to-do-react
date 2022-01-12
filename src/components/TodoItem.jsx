import styled from "styled-components";
import { MdDelete, MdDone } from "react-icons/md";
import { css } from "styled-components";

const Remove = styled.div`
    display: flex;
    font-size: 24px;
    color: #d9dee2;
    cursor: pointer;
    &:hover{
        color: #b5babe;
    }
    display: none;
`;

const TodoItemBlock = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 16px;
    &:hover{
        ${Remove}{
            display: initial;
        }
    }
`;

const CheckCircle = styled.div`
    height: 32px;
    width: 32px;
    border: 1px solid #38d9a9;
    color: #38d9a9;
    border-radius: 16px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    cursor: pointer;
    ${props=>
        !props.done&&
        css`
            border: 1px solid #ced4da;
            color: #ced4da;
        `
    }
`;

const Text = styled.div`
    flex: 1;
    color: #ced4da;
    
    ${props=>
        !props.done&&
        css`
            color: #5e5e5e;
        `
    }
`;

const TodoItem = ({id, text, done}) =>{
    
    return(
        <TodoItemBlock>
            <CheckCircle  done={done}>{done && <MdDone/>}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove><MdDelete/></Remove>
        </TodoItemBlock>
    )
}

export default TodoItem;
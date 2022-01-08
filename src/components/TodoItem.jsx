import styled from "styled-components";
import { MdDone } from "react-icons/md";

const Remove = styled.div`
    
`;

const TodoItemBlock = styled.div`
    display: flex;
    margin-bottom: 16px;
`;

const CheckCircle = styled.div`
    height: 32px;
    width: 32px;
    border: 1px solid #ced4da;
    border-radius: 16px;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    cursor: pointer;
`;

const Text = styled.div`
    
`;

const TodoItem = ({text, done}) =>{
    return(
        <TodoItemBlock>
            <CheckCircle done={done}>{done && <MdDone/>}</CheckCircle>
            <Text done={done}>{text}</Text>
        </TodoItemBlock>
    )
}

export default TodoItem;
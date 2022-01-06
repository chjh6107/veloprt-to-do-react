import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;

    display: flex;
    flex-direction: row;
    /* flex-direction: column-reverse; */
    /* align-items: center; */
`;

const TodoTemplate = ({children}) =>{
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate;
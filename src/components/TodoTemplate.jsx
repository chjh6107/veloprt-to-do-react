import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;

    position: relative;
    background-color: white;
    border-radius: 16px;
    border: 2px solid #d1d1d1;
    margin: 64px auto 32px;
    box-shadow: 0 0 16px 0 rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    /* flex-direction: column-reverse; */
`;

const TodoTemplate = ({children}) =>{
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate;
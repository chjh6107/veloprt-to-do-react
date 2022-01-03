import styled from "styled-components";

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;

    // 박수 하단에 추가 버튼을 위치시키기 위한 설정
    position: relative;
    background: white;
    border-radius: 16px;
    box-shadow: 0 0 12px 0px rgba(0,0,0,.3);

    margin: 0 auto;

    margin-top: 96px;
    margin-bottom: 32px;
    display: flex; //유동적인 레이아웃을 만들기 위한 것
    flex-direction: column;
`;

const TodoTemplate= ({children}) =>{
    return(
        <TodoTemplateBlock>
            {children}
        </TodoTemplateBlock>
    )
}
export default TodoTemplate;
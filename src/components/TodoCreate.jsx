import { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";

const CircleButton=styled.button`
    background-color: #58E2B6;
    &:hover{
        background-color: #5deec0;
    }
    &:active{
        background-color: #4ecea5;
    }
    
    width: 80px;
    height: 80px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 64px;
    color: #f1f1f1;
    border: none;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%,50%);
    /* bottom: 0; */
    transition: 0.2s all ease-in;
    ${props=>
        props.open&&
        css`
            background-color: #f36363;
            transform: translate(-50%,50%) rotate(45deg);
            &:hover{
                background-color: #f77b7b;
            }
            &:active{
                background-color: #e75454;
            }
        `
    }
`;

const InsertFormPositioner=styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
`;

const InsertForm=styled.form`
    background-color: #f8f9fa;
    padding: 32px 32px 72px 32px;
    height: 50px;
    border-top: 1px solid #dedfe0;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    `;

const Input=styled.input`
    width: 100%;
    padding: 4px;
    outline: none;
    font-size: 18px;
    border: 1px solid #dedfe0;
    border-radius: 4px;
`;

const TodoCreate=()=>{
    const [open,setOpen]=useState(false);
    const onClick=()=>setOpen(!open);
    // const [open,setOpen]=useState(true);
    return(
        <>
            {open&&(
                <InsertFormPositioner>
                    <InsertForm>
                        <Input autoFocus placeholder="할 일 입력"/>
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onClick} open={open}>
                +
            </CircleButton>
        </>
    );
}

export default TodoCreate;
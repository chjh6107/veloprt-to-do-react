import React, { useState, useEffect } from "react";
import moment from "moment";
import styled from "styled-components";

const ClockBlock=styled.span`
    margin-left: 10px;
    color: #5a5959;
`;
const Clock=()=>{
    const [time,setTime]=useState(moment());
    let timer=null;
    useEffect(()=>{
        timer = setInterval(() => {
            setTime(moment());
        }, 1000);
        return()=>{
            clearInterval(timer);
        };
    },[]);
    return(
        <ClockBlock>{time.format('HH:mm:ss')}</ClockBlock>
    )
}

export default Clock;
import React from "react";

export function nextArrow(props){
    return(
        <>
        <div className={props.className} style = {{...props.style}} onClick={props.onClick}/>
        </>
    )
}

export function prevArrow(props){
    return(
        <>
        <div className={props.className} style = {{...props.style}} onClick={props.onClick}/>
        </>
    )  
}
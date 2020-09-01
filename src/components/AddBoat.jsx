import React from 'react'
import styled from "styled-components";


/*Add, Edit, Delete, filter*/



const EditStyle = styled.div`

  color: black;
  font-size: 50px;

`;
const AddWrapper = styled.div`

    height: 90vh;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 50px 50px 50px 50px;

`;

const EditInput = styled.input`
width: 100%;
padding: 12px 20px;
outline: none;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;


EditInput[type="text"]:focus,
:focus {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  border: 1px solid rgba(81, 203, 238, 1);
}

`;


export default function AddBoat() {

    return (

       <AddWrapper>
          <EditStyle>Upload Boat</EditStyle>
          <EditInput placeholder ="Search"></EditInput>

       </AddWrapper>

    )
}
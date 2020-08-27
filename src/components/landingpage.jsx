import React from 'react';
import styled from "styled-components";

const InputField = styled.div`
height: 50px;
width: 100%;
padding: 5px;
box-sizing: border-box;
`;
const InputArea = styled.input`
width: 60%;
padding: 12px 20px;
outline: none;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;


InputArea[type="text"]:focus,
:focus {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  border: 1px solid rgba(81, 203, 238, 1);
}
`;

const LandingPageStyle = styled.div`

  @import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");

`;
const LandingPageContent = styled.div`

  background-color: #fdf6f6;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 105vh;
  padding-top: 100px;
  font-family: 'Quicksand', sans-serif;

`;

export default function LandingPage() {


    return (

        <LandingPageContent>
            <LandingPageStyle>

            <h1>Testing that this works</h1>
            <InputArea></InputArea>



            </LandingPageStyle>
        </LandingPageContent>


    );
  }





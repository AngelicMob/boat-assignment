import React from 'react';
import styled from "styled-components";



const InputSearch = styled.input`
width: 100%;
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


`;
const LandingPageContent = styled.div`

  background-color: #fdf6f6;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 105vh;
  padding-top: 100px;

`;

export default function LandingPage() {


    return (

        <LandingPageContent>
            <LandingPageStyle>

                <h1>Testing that this works</h1>


                  <InputSearch type="text" placeholder="search"></InputSearch>



            </LandingPageStyle>
        </LandingPageContent>


    );
  }





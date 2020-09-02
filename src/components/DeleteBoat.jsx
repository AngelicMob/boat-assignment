/*Frontend part for the Delete Stuff*/
import React from 'react'
import styled from "styled-components";

const DeleteContainer = styled.div`

  box-shadow: 1px 4px 8px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  transition: 0.1s;
  padding: 25px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 38vh;
    background-color: rgba(255,255,255,0.1);
    padding: 50px 50px 50px 50px;
    width: 57%;
    margin-left: 455px;

  h3 {
    color: white;
    font-size: 25px;
    text-decoration: underline;
    margin: 17px;
    margin-bottom: 39px;

  }
  overflow-x: hidden;
  overflow-y: scroll;

    ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: rgb(160 160 160);
  }
  ::-webkit-scrollbar-thumb {

    background: #3c3c3c;
  }

`;

const DeleteContent = styled.div`


`;

export default function DeleteBoat() {
    return (

        <DeleteContainer>
            <h3>Remove Boat</h3>

            <DeleteContent></DeleteContent>
        </DeleteContainer>

    )
}


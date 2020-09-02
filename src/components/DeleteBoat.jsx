/*Frontend part for the Delete Stuff*/
import React from 'react'
import styled from "styled-components";

const DeleteContainer = styled.div`

  box-shadow: 1px 4px 8px 2px rgba(0, 0, 0, 0.2);
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  transition: 0.1s;
  width: 900px;
  height: 425px;
  padding: 25px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  h2 {

    font-weight: 300;
    font-size: 25px;
  }

`;

const DeleteContent = styled.div`
    height: 350px;
    width: 900px;
    overflow-x: hidden;
    overflow-y: scroll;

`;

const DeleteButton = styled.div `



`;

export default function DeleteBoat() {
    return (

        <DeleteContainer>
            <h3>Remove Boat</h3>
            <DeleteContent>


            <DeleteButton></DeleteButton>

            </DeleteContent>

        </DeleteContainer>

    )
}


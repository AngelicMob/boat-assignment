import React from 'react'
import styled from "styled-components";


const AddContent = styled.div`

    height: 50vh;
    background-color: rgba(255,255,255,0.1);
    padding: 50px 50px 50px 50px;
    width: 67%;
    margin-left: 278px;
  h3 {
    color: white;
    font-size: 25px;
    text-decoration: underline;
    margin: 17px;
    margin-bottom: 39px;

  }

  p {

    color: white;
    font-size: 15px;
    font-weight: 300;
  }


`;


const InputStyle = styled.input`
    width: 46%;
    padding: 12px 21px;
    outline: none;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

    InputStyle[type="text"]:focus,
    :focus {
      box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      border: 1px solid rgba(81, 203, 238, 1);
    }

`;

export default function AddBoat() {

    return (

       <AddContent>

            <h3>Upload Boat</h3>

            <div className ="section-model">
              <div className ="model-input">
              <InputStyle type ="text" placeholder ="ModelName"></InputStyle>
              </div>

            </div>
            <br></br>

            <div className ="section-mani">
              <div class="mani-input">
              <InputStyle type ="text" placeholder ="Manifactured Year"></InputStyle>
              </div>
            </div>
            <br></br>

            <div className ="section-price">
              <div className ="price-input">
              <InputStyle type ="text" placeholder ="Price"></InputStyle>

              </div>
            </div>

            <div className ="section-sailing">


                  <p>Saiing Boat</p>
                <div class="sailing-input">
                  <input type="radio" id="yes" name="choice" value="yes"></input>
                  <label for="yes">Yes</label>
                  <br></br>
                  <input type="radio" id="no" name="choice" value="no"></input>
                  <label for="no">No</label>

              </div>
            </div>

            <div className ="section-motor">


                <p>Has Motor</p>
              <div class="motor-input">
                <input type="radio" id="yes1" name="choice" value="yes1"></input>
                <label for="yes1">Yes</label>
                <br></br>
                <input type="radio" id="no1" name="choice" value="no1"></input>
                <label for="no1">No</label>

            </div>
          </div>


       </AddContent>

    )
}
import React from 'react'
import styled from "styled-components";


const AddContent = styled.div`

    height: 34vh;
    background-color: rgba(255,255,255,0.1);
    padding: 50px 50px 50px 50px;
    width: 52%;
    margin-left: 455px;
    border-radius: 8px;
  h3 {
    color: white;
    font-size: 25px;
    text-decoration: underline;
    margin: 0px;
    margin-bottom: 39px;

  }

 .type-of-boat {

      height: 75px;
      width: 50%;
      display: block;
      box-sizing: border-box;
      color: white;

      .type-input {
        font-size: 20px;
        color: white;
        display: block;
        cursor: pointer;
        margin: 14px;
        margin-left: 497px
      }
      label {
        cursor: pointer;
      }
    }
`;

const UploadButton = styled.div`

.upload-button {

    height: 43px;
    width: 147px;
    margin: 50px;
    color: white;
    font-size: 19px;
    background: transparent;
    border: 2px solid white;
    border-radius: 3px;
    cursor: pointer;
}

`;


const InputStyle = styled.input`
    width: 50%;
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


              <div className ="name-input">
              <InputStyle id="name" type ="text" placeholder ="Name"></InputStyle>
              <label for="name"></label>

              </div>
            <br></br>


              <div class="mani-input">
                <InputStyle id="mani" type ="text" placeholder ="Manifactured Year"></InputStyle>
                <label for="mani"></label>
              </div>
            <br></br>


              <div className ="price-input">
              <InputStyle id="price" type ="text" placeholder ="Price"></InputStyle>
              <label for="price"></label>
              </div>

              <div className ="type-of-boat">
                  <label className="type-input" for="type">Type</label>
                      <div className ="type">
                            <input type="radio" id="sail" value="sail"name="choice"></input>
                            <label for="sail">Sail</label>
                            <br></br>
                            <input type="radio" id="motor" value="motor"name="choice"></input>
                            <label for="motor">Motor</label>
                            <br></br>
                      </div>
              </div>
          <UploadButton>
            <button className="upload-button" type="button">Upload</button>
          </UploadButton>
       </AddContent>

    )
}
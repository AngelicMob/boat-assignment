import React from 'react'
import styled from "styled-components";


const AddContent = styled.div`

    height: 90vh;
    background-color: rgba(255, 255, 255, 0.7);
    padding: 50px 50px 50px 50px;
  h3 {
    color: black;
    font-size: 50px;

  }

  /* .section-model {


  }

  .section-price {¨

  } */

`;

const ContentTransparency = styled.div`
  width: 100%;
  height:100%;
  background-color: rgba(255, 255, 255, 0.4);
`;

const InputStyle = styled.input`
  width: 100%;
  padding: 12px 20px;
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
          <ContentTransparency>

            <div className ="section-model">
              <div className ="model-input">
              <InputStyle type ="text" placeholder ="modelName"></InputStyle>
              </div>

            </div>
            <br></br>

            <div className ="section-price">
              <div className ="price-input">
              <InputStyle type ="text" placeholder ="price"></InputStyle>

              </div>
            </div>

            <div className ="section-sailing">
              <div className ="sailing">
              <label for="other">Other</label>
                <InputStyle type="radio" name="gender" id="other" value="other"></InputStyle>


              </div>
            </div>
            </ContentTransparency>

       </AddContent>

    )
}
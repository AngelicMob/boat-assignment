import React from 'react';
import styled from "styled-components";

const FilterContent = styled.div`
    width: 100%;
    height: 31vh;
    background-color: rgba(255,255,255,0.1);
    padding: 50px 50px 50px 50px;
    width: 52%;
    margin-left: 455px;
    border-radius: 8px;
  h3 {
    color: white;
    font-size: 25px;
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

const BoatInput = styled.input`
    width: 50%;
    padding: 12px 21px;
    outline: none;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin: 8px;
    margin-left: 14px;

    BoatInput[type="text"]:focus,
    :focus {
      box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      border: 1px solid rgba(81, 203, 238, 1);
    }
`;

const SearchButton = styled.div`
   .search-button {
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

export default function BoatFilter() {

    return (
        <div>
            <FilterContent>
            <h3>Search for Boats</h3>

            <div className ="name-input">
              <BoatInput id="name" type ="text" placeholder ="Boat Name"></BoatInput>
              <label for="name"></label>

            </div>

            <div className ="mani-input">
              <BoatInput id="mani" type ="text" placeholder ="Where was the boat manifactured?"></BoatInput>
              <label for="mani"></label>
            </div>

            <div className ="price-input">
              <BoatInput id="price" type ="text" placeholder ="Max Price"></BoatInput>
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
            <SearchButton><button className="search-button" type="button">Search</button></SearchButton>
          </FilterContent>
        </div>
    )
}

import React, {useState} from 'react';
import styled from "styled-components";
import axios from 'axios';


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

    color: white;

  .type-input {
    font-size: 20px;
    color: white;
    display: block;
    cursor: pointer;
    margin: 14px;

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




const pageUrl = 'http://localhost:1234/';
function sendfilter(searchfilter, datacallback) {

    axios.get(pageUrl + 'search', {params: searchfilter})
    .then((res) => datacallback(res.data))
    .catch((error) => console.log(error));
}


export default function BoatFilter({datacallback}) {

    const [addname, setAddName] = useState('');
    const [addprice, setAddPrice] = useState('');
    const [addtype, setAddType] = useState('');

    const searchfilter = {};


    function addfilter() {

      searchfilter.modellname = addname;
      searchfilter.price = parseInt(addprice);
      if(addtype === 'sail') {
        searchfilter.motorized = 'no'
        searchfilter.sail ='yes'
      }

      else {
        searchfilter.motorized = 'yes'
        searchfilter.sail ='no'
      }

      sendfilter(searchfilter, datacallback);
    }

    function resetfilter() {

      setAddName('');
      setAddPrice('')
      setAddType('')
    }


    return (
        <div>
            <FilterContent>
            <h3>Search for Boats</h3>

            <div className ="name-input">
              <BoatInput id="name" type ="text" placeholder ="Boat Name" value = {addname} onChange = {(e) => setAddName(e.target.value)}></BoatInput>
              <label htmlFor="name"></label>

            </div>

            <div className ="price-input">
              <BoatInput id="price" type ="text" placeholder ="Max Price" value = {addprice} onChange = {(e) => setAddPrice(e.target.value)}></BoatInput>
              <label htmlFor="price"></label>
            </div>

              <div className ="type-of-boat">
                  <label className="type-input" htmlFor="type">Type</label>
                      <div className ="type" onChange = {(e) => setAddType(e.target.value)}>
                            <input type="radio" id="sail" value="sail"name="choice"></input>
                            <label htmlFor="sail">Sail</label>
                            <br></br>
                            <input type="radio" id="motor" value="motor"name="choice"></input>
                            <label htmlFor="motor">Motor</label>
                            <br></br>
                      </div>
              </div>
            <SearchButton>
                          <button className="search-button" type="button" onClick = {addfilter}>Search</button>
                          <button className="search-button" type="button" onClick = {resetfilter}>Reset Search</button>

            </SearchButton>
          </FilterContent>
        </div>
    )
}

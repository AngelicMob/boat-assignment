import React, {useState, useEffect} from 'react';
import styled from "styled-components";


const BoatListStyle = styled.div`

  box-shadow: 1px 4px 8px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: 2px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  transition: 0.1s;
  padding: 25px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 48vh;
  background-color: rgba(255,255,255,0.1);
  padding: 50px 50px 50px 50px;
  width: 57%;
  margin-left: 455px;

  h3 {
    color: white;
    font-size: 25px;
    text-decoration: underline;
    margin: -22px;
    margin-bottom: 39px;
  }

.list {

  overflow-y: scroll;
  max-height: 750px;
  min-height: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding-top: 40px;
  ::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: rgba(70, 95, 111, 0.87);
}
::-webkit-scrollbar-thumb {
  background: rgb(61, 60, 60);
}
}



`;

//const pageUrl = something;

//function GetBoats(setBoat, pageUrl) {
//}

/*The */
export default function BoatList() {

   // const [boat, setBoat] = useState('');

   // useEffect(() => {

     // GetBoats(setBoats, pageUrl);

      // eslint-disable-next-line}, []);

   // console.log(Array.isArray(boats))
    // console.log(boats)

    return (

        <BoatListStyle>
              <h3>All Boats</h3>
              <div className ="list">
              </div>
        </BoatListStyle>

    );
  }


import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import axios from 'axios';


const BoatListBackground = styled.div`
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
  padding: 9px 15px 6px 52px;
  width: 57%;
  margin-left: 455px;

  h3 {
    color: white;
    font-size: 20px;
    margin: -5px;
    margin-bottom: 39px;
  }

  `;

  const BoatListStyle = styled.div`
    height: 535px;
    /* margin: -39px; */
    margin-top: 18px;
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
        .remove-table {
        li {
            border-radius: 3px;
            padding: 25px 30px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            margin-left: -40px;
            margin-right: 10px;
        }
        .table-header {
            background-color: #95A5A6;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.03em;
        }
        .table-row {
            background-color: #ffffff;
            box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
        }
        .col-1 {
            flex-basis: 25%;
            text-align: left;
        }
        .col-2 {
            flex-basis: 25%;
            text-align: left;
        }
        .col-3 {
            flex-basis: 25%;
        }
        .col-4 {
            flex-basis: 25%;
        }
    }

`;
const BoatMapWrapper = styled.div `
    .boat-list {
        li {
            border-radius: 3px;
            padding: 25px 30px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            margin-left: -40px;
            margin-right: 10px;
        }
        .table-row {
            background-color: #ffffff;
            box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
        }
        .col-1 {
            flex-basis: 25%;
        }
        .col-2 {
            flex-basis: 25%;
        }
        .col-3 {
            flex-basis: 25%;
        }
        .col-4 {
            flex-basis: 25%;
        }
    }
`;

const pageUrl = 'http://localhost:1234/boats';
function GetBoats(setBoat) {

    axios.get(pageUrl)
    .then((res) => setBoat(res.data))
    .catch((error) => console.log(error));
}


export default function BoatList({data}) {

  const [boat, setBoat] = useState([]);



    useEffect(() => {
    GetBoats(setBoat);
    // eslint-disable-next-line

    }, []);

    useEffect(() => {

        setBoat(data);

        }, [data]);


  const boatList = boat.map((e) => (

    <BoatMapWrapper key={e._id}>

      <li className="table-row">
                    <div className="col col-1">{e.modellname}</div>
                    <div className="col col-2">{e.price} KR</div>
                    <div className="col col-3">{e.manifacturedYear}</div>
                    {e.sail !== 'yes' ?
                      <div className="col col-4">Type: Motorized</div>
                      :
                      <div className="col col-4">Type: Sail</div>
                    }
      </li>
    </BoatMapWrapper>
  ));


    return (

     <BoatListBackground>
        <BoatListStyle>
            <h3>Matches Found:</h3>
              <ul className="remove-table">
              <li className="table-header">
                  <div className="col col-1">Name</div>
                  <div className="col col-2">Price</div>
                  <div className="col col-3">Manifactured</div>
                  <div className="col col-4">Type</div>
              </li>
              {boatList}
          </ul>
        </BoatListStyle>
     </BoatListBackground>


    );
  }


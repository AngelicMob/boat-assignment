/*Frontend part for the Delete Stuff*/
import React, {useState, useEffect} from 'react'
import styled from "styled-components";
import axios from 'axios';

const DeleteBackground = styled.div`

  box-shadow: 1px 4px 8px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: 5px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  transition: 0.1s;
  padding: 25px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 45vh;
  background-color: rgba(255,255,255,0.1);
  padding: 24px 23px 0px 46px;
  width: 57%;
  margin-left: 455px;

  h3 {
    color: white;
    font-size: 20px;
    margin: -5px;
    margin-left: -42px;
    margin-bottom: 15px;
  }
`;
const DeleteContent = styled.div`
    height: 385px;
    width: 1114px;
    margin: -39px;
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
            flex-basis: 20%;
        }
        .col-2 {
            flex-basis: 30%;
        }
        .col-3 {
            flex-basis: 32%;
        }
        .col-4 {
            flex-basis: 20%;
        }
        .delete-button {
            height: 30px;
            margin: -9px;
            width: 60px;
            background: rgb(134 11 18 / 67%);
            border: none;
            padding: 9px 0px 0px 0px;
            border-radius: 3px;
            color: white;
            font-size: 15px;
            outline: none;
            font-weight: 700;
            -webkit-flex-basis: 30%;
            -ms-flex-preferred-size: 30%;
            -webkit-flex-basis: 20%;
            -ms-flex-preferred-size: 20%;
            -webkit-flex-basis: 20%;
            -ms-flex-preferred-size: 20%;
            flex-basis: 20%;
            cursor: pointer;
        }
    }
`;
const DeleteMapWrapper = styled.div `
`;


const mainUrl = 'http://localhost:1234/';
function GetBoats(setBoat) {

    axios.get(mainUrl + 'boats')
    .then((res) => setBoat(res.data))
    .catch((error) => console.log(error));
}

function removeBoat(id, setBoat) {
    axios.delete(mainUrl + 'delete', {params: {id: id}})
    .then((res) =>{
        GetBoats(setBoat)
        console.log(res.data);
    })
    .catch((error) => console.log(error));
}

export default function DeleteBoat() {

    const [boat, setBoat] = useState([]);

    useEffect(() => {
    GetBoats(setBoat);
    }, []);


    const deleteList = boat.map((e) => (

        <DeleteMapWrapper key={e._id}>

          <li className="table-row">
                <div className="col col-1">{e.modellname}</div>
                <div className="col col-2">{e.price} KR</div>
                <div className="col col-3">{e.manifacturedYear}</div>
                <div className="delete-button" onClick = {() => removeBoat(e._id, setBoat)} >Remove</div>

          </li>
        </DeleteMapWrapper>
      ));


    return (

        <DeleteBackground>
            <h3>Remove Boat</h3>
            <DeleteContent>
                <ul className="remove-table">
                    <li className="table-header">
                        <div className="col col-1">Name</div>
                        <div className="col col-2">Price</div>
                        <div className="col col-3">Manifactured</div>
                        <div className="col col-4"></div>
                    </li>
                    {deleteList}
                </ul>
            </DeleteContent>
        </DeleteBackground>

    )
}


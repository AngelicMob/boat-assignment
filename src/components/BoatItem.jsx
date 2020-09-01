import React, {useState} from 'react';
import styled from "styled-components";


const BoatCard = styled.div`





`;

const ListStyle = styled.div`

  overflow-y: scroll;
  max-height: 750px;
  min-height: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding-top: 40px;

  .list::-webkit-scrollbar {
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


`;


const BoatInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  outline: none;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;


BoatInput[type="text"]:focus,
:focus {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  border: 1px solid rgba(81, 203, 238, 1);
}

`;


export default function BoatItem() {

    const [input, setInput] = useState('');


    return (

        <ListStyle>

                <div className ="list-content">

                        <div className="search-bar">
                            <div className="search">
                                <BoatInput type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search for Boats. . ." required></BoatInput>
                            </div>
                        </div>

                </div>

                <div className ="list"></div>
        </ListStyle>






    );
  }


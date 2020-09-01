import React, {useState} from 'react';
import styled from "styled-components";


const BoatCard = styled.div`
div.card-container {
    border-bottom: 1px solid grey;
    background-color: rgba(0,0,0, 0.30);
    color: white;
    display: flex;
    justify-content: center;
    padding: 10px;

  }
div.card-container:nth-child(odd){
    border-right: 1px solid grey;
  }

div.cards {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 0;

}


.cards > .info-cards {
  display: flexbox;
  justify-content: flex-start;
  margin-top: 28px;
  border-bottom: 1px solid grey;
}

.info-cards {
    text-align: left;
    line-height: 37px;
    margin: 1em;
}

`;

const ListStyle = styled.div`

width: 100%;

.list {

overflow-y: scroll;
  max-height: 750px;
  min-height: 250px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  padding-top: 40px;
}

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
    width: 93%;
    padding: 12px 21px;
    outline: none;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin: 54px;
    margin-left: 63px;


BoatInput[type="text"]:focus,
:focus {
  box-shadow: 0 0 5px rgba(81, 203, 238, 1);
  border: 1px solid rgba(81, 203, 238, 1);
}

`;

/*The */
export default function BoatList(boats) {

    const [input, setInput] = useState('');

    const boatList = boats
    .filter(
      (el) =>
        el.name.toLowerCase().match(input.toLowerCase()) ||
        el.eye_color.toLowerCase().match(input.toLowerCase()) ||
        el.birth_year.toLowerCase().match(input.toLowerCase()) ||
        el.hair_color.toLowerCase().match(input.toLowerCase())
    )
    .map((e) => (

     <BoatCard>
      <div className='card' key={e.name}>
        <div className='card-container'>
        <br></br>
        <br></br>

        <div className ="cards">

              <div className ="info-cards">
                <div>Name: {e.name}</div>
                <div> Eye-color: {e.eye_color}</div>
                <div> Age: {e.birth_year}</div>
                <div> Hair-color: {e.hair_color}</div>

              </div>

        </div>


        </div>
      </div>
      </BoatCard>
    ))


    return (

        <ListStyle>

                <div className ="list-content">

                        <div className="search-bar">
                            <div className="search">
                                <BoatInput type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search for Boats. . ." required></BoatInput>
                            </div>
                        </div>

                </div>

                <div className ="list">{boatList}</div>
        </ListStyle>

    );
  }


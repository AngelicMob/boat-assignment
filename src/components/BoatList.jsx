import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const BoatInfo = styled.div `

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

    div.boats {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      margin-left: 0;

    }


    .boats > .info-cards {
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


const BoatCard = styled.div`

  background-color: rgba(255, 255, 255, 0.4);
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

const pageUrl =
function GetBoats(setBoat, pageUrl) {


}

/*The */
export default function BoatList(boats) {

    const [boat, setBoat] = useState('');

    useEffect(() => {

      GetBoats(setBoats, pageUrl);

      // eslint-disable-next-line
    }, []);

    console.log(Array.isArray(boats))
    console.log(boats)

    const boatList = boats

    .map((e) => (

     <BoatCard>
        <BoatInfo>
          <div className='card' key={e._id}>
                <div className='card-container'>
                      <div className ="boats">

                        <div className ="info-cards">
                          <div>Name: {e.name}</div>
                          <div> Eye-color: {e.eye_color}</div>
                          <div> Age: {e.birth_year}</div>
                          <div> Hair-color: {e.hair_color}</div>
                        </div>

                      </div>
                  </div>
          </div>
        </BoatInfo>
      </BoatCard>
    ))


    return (

        <ListStyle>

              <div className ="list">
                  {boatList}
              </div>
        </ListStyle>

    );
  }


import React, {useState} from 'react';
import styled from "styled-components";
import BoatList from './BoatList';
import BoatFilter from './BoatFilter';



const LandingPageStyle = styled.div`
  width:100%;
  height: 100%;
  height: 29vh;

`;

const LandingPageContent = styled.div`

  height: 100%;

`;


export default function LandingPage() {


  const [currentboatlist, setCurrent] = useState([]);
  function datacallback(e) {
    setCurrent(e)
  }

    return (

        <LandingPageContent>
            <LandingPageStyle>
                  <BoatFilter datacallback = {e => datacallback(e)}></BoatFilter>
                  <BoatList data = {currentboatlist}></BoatList>
            </LandingPageStyle>
        </LandingPageContent>


    );
  }





import React from 'react';
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


    return (

        <LandingPageContent>
            <LandingPageStyle>
                  <BoatFilter></BoatFilter>
                  <BoatList></BoatList>
            </LandingPageStyle>
        </LandingPageContent>


    );
  }





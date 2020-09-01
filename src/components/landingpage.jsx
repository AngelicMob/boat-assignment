import React from 'react';
import styled from "styled-components";
import BoatItem from './BoatList';


const LandingPageStyle = styled.div`
  width:100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  height: 29vh;

`;



const LandingPageContent = styled.div`

  height: 100%;

`;

export default function LandingPage() {


    return (

        <LandingPageContent>
            <LandingPageStyle>

                  <BoatItem></BoatItem>

            </LandingPageStyle>
        </LandingPageContent>


    );
  }





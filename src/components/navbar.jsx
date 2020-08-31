import React from 'react';
import styled from "styled-components";



const NavbarContent = styled.div`


  height: 0vh;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 0 0 153px 0;


`;

const NavbarText = styled.div`



`;


export default function NavBar() {


    return (

        <NavbarContent>

            <NavbarText>
                <div id ="logo-text">

                <div class ="logo">Boato</div> 

                        <li>Search Boats</li>
                        <li>Edit Boats</li>
                        <li>Add Boats</li>

                </div>
            </NavbarText>

        </NavbarContent>


    );
  }
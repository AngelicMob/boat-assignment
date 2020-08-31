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

.logo-text {

    display: flex;


}
.logo {

    font-size: 50px;

}

li {
    list-style: none;

}

`;


export default function NavBar({pageCurrent}) {


    return (

        <NavbarContent>

            <NavbarText>
                <div id ="logo-text">

                <div className ="logo">Boato </div>

                        <li onClick = {() => pageCurrent('landingpage')}>Search Boats</li>
                        <li onClick = {() => pageCurrent('editPage')}>Edit Boats</li>

                </div>
            </NavbarText>

        </NavbarContent>


    );
  }
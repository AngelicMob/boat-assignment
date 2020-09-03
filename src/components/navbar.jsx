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

    width: 100%;
    #logo-text {
        ul{
            display: flex;
            list-style: none;
            float: right;
            margin: 52px;
            font-size: 25px;
            li{
                margin-left: 15px;
                margin-right: 15px;
                cursor: pointer;
            }
            li:hover{

                border-bottom: 1px solid white;
                padding-bottom: 3px;

            }
        }

    }
    .logo {

        font-size: 50px;
        float: left;
        margin: 36px;
        margin-left: 96px;
        cursor: pointer;
    }
    .logo:hover{
        border-bottom: 1px solid white;
        padding-bottom: 3px;

    }

`;


export default function NavBar({pageCurrent}) {


    return (
        <NavbarContent>
            <NavbarText>
            <div className ="logo">Boato </div>
                <div id ="logo-text">
                    <ul>
                        <li onClick = {() => pageCurrent('landingpage')}>Search Boats</li>
                        <li onClick = {() => pageCurrent('addPage')}>Add/Delete Boats</li>
                    </ul>
                </div>
            </NavbarText>
        </NavbarContent>
    );
  }
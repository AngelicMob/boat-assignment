import React from 'react';
import styled from "styled-components";

const FilterContent = styled.div`
    width: 100%;
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

export default function BoatFilter() {

    return (
        <div>
            <FilterContent>
                <BoatInput placeholder="Search for Boat Model..."></BoatInput>
            </FilterContent>
        </div>
    )
}

/*Frontend part for the Delete Stuff*/
import React from 'react'
import styled from "styled-components";

const DeleteBackground = styled.div`

  box-shadow: 1px 4px 8px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  transition: 0.1s;
  padding: 25px;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 38vh;
  background-color: rgba(255,255,255,0.1);
  padding: 50px 50px 50px 50px;
  width: 57%;
  margin-left: 455px;

  h3 {
    color: white;
    font-size: 25px;
    text-decoration: underline;
    margin: -22px;
    margin-bottom: 39px;

  }

`;
const DeleteContent = styled.div`

    height: 385px;
    width: 1114px;
    margin: -39px;
    margin-top: 18px;
        overflow-x: hidden;
        overflow-y: scroll;
            ::-webkit-scrollbar {
            width: 5px;
        }

        ::-webkit-scrollbar-track {
            background: rgb(160 160 160);
        }
        ::-webkit-scrollbar-thumb {

            background: #3c3c3c;
        }
        .responsive-table {
  li {
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }
  .table-header {
    background-color: #95A5A6;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }
  .table-row {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
  }
  .col-1 {
    flex-basis: 10%;
  }
  .col-2 {
    flex-basis: 40%;
  }
  .col-3 {
    flex-basis: 25%;
  }
  .col-4 {
    flex-basis: 25%;
  }


`;

export default function DeleteBoat() {
    return (

        <DeleteBackground>
            <h3>Remove Boat</h3>

            <DeleteContent>
            <ul class="responsive-table">
                <li class="table-header">
                <div class="col col-1">Job Id</div>
                <div class="col col-2">Customer Name</div>
                <div class="col col-3">Amount Due</div>
                <div class="col col-4">Payment Status</div>
                </li>
                <li class="table-row">
                <div class="col col-1" data-label="Job Id">42235</div>
                <div class="col col-2" data-label="Customer Name">John Doe</div>
                <div class="col col-3" data-label="Amount">$350</div>
                <div class="col col-4" data-label="Payment Status">Pending</div>
                </li>
                <li class="table-row">
                <div class="col col-1" data-label="Job Id">42442</div>
                <div class="col col-2" data-label="Customer Name">Jennifer Smith</div>
                <div class="col col-3" data-label="Amount">$220</div>
                <div class="col col-4" data-label="Payment Status">Pending</div>
                </li>
                <li class="table-row">
                <div class="col col-1" data-label="Job Id">42257</div>
                <div class="col col-2" data-label="Customer Name">John Smith</div>
                <div class="col col-3" data-label="Amount">$341</div>
                <div class="col col-4" data-label="Payment Status">Pending</div>
                </li>
                <li class="table-row">
                <div class="col col-1" data-label="Job Id">42311</div>
                <div class="col col-2" data-label="Customer Name">John Carpenter</div>
                <div class="col col-3" data-label="Amount">$115</div>
                <div class="col col-4" data-label="Payment Status">Pending</div>
                </li>
            </ul>

            </DeleteContent>
        </DeleteBackground>

    )
}


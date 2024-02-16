import styled from "styled-components";
import React from 'react';

export const Front = () => {
  return (
    <FrontC>
      <MI>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLi-2G1-X7dbhm97tN3SUon-Aa1WOxW_Omig&usqp=CAU" alt="My_Image" />
      </MI>
      <CPR>
            <ul>
                <li>Basic Notes website where after login</li>
                <li>one can create a note </li>
                <li>Edit,Delete his/her notes.</li>
                <li>All rights reserved by Gauri Bidwai.</li>
                <li>Copyright &copy; 2024 My Notes App.</li>
            </ul>

      </CPR>
    </FrontC>
  );
};

const FrontC =styled.div`
 display: flex;
  height: 80vh;
`
const MI = styled.div`
/* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: center;
  
  `;


const CPR= styled.div`
flex: 1;
 background: url(https://spaces-cdn.clipsafari.com/g4h4b0wl3aoa23d6555vf4tfcgg7) center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0; 
  box-shadow: rgba(92, 72, 89, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  
        ul{
        text-align: left;
        font-size: 25px;
        line-height: 3.5ch;
        }
        li{
            color:rgb(92, 72, 89);
            list-style-type: none;
        }
`;
import React from 'react';
import Header from "./components/Header"
import Itinerary from "./components/Itinerary"
import "./App.css"

import { } from "react-beautiful-dnd";
import "@atlaskit/css-reset";
import styled from "styled-components";

const MapImg = styled.img`
    width: 700px
    
 
    
`;

const Container = styled.div`
    display: flex
    width: 75%
    flex-direction: column
    justify-content: center
   
`;


function App() {

    return (

        <>
            <Header />
            <Container>
            <MapImg src="map-no-params.png" alt="map">
              
            </MapImg>

            <Itinerary></Itinerary>
            </Container>


        </>
    );

}

export default App;





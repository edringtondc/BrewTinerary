import React from 'react';
import Header from "./components/Header"
import Itinerary from "./components/Itinerary"

import { } from "react-beautiful-dnd";
import "@atlaskit/css-reset";
import styled from "styled-components";

const MapImg = styled.img`
    width: 700px
    display: flex
    justify-content: center
`;


function App() {

    return (

        <>
            <Header />
            <MapImg src="map-no-params.png" alt="map">
              
            </MapImg>

            <Itinerary></Itinerary>


        </>
    );

}

export default App;





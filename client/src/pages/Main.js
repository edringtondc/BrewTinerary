import React from 'react';
import Itinerary from "../components/Itinerary"
import Header from "../components/Header"
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

const Main = () => {

    
    return (
        <>
        <Header />
        <Container>
            <MapImg src="map-no-params.png" alt="map">

            </MapImg>

            <Itinerary></Itinerary>
        </Container>
        </>
    )
}

export default Main;


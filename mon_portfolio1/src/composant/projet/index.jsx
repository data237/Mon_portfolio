import React from 'react';
import styled from 'styled-components'

const ImgprojetStyle = styled.img`
    width: 95%;
    height: 400px;
    border-radius: 7%;
    :hover {
        transform: scale(2);
        transition: transform 0.3s ease;
        cusor: pointer;
    }
@media (max-width: 360px ) {
    height: 200px;
    border-radius: 10%;
  }

  @media (min-width: 361px) and (max-width: 430px) {
    height: 200px;
    border-radius: 12%;
  }
    @media (min-width: 431px) and (max-width: 600px) {
    height: 300px;
    border-radius: 7%;
  }
  
`
const ProjetStyles = styled.div`
    width: 450px;
    gap:100px;
    margin-bottom: 3%;
`
const ButtonStyle = styled.button`
    border-radius: 15px;
    padding: 2%;
    margin-top: 2%;
    font-family: 'Jersey 10';
    font-weight: 400;
    font-size: 1.3em;
    color: rgba(255, 255, 255, 1);
    background-color: #2c85c8;
    border: none;
    &:hover {
        background-color: #8a2cd2;
        cursor: pointer;
        transition: background-color 0.8s ease;
    }
`

const ParaProjetStyle = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    color: rgba(0, 0, 0, 1);
    

`
const SpanProjetStyle = styled.span`
    font-family: 'Jersey 10';
    font-size: 1.3em;
    color:  #2c85c8;
`
function Projet({image, url, titreprojet, numeroprojet}){
    return(
        <ProjetStyles>  

            <ImgprojetStyle src={image}></ImgprojetStyle>
            <ParaProjetStyle> <SpanProjetStyle> projet {numeroprojet}</SpanProjetStyle>: {titreprojet} </ParaProjetStyle>
            <a href={url} target="_blank" rel="noopener noreferrer"> <ButtonStyle> voir le projet </ButtonStyle></a>

        </ProjetStyles>
    )
}

export default Projet
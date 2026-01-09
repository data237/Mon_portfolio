import styled from 'styled-components'

const Blurdiv = styled.div`
    width: 400px;
    height: 200px;
    color: #fff;
    background-color: rgba(124, 164, 194, 0.5);
    box-shadow: 10px 20px 20px 10px rgba(124, 164, 194, 0.6);
    box-shadow: 0px -20px 20px 0px rgba(124, 170, 204, 0.6);
    border-radius:10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
      @media (max-width: 360px) {
      width: 250px;
    height: 120px;
  }

  @media (min-width: 361px) and (max-width: 430px) {
     width: 250px;
    height: 120px;
  }
`
const NomStyle = styled.p`
    font-family: 'Jersey 10';
    font-weight: 400;
    font-size: 4.5em;
      @media (max-width: 360px) {
     font-size: 2.5em;
  }

  @media (min-width: 361px) and (max-width: 430px) {
    font-size: 2.5em;
  }
`
const PrenomNomStyle = styled.p`
    font-family: 'Jersey 10';
    font-weight: 300;
    font-size: 3.5em;
      @media (max-width: 360px) {
    font-size: 2em;
  }

  @media (min-width: 361px) and (max-width: 430px) {
     font-size: 2em;
  }
`
const TitreStyle = styled.p`
    font-weight: bold;
    font-size: 1.8em;
    color: rgba(255,0,0,0.7);                   
      @media (max-width: 360px) {                              
    font-size: 1.5em;
  }

  @media (min-width: 361px) and (max-width: 430px) {
     font-size: 1.5em;
  }
`
function BlurAccueil(){
    return(
        <>
            <Blurdiv>
                <NomStyle>MABOU DEFO</NomStyle>
                <PrenomNomStyle>RODRIGUE SOMMET</PrenomNomStyle>
                <TitreStyle>Analyste de Données</TitreStyle>
            </Blurdiv>
        </>
    )
}

export default BlurAccueil
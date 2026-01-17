import React from 'react';
import { useState } from 'react';
import styled from 'styled-components'

const H1 = styled.h1`
    font-family: 'poppins', sans-serif;
    font-weight: bold;
    font-size: 4em;
    color: white;
`
const H3 = styled.h3`
    font-family: 'poppins', sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    background: linear-gradient(90deg, #4FC3F7 0%, #FFFFFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    `

const AproposStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Choix = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border: 2px solid rgba(44, 133, 200, 1);
    border-radius: 100px;
    padding: 10px;
    background-color:  ${props => props.type === 'primary' ? 'rgba(44, 133, 200, 1)' : 'transparent'};
    color:  white;
    &:hover {
        background-color: rgba(44, 133, 200, 1);
        color: white;
        cursor: pointer;
    }
`
const AproposStyle2 = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
     @media (max-width: 360px ) {
    width: 80%;
  }

  @media (min-width: 361px) and (max-width: 430px) {
    width: 80%;
  }

  @media (min-width: 431px) and (max-width: 600px) {
   width: 80%;
  }

  @media (min-width: 601px) and (max-width: 835px) {
    width: 80%;
  }

  @media (min-width: 831px) and (max-width: 1024px) {
   width: 80%;
  }
`
const Paragraph1Style = styled.p`
    width: 60%;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.5em;
    text-align: justify;
    color: #E1E1E1;
     @media (max-width: 360px ) {
    font-size: 1.2em;
  }

  @media (min-width: 361px) and (max-width: 430px) {
    font-size: 1.2em;
  }

  @media (min-width: 431px) and (max-width: 600px) {
   font-size: 1.5em;
  }

  @media (min-width: 601px) and (max-width: 835px) {
    font-size: 1.8em;
  }

  @media (min-width: 831px) and (max-width: 1024px) {
    font-size: 1.8em;
  }
`

const Paragraph2Style = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.5em;
    text-align: justify;
    color: black;
     @media (max-width: 360px ) {
    font-size: 1em;
  }

  @media (min-width: 361px) and (max-width: 430px) {
    font-size: 1em;
  }
`




const ServicesStyle = styled.div`
     width: 400px;
     padding: 20px;
     margin-bottom: 2%;
     border: 2px solid rgba(44, 133, 200, 1);
     border-radius: 10%;
      @media (max-width: 360px ) {
    width: 300px;
  }

  @media (min-width: 361px) and (max-width: 430px) {
    width: 300px;
  }

  @media (min-width: 431px) and (max-width: 600px) {
   
  }

  @media (min-width: 601px) and (max-width: 835px) {
    
  }

  @media (min-width: 831px) and (max-width: 1024px) {
   
  }
`
const ServiceStyle = styled.div`
     display: flex;
     flex-wrap: wrap;
     justify-content: center;
     gap: 5%;
     margin-top: 4%;
`

function Apropos(){
     const [display, setDisplay] = useState(true);
    
    const handleclick = () => {
            
            setDisplay(!display);
        }


    return (
        <>
        <AproposStyle>
            <div style={{textAlign: 'center', paddingTop: '4%', paddingBottom: '4%'}}>
                  <H1> A propos de moi </H1>
                  <H3>Apprenez à me connaître</H3>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', gap: '50px', paddingBottom: '4%'}}> 
                <Choix onClick={() => handleclick()} type={display ? 'primary' : ''}>
                    <span>Data Analyste</span>
                </Choix>
                <Choix onClick={() => handleclick()} type={display ? '' : 'primary'}>
                    <span>Developpeur frontend</span>
                </Choix>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '4%'}}>
            {display ? (
                
                  
                    <Paragraph1Style>
                    <h3 style={{fontWeight: 'bold', paddingBottom: '30px'}}> Data Analyst | De la donnée brute à la décision stratégique. </h3>  
                    <p style={{paddingBottom: '15px'}}>
                     Spécialiste des chiffres par formation (Économétrie & Statistiques) 
                    et développeur par passion, j'aide les entreprises à transformer leurs 
                    données en leviers de croissance.
                    </p>
                    <p style={{paddingBottom: '15px'}}>
                        Mon profil hybride me permet non seulement d'analyser des modèles 
                    statistiques complexes, mais aussi de concevoir des outils de visualisation 
                    sur mesure. Je ne me contente pas d'extraire des chiffres ; je raconte une 
                    histoire visuelle et interactive pour faciliter la prise de décision.
                    </p>
                     
                    <span style={{fontWeight: 'bold'}}> Expertise </span>  : Analyse de données, Modélisation, Data Visualization, SQL, Python.
                    </Paragraph1Style>) : (
                    <Paragraph1Style>
                    <h3 style={{fontWeight: 'bold', paddingBottom: '30px'}}> Développeur Frontend | Passionné par l'interface et la logique. </h3>  
                    <p style={{paddingBottom: '15px'}}>
                          Issu d'un parcours initial en statistiques et économétrie, j'ai choisi de 
                    mettre ma rigueur analytique au service du développement web. 
                    Mon approche est simple : créer des interfaces fluides, accessibles et 
                    performantes.
                    </p>
                    <p style={{paddingBottom: '15px'}}> 
                        Ma force ? Une capacité naturelle à structurer le code et à résoudre des problèmes 
                    logiques complexes, héritée de mon background scientifique. Je transforme des 
                    idées créatives en composants réutilisables et en expériences utilisateur 
                    impeccables.
                    </p>
                     
                    <span style={{fontWeight: 'bold'}}> Stack de prédilection </span>  : HTML/CSS/JS, React, Tailwind CSS. 
                    </Paragraph1Style>)
                    }
            </div>
        </AproposStyle>
        </>
    )
}

export default Apropos
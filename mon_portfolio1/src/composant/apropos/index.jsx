import React from 'react';
import styled from 'styled-components'
import imagemabou from '../../image/mabou.jpg'


const ImgmabouStyle = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 100%;
    overflow: hidden;
`
const Img = styled.img`
    height: 350px;
`
const AproposStyle = styled.div`
   background-color: white; 
`
const AproposStyle1 = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px; 
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
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 2.1em;
    text-align: justify;
    color: black;
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

const H1Style = styled.h1`
    font-family: 'Jersey 10';
    font-weight: 400;
    font-size: 80px;
    color: rgba(44, 133, 200, 1);
    margin-bottom: 4%;
    text-align: center;
    padding-top: 4%;
     @media (max-width: 360px ) {
    font-size: 58px;
  }

  @media (min-width: 361px) and (max-width: 430px) {
    font-size: 58px;
  }
`

const H2Style = styled.h2`
    font-family: 'Jersey 10';
    font-weight: 400;
    font-size: 64px;
    color: rgba(44, 133, 200, 1);
    margin-bottom: 20px;
    text-align: center;
     @media (max-width: 360px ) {
    font-size: 44px;
  }

  @media (min-width: 361px) and (max-width: 430px) {
    font-size: 44px;
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
    return (
        <>
        <AproposStyle>
            <H1Style>A PROPOS DE MOI</H1Style>
            <AproposStyle1>
                <AproposStyle2>
              
                        <ImgmabouStyle><Img src={imagemabou}></Img></ImgmabouStyle>
                
                <Paragraph1Style> 
                    Bonjour ! Je m'appelle MABOU DEFO RODRIGUE SOMMET et je suis Data Analyst.
                    Passionné par les chiffres, les tendances et les histoires que racontent les données, 
                    j’aide les entreprises à transformer des données brutes en informations exploitables 
                    pour éclairer leurs décisions stratégiques. Mon objectif est de trouver du sens dans 
                    les données et de contribuer à la prise de décision par des analyses claires, 
                    précises et bien visualisées.
                </Paragraph1Style>
            
                </AproposStyle2>
            </AproposStyle1>
           
            <ServiceStyle>
                
                <ServicesStyle>
                    <H2Style> Ce que je fais </H2Style>
                    <Paragraph2Style> 
                        En tant que Data Analyst, j’interviens à toutes les étapes de l’analyse :
                        <br></br> - Collecte de données (via des bases SQL, API, fichiers Excel/CSV, etc.)
                        <br></br> - Nettoyage et préparation des données pour garantir leur qualité
                        <br></br> - Analyse exploratoire pour identifier des tendances, anomalies ou corrélations
                        <br></br> - Création de visualisations percutantes via Tableau, Power BI ou Python
                        <br></br> - Interprétation des résultats et recommandations orientées business
                    </Paragraph2Style>
                </ServicesStyle>
                <ServicesStyle>
                    <H2Style> Mes outils </H2Style>
                    <Paragraph2Style> 
                        - Langages: Python (pandas, numpy, matplotlib, seaborn), SQL<br></br>
                        - Visualisation: Tableau, Power BI, Excel <br></br>
                        - Traitement de données: pandas, Excel, OpenRefine<br></br>
                        - Outils complémentaires: Jupyter Notebook, Git, Google Sheets
                    </Paragraph2Style>
                </ServicesStyle>
                <ServicesStyle>
                    <H2Style> Mes objectifs </H2Style>
                    <Paragraph2Style> 
                      
                             Je cherche à travailler sur des projets où je peux :
                             <br></br> - Apporter de la valeur par la donnée 
                             <br></br> - Répondre à des problèmes concrets grâce à l’analyse 
                             <br></br> - Collaborer avec des équipes métiers pour transformer les données en action 
                       
                        
                    </Paragraph2Style>
                </ServicesStyle>
            </ServiceStyle>
        </AproposStyle>
        </>
    )
}

export default Apropos
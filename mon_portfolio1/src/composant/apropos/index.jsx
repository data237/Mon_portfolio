import React from 'react';
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
    width: 40%;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 2.1em;
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
    return (
        <>
        <AproposStyle>
            <div style={{textAlign: 'center', paddingTop: '4%', paddingBottom: '4%'}}>
                  <H1> A propos de moi </H1>
                  <H3>Apprenez à me connaître</H3>
            </div>

            <Paragraph1Style> 
                Bonjour ! Je m'appelle MABOU DEFO RODRIGUE SOMMET et je suis Data Analyst.
                Passionné par les chiffres, les tendances et les histoires que racontent les données, 
                j’aide les entreprises à transformer des données brutes en informations exploitables 
                pour éclairer leurs décisions stratégiques. Mon objectif est de trouver du sens dans 
                les données et de contribuer à la prise de décision par des analyses claires, 
                précises et bien visualisées.
            </Paragraph1Style>   
           
            <ServiceStyle>
                
                <ServicesStyle>
                    <H3> Ce que je fais </H3>
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
                    <H3> Mes outils </H3>
                    <Paragraph2Style> 
                        - Langages: Python (pandas, numpy, matplotlib, seaborn), SQL<br></br>
                        - Visualisation: Tableau, Power BI, Excel <br></br>
                        - Traitement de données: pandas, Excel, OpenRefine<br></br>
                        - Outils complémentaires: Jupyter Notebook, Git, Google Sheets
                    </Paragraph2Style>
                </ServicesStyle>
                <ServicesStyle>
                    <H3> Mes objectifs </H3>
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
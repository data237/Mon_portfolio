 import React from 'react';
import styled from 'styled-components'
import Projet from '../projet'
import projet1 from '../../image/projet1.jpg'
import projet2 from '../../image/projet2.jpg'
import projet3 from '../../image/projet3.jpg'
import projet4 from '../../image/projet4.jpg'
import projet5 from '../../image/projet5.jpg'
import projet6 from '../../image/projet6.jpg'


const projets =[ {
    image: projet1,
    url:"https://github.com/data237/12-projet-d-analyses-de-donn-es/tree/main/projet_1",
    titreprojet: "Suivi des performances des ventes avec un tableau de bord (Excel).",
    numeroprojet: 1 
},
{
    image: projet2,
    url:"https://github.com/data237/12-projet-d-analyses-de-donn-es/tree/main/projet_2",
    titreprojet: "Analyse des performances des employés (Python)",
    numeroprojet: 2 
},
{
    image: projet3,
    url:"https://github.com/data237/12-projet-d-analyses-de-donn-es/tree/main/projet_3",
    titreprojet: "Identifier les facteurs influençant les performances commerciales (Python)",
    numeroprojet: 3 
},
{
    image: projet4,
    url:"https://github.com/data237/12-projet-d-analyses-de-donn-es/tree/main/projet_4",
    titreprojet: "Analyse statistique des écarts de performance entre départements (Python) ",
    numeroprojet: 4 
},
{
    image: projet5,
    url:"https://github.com/data237/12-projet-d-analyses-de-donn-es/tree/main/projet_5",
    titreprojet: " Automatiser les rapports de ventes avec SQL",
    numeroprojet: 5 
},
{
    image: projet6,
    url:"https://github.com/data237/12-projet-d-analyses-de-donn-es/tree/main/projet_7",
    titreprojet: "Création d'un tableau de bord interactif (Power BI)",
    numeroprojet: 6 
}]

const ProjetStyles = styled.div`
    

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
    font-size: 60px;
  }

  @media (min-width: 361px) and (max-width: 430px) {
    font-size: 60px;
  }
`
const Rangement = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap:5%;
    padding: 0% 10%;
`
function Projets(){
    return(
        <ProjetStyles>
            <H1Style> MES PROJETS </H1Style>
            <Rangement>
                {projets.map(projet => (
            <Projet key={projet.numeroprojet} {...projet} />
                ))}
            </Rangement>
            
        </ProjetStyles>
    )
}
export default Projets
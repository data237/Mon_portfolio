import React, { useState } from 'react';
import styled from 'styled-components';
import Projet from '../projet'
import projet1 from '../../image/projet1.jpg'
import projet2 from '../../image/projet2.jpg'
import projet3 from '../../image/projet3.jpg'
import projet4 from '../../image/projet4.jpg'
import projet5 from '../../image/projet5.jpg'
import projet6 from '../../image/projet6.jpg'


const projets =[ {
    categorie : 'data',
    image: projet1,
    url:"https://github.com/data237/12-projet-d-analyses-de-donn-es/tree/main/projet_1",
    titreprojet: "Suivi des performances des ventes avec un tableau de bord (Excel).",
    numeroprojet: 'Projet 1' 
},
{
    categorie : 'data',
    image: projet2,
    url:"https://github.com/data237/12-projet-d-analyses-de-donn-es/tree/main/projet_2",
    titreprojet: "Analyse des performances des employés (Python)",
    numeroprojet: 'Projet 2' 
},
{
    categorie : 'data',
    image: projet3,
    url:"https://github.com/data237/12-projet-d-analyses-de-donn-es/tree/main/projet_3",
    titreprojet: "Identifier les facteurs influençant les performances commerciales (Python)",
    numeroprojet: 'Projet 3' 
},
{
    categorie : 'data',
    image: projet4,
    url:"https://github.com/data237/12-projet-d-analyses-de-donn-es/tree/main/projet_4",
    titreprojet: "Analyse statistique des écarts de performance entre départements (Python) ",
    numeroprojet: 'Projet 4'
},
{
    categorie : 'data',
    image: projet5,
    url:"https://github.com/data237/12-projet-d-analyses-de-donn-es/tree/main/projet_5",
    titreprojet: " Automatiser les rapports de ventes avec SQL",
    numeroprojet: 'Projet 5' 
},
{   
    categorie : 'data',
    image: projet6,
    url:"https://github.com/data237/12-projet-d-analyses-de-donn-es/tree/main/projet_7",
    titreprojet: "Création d'un tableau de bord interactif (Power BI)",
    numeroprojet: 'Projet 6' 
}]

const SectionContainer = styled.div`
  padding: 80px 5%;
  background-color: #000;
  color: white;
  min-height: 100vh;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const H1 = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: clamp(2.5rem, 7vw, 4rem);
  font-weight: bold;
  color: white;
  margin: 0;
`;

const H3 = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  background: linear-gradient(90deg, #4FC3F7 0%, #FFFFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FilterBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 60px;
  flex-wrap: wrap;
`;

const Choix = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;
  border: 2px solid #2c85c8;
  border-radius: 100px;
  cursor: pointer;
  transition: 0.3s;
  background-color: ${props => props.$active ? '#2c85c8' : 'transparent'};
  
  &:hover {
    background-color: #2c85c8;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  /* Grille intelligente : min 300px par carte, remplit l'espace */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
  justify-items: center; /* Centre les cartes dans leurs cellules */
`;
function Projets() {
  const [filter, setFilter] = useState('data'); // 'data' ou 'frontend'

  // On filtre les projets selon le bouton cliqué
  const filteredProjets = projets.filter(p => p.categorie === filter);

  return (
    <SectionContainer id="Projets">
      <Header>
        <H1>Mes Projets</H1>
        <H3>Quelques travaux récents</H3>
      </Header>

      <FilterBar>
        <Choix $active={filter === 'data'} onClick={() => setFilter('data')}>
          <span>Data Analyste</span>
        </Choix>
        <Choix $active={filter === 'frontend'} onClick={() => setFilter('frontend')}>
          <span>Développeur Frontend</span>
        </Choix>
      </FilterBar>

      <GridWrapper>
        {filteredProjets.map((projet, index) => (
          <Projet key={index} {...projet} />
        ))}
      </GridWrapper>
    </SectionContainer>
  );
}

export default Projets;
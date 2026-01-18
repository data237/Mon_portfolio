import React, { useState } from 'react';
import styled from 'styled-components';

// --- STYLED COMPONENTS ---

const AproposContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 20px;
  background-color: #000; /* Assure la continuité du fond noir */
  color: white;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const H1 = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: clamp(2rem, 8vw, 4rem); /* Taille fluide entre 2rem et 4rem */
  margin: 0;
`;

const H3 = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: clamp(1rem, 4vw, 1.5rem);
  background: linear-gradient(90deg, #4fc3f7 0%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 10px;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap; /* Important pour mobile */
`;

const Choix = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  height: 50px;
  border: 2px solid rgba(44, 133, 200, 1);
  border-radius: 100px;
  padding: 0 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  
  background-color: ${props => props.$active ? 'rgba(44, 133, 200, 1)' : 'transparent'};
  color: white;

  &:hover {
    background-color: rgba(44, 133, 200, 1);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%; /* Boutons pleine largeur sur très petit mobile */
  }
`;

const ContentBox = styled.div`
  width: 100%;
  max-width: 800px; /* Limite la largeur sur PC pour la lisibilité */
  text-align: justify;
  animation: fadeIn 0.5s ease-in;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ParagraphStyle = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 1.15rem;
  line-height: 1.8;
  color: #e1e1e1;

  h3 {
    color: #4fc3f7;
    margin-bottom: 20px;
    font-size: 1.4rem;
  }

  p {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left; /* Plus lisible sur mobile que "justify" */
  }
`;

// --- COMPOSANT ---

function Apropos() {
  const [activeTab, setActiveTab] = useState('data');

  return (
    <AproposContainer id="Apropos">
      <TitleSection>
        <H1>À propos de moi</H1>
        <H3>Apprenez à me connaître</H3>
      </TitleSection>

      <TabContainer>
        <Choix 
          $active={activeTab === 'data'} 
          onClick={() => setActiveTab('data')}
        >
          Data Analyste
        </Choix>
        <Choix 
          $active={activeTab === 'dev'} 
          onClick={() => setActiveTab('dev')}
        >
          Développeur Frontend
        </Choix>
      </TabContainer>

      <ContentBox>
        {activeTab === 'data' ? (
          <ParagraphStyle>
            <h3>Data Analyst | De la donnée brute à la décision stratégique.</h3>
            <p>
              Spécialiste des chiffres par formation (Économétrie & Statistiques)
              et développeur par passion, j'aide les entreprises à transformer leurs
              données en leviers de croissance.
            </p>
            <p>
              Mon profil hybride me permet non seulement d'analyser des modèles
              statistiques complexes, mais aussi de concevoir des outils de visualisation
              sur mesure.
            </p>
            <strong>Expertise :</strong> Analyse de données, Modélisation, Data Visualization, SQL, Python.
          </ParagraphStyle>
        ) : (
          <ParagraphStyle>
            <h3>Développeur Frontend | Passionné par l'interface et la logique.</h3>
            <p>
              Issu d'un parcours en statistiques, j'ai choisi de mettre ma rigueur 
              analytique au service du développement web. Mon approche : créer des 
              interfaces fluides, accessibles et performantes.
            </p>
            <p>
              Ma force ? Une capacité naturelle à résoudre des problèmes logiques 
              complexes. Je transforme des idées créatives en composants réutilisables.
            </p>
            <strong>Stack de prédilection :</strong> HTML/CSS/JS, React, Tailwind CSS, Styled Components.
          </ParagraphStyle>
        )}
      </ContentBox>
    </AproposContainer>
  );
}

export default Apropos;
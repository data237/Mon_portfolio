import React from 'react';
import styled from 'styled-components';
import Diplome from './diplome';
import imgdiplome from '../../image/diplome-removebg-preview.png';

// --- STYLES ---

const CertifStyle = styled.section`
  padding: 80px 5%;
  background-color: #000;
  min-height: 100vh;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const H1 = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: clamp(2.5rem, 8vw, 4rem);
  color: white;
  margin: 0;
`;

const H3 = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  background: linear-gradient(90deg, #4FC3F7 0%, #FFFFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  /* Crée des colonnes d'au moins 300px, s'adapte automatiquement */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  justify-items: center; /* Centre les cartes horizontalement dans la cellule */
  max-width: 1200px;
  margin: 0 auto; /* Centre la grille entière sur les très grands écrans */
`;




const diplomes = [{
    image: imgdiplome,
    intitule: "Développement d'application web (frontend) avec React.js",
    titre: 'Ingénieur',
    details: "Cette formation intensive à l'Institut PKFOKAM of Excelence/KFokam 48 m’a permis de me spécialiser dans la création d'interfaces utilisateur modernes, ergonomiques et performantes. Je maîtrise l’écosystème JavaScript (ES6+) et les frameworks de pointe, notamment React.js, complétés par l’utilisation de bibliothèques de composants professionnels comme Ant Design. Mon expertise couvre l'ensemble de l'intégration frontend, de la structure HTML5 sémantique à la stylisation avancée en CSS3/Sass, garantissant des applications web fluides et réactives. L'accent a été mis sur l'expérience utilisateur (UX) et la communication avec le backend via la consommation d'APIs REST. À travers des projets concrets, j'ai appris à gérer des états applicatifs complexes, à optimiser les performances de rendu et à assurer une compatibilité multi-support (Responsive Design). Cette compétence technique me permet aujourd'hui de transformer des concepts visuels en solutions interactives robustes, tout en respectant les meilleures pratiques de développement."
},
{
    image: imgdiplome,
    intitule: "Modélisation Mathématique Appliquée à l'Economie et à la Finance",
    titre: 'Master',
    details: "Ce Master obtenu L'Ecole Nationale Supérieure Polytechnique de Yaoundé m’a permis de développer une expertise de pointe en économétrie et en statistique appliquée, avec une spécialisation dans la modélisation de phénomènes économiques et financiers complexes. J’ai acquis une maîtrise approfondie des modèles de régression, de l'analyse des séries temporelles et de l'économétrie des données de panel, me permettant d’appréhender des structures de données variées. Cette formation rigoureuse m'a préparé à valider des hypothèses économiques par des tests statistiques robustes et à modéliser l'incertitude pour anticiper les tendances de marché. Sur le plan technique, je mets en œuvre ces modèles complexes via des langages d'analyse de données tels que Python et R. Ma capacité à manipuler de larges jeux de données, à assurer la qualité des traitements statistiques et à interpréter des résultats économétriques me permet de produire des analyses quantitatives de haute précision. Ce profil, alliant rigueur mathématique et outils modernes de Data Science, me permet de transformer des données brutes en insights stratégiques pour soutenir la prise de décision en environnement financier ou économique."
},
{
    image: imgdiplome,
    intitule: "Probabilités et Statistiques",
    titre: 'Licence',
    details: "Cette licence obtenu à l'Université de Yaoundé 1 / Departement de Mathématiques a posé les fondements de mon expertise analytique en me fournissant un socle mathématique rigoureux. J'y ai approfondi la théorie des probabilités, les statistiques inférentielles, les tests d'hypothèses et l'analyse de données. Ce cursus académique a développé ma capacité à modéliser l'aléatoire et à structurer des raisonnements logiques face à des jeux de données brutes, constituant la base indispensable de toute démarche scientifique de données.En complément de la théorie, j'ai été formé aux méthodes d'échantillonnage et à l'interprétation de corrélations statistiques, me permettant de dégager des tendances significatives à partir de populations complexes. Cette formation a forgé mon esprit critique et ma méthodologie de travail, me rendant apte à garantir la fiabilité des données et la pertinence des analyses statistiques avant leur exploitation dans des outils de visualisation ou d'intelligence artificielle."
},
{
   image: imgdiplome,
    intitule: "Analyse de données avec Python",
    titre: 'Certification Professionnelle Coursera',
    details: 'Cette certification professionnelle délivrée par IBM valide ma maîtrise du cycle complet de l\'analyse de données, de l\'acquisition à la restitution visuelle. À travers un programme intensif de neuf cours, j\'ai consolidé mes compétences techniques sur Python (Pandas, Numpy) pour le traitement des données, l\'utilisation avancée de SQL pour la gestion de bases de données relationnelles, ainsi que l\'exploitation de Microsoft Excel et d\'IBM Cognos Analytics pour la création de rapports décisionnels complexes.L\'aboutissement de ce cursus a été la réalisation d\'un projet de fin d\'études (Capstone) axé sur l\'analyse des tendances du marché de l\'emploi technologique. J\'y ai orchestré l\'ensemble du processus : de l\'extraction de données via Web Scraping et APIs, au nettoyage et à l\'analyse exploratoire avec Pandas, jusqu\'à la conception d\'un tableau de bord interactif. Ce projet démontre ma capacité concrète à transformer des données brutes en insights actionnables pour orienter des décisions stratégiques réelles.'
}]


function Certification() {
  return (
    <CertifStyle id="Education">
      <Header>
        <H1>Formations</H1>
        <H3>Mon Parcours Académique & Professionnel</H3>
      </Header>

      <GridContainer>
        {diplomes.map((certif, index) => (
          <Diplome key={index} {...certif} />
        ))}
      </GridContainer>
    </CertifStyle>
  );
}

export default Certification;
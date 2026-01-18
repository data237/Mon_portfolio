import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

const { Meta } = Card;

// Wrapper pour surcharger le style de la Card AntD
const StyledCard = styled(Card)`
  width: 100%; /* Prend toute la largeur du container parent */
  max-width: 350px; /* Mais ne dépasse pas 350px */
  margin-bottom: 20px;
  
  .ant-card-cover img {
    height: 200px;
    object-fit: cover; /* Évite de déformer l'image */
  }

  @media (max-width: 480px) {
    max-width: 100%; /* Sur petit mobile, la carte prend toute la largeur */
  }
`;

function Projet({ image, url, titreprojet, numeroprojet }) {
  return (
    <StyledCard
      hoverable
      cover={<img alt={titreprojet} src={image} />}
      actions={[
        <a href="/documents/mon-fichier.pdf" download>Télécharger</a>,
        <a href={url} target="_blank" rel="noopener noreferrer">Voir le code</a>
      ]}
    >
      <Meta title={numeroprojet} description={titreprojet} />
    </StyledCard>
  );
}

export default Projet;
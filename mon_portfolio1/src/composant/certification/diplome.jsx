import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Button, Modal } from 'antd';

const { Meta } = Card;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 320px;
  margin-bottom: 20px;
  
  .ant-card-cover img {
    height: 180px;
    object-fit: contain; /* Utilisation de contain pour ne pas couper le logo du diplôme */
    background-color: #f5f5f5; /* Fond léger pour faire ressortir le PNG */
    padding: 10px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

function Diplome({ image, details, titre, intitule }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <StyledCard
        hoverable
        cover={<img alt={titre} src={image} draggable={false} />}
        actions={[
          <Button type="primary" onClick={() => setIsModalOpen(true)} ghost>
            Lire la description
          </Button>
        ]}
      >
        <Meta title={titre} description={intitule} />
      </StyledCard>

      <Modal
        title={titre}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button key="close" onClick={() => setIsModalOpen(false)}>
            Fermer
          </Button>
        ]}
        width={700} // Largeur confortable sur PC
      >
        <div style={{ textAlign: 'justify', lineHeight: '1.6', fontSize: '1.1em' }}>
          <p>{details}</p>
        </div>
      </Modal>
    </>
  );
}

export default Diplome;
import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import rectangle from '../../image/Rectangle 3.png';
import imagemabou from '../../image/mabou.jpg';

const AcceuilStyle = styled.div`
    padding: 100px 20px; /* Padding fixe plus simple à gérer */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 60px 15px;
    }
`;

const GrilleStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Centre parfaitement l'image de fond */
    width: 90vw;
    z-index: -1;
    opacity: 0.6; /* Optionnel : pour que le texte ressorte mieux sur mobile */

    img {
        width: 100%;
        max-width: 1200px; /* Évite que la grille devienne trop immense sur écran géant */
    }

    @media (max-width: 768px) {
        width: 150vw; /* On agrandit la grille sur mobile pour un effet de texture */
    }
`;

const ImgmabouStyle = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid #4FC3F7; /* Ajout d'une bordure pour le style */
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        width: 180px;
        height: 180px;
    }
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; /* Important pour ne pas déformer votre photo */
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    text-align: center;
    z-index: 1;
`;

const H1 = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 4rem;
    color: white;
    margin: 0;
    line-height: 1.1;

    @media (max-width: 768px) {
        font-size: 2.5rem; /* Réduction pour mobile */
    }
    
    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

const H3 = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1.5rem;
    margin: 0;
    background: linear-gradient(90deg, #4FC3F7 0%, #FFFFFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

function Acceuil() {
    return (
        <AcceuilStyle id="Acceuil">
            <GrilleStyle>
                <img src={rectangle} alt="Background Grid" />
            </GrilleStyle>
            
            <ContentWrapper>
                <ImgmabouStyle>
                    <Img src={imagemabou} alt="Mabou Sommet" />
                </ImgmabouStyle>
                
                <div>
                    <H1>MABOU Sommet</H1>
                    <H3>Développeur Frontend & Data Analyste</H3>
                </div>

                <Button 
                    type="primary" 
                    size="large" 
                    style={{ borderRadius: '25px', padding: '0 40px' }}
                >
                    Contactez Moi
                </Button>
            </ContentWrapper>
        </AcceuilStyle>
    );
}

export default Acceuil;
import React from 'react';
import styled from 'styled-components';
import logowathsapp from '../../image/wathsapp.png';
import logolinkedin from '../../image/LinkedIn.png';
import logogmail from '../../image/gmail-white.svg';

const ContactStyle = styled.footer`
  padding: 2rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(200, 200, 200, 0.2);
  background-color: #000;
  
  /* Responsive : on empile les éléments sur mobile */
  @media (max-width: 768px) {
    flex-direction: column-reverse; /* Logos en haut, copyright en bas */
    gap: 20px;
    text-align: center;
  }
`;

const Copyright = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  color: #888;
  margin: 0;
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const LogoAnchor = styled.a`
  transition: transform 0.3s ease, filter 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    transform: translateY(-3px);
    filter: brightness(1.2);
  }
`;

const LogoStyle = styled.img`
  width: 25px;
  height: 25px;

  @media (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <ContactStyle>
      <Copyright>
        © {currentYear} MABOUDATA. Tous droits réservés.
      </Copyright>

      <SocialContainer>
        {/* WhatsApp */}
        <LogoAnchor 
          href="https://wa.me/2376XXXXXXXX" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <LogoStyle src={logowathsapp} alt="WhatsApp" />
        </LogoAnchor>

        {/* LinkedIn */}
        <LogoAnchor 
          href="https://www.linkedin.com/in/votre-profil" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <LogoStyle src={logolinkedin} alt="LinkedIn" />
        </LogoAnchor>

        {/* Gmail */}
        <LogoAnchor 
          href="mailto:votre-email@gmail.com"
        >
          <LogoStyle src={logogmail} alt="Gmail" />
        </LogoAnchor>
      </SocialContainer>
    </ContactStyle>
  );
}

export default Contact;
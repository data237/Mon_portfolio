import React, { useState } from 'react';
import { Button, Drawer, Grid } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import imageheader from '../../image/2.png';

const { useBreakpoint } = Grid;

// --- STYLED COMPONENTS ---

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  padding: 0 5%;
  width: 100%;
  height: 70px; /* Hauteur fixe plus propre */
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2.5em;
  align-items: center;

  @media (max-width: 992px) {
    display: none; /* Cache les liens sur tablette/mobile */
  }
`;

const FontStyle = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  color: white;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #8a2cd2;
  }
`;

const MobileMenuBtn = styled(Button)`
  display: none;
  @media (max-width: 992px) {
    display: block;
  }
`;

const DesktopButton = styled.div`
  @media (max-width: 992px) {
    display: none;
  }
`;

// --- COMPOSANT PRINCIPAL ---

function Header() {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  // Liste des liens pour éviter la répétition
  const menuItems = [
    { label: 'ACCUEIL', to: 'Acceuil' },
    { label: 'A PROPOS', to: 'Apropos' },
    { label: 'PROJETS', to: 'Projets' },
    { label: 'FORMATIONS', to: 'Education' },
  ];

  return (
    <HeaderContainer>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={imageheader} 
          alt="Logo" 
          style={{ width: '40px', height: '40px', borderRadius: '100%' }} 
        />
      </div>

      {/* Navigation Desktop */}
      <NavLinks>
        {menuItems.map((item) => (
          <Link key={item.to} to={item.to} smooth={true} duration={500}>
            <FontStyle>{item.label}</FontStyle>
          </Link>
        ))}
      </NavLinks>

      {/* Bouton Contact (Desktop) */}
      <DesktopButton>
        <Button type="primary" ghost>
          Contactez Moi
        </Button>
      </DesktopButton>

      {/* Menu Hamburger (Mobile) */}
      <MobileMenuBtn 
        type="text" 
        icon={<MenuOutlined style={{ color: 'white', fontSize: '24px' }} />} 
        onClick={showDrawer}
      />

      {/* Drawer Mobile */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        open={open}
        styles={{ body: { backgroundColor: '#000' }, header: { backgroundColor: '#000' } }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {menuItems.map((item) => (
            <Link key={item.to} to={item.to} smooth={true} duration={500} onClick={onClose}>
              <FontStyle style={{ fontSize: '1.2em' }}>{item.label}</FontStyle>
            </Link>
          ))}
          <Button type="primary" ghost block>
            Contactez Moi
          </Button>
        </div>
      </Drawer>
    </HeaderContainer>
  );
}

export default Header;
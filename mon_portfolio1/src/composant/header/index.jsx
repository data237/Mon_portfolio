import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-scroll'
import styled from 'styled-components'
import imageheader from '../../image/2.png'

const HeaderStyle =styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000000;
    padding: 10px 10px;
    width: 100%;
    height: 1%;
    position: sticky;
    top: 0;
    z-index:100;
`
const Header1Style = styled.div`
    display: flex;
    justify-content: center;
    
     @media (max-width: 360px ) {
    
  }

  @media (min-width: 361px) and (max-width: 430px) {
    font-size: 2em;
  }

  @media (min-width: 431px) and (max-width: 600px) {
   font-size: 2em;
  }

  @media (min-width: 601px) and (max-width: 835px) {
    font-size: 2.5em;
  }

  @media (min-width: 831px) and (max-width: 1024px) {
    font-size: 3em;
  }
    `
const Header2Style = styled.div`
    display: flex;
    gap: 5em;
    align-items: center;
    white-space: nowrap;
    flex-wrap: nowrap;
  
    
     :hover {
    color: #8a2cd2;
    cursor: pointer;
    transition: color 0.3s ease;
    }

    `


const FontStyle = styled.div`
    font-family: "Montserrat" ;
    font-weight: 00;
    font-size: 1.5em;
    color: white;
  @media (max-width: 360px ) {
    font-size: 1em;
  }

  @media (min-width: 361px) and (max-width: 430px) {
    font-size: 1em;
  }

  @media (min-width: 431px) and (max-width: 600px) {
   font-size: 1.5em;
  }

  @media (min-width: 601px) and (max-width: 835px) {
    font-size: 2em;
  }

  @media (min-width: 831px) and (max-width: 1024px) {
    font-size: 2em;
  }
`
function Header(){
    return (
        <HeaderStyle>
            <Header1Style>
                 <img src={imageheader} alt="Header Image" style={{ width: '30px', height: '30px', borderRadius: '100%' }}></img>
            </Header1Style>
            <Header2Style>
                <Link to="Acceuil" smooth={true} duration={500}><FontStyle>ACCUEIL</FontStyle></Link>
                <Link to="Apropos" smooth={true} duration={500}><FontStyle>A PROPOS</FontStyle></Link>
                <Link to="Projets" smooth={true} duration={500}><FontStyle>PROJETS</FontStyle></Link>
                <Link to="Education" smooth={true} duration={500}><FontStyle>EDUCATION</FontStyle></Link>
                
            </Header2Style>
            <div>
              <Button type="primary" ghost>
                Contactez Moi
              </Button>
            </div>
            
        </HeaderStyle>
    );
}
export default Header
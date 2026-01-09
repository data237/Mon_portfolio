import React from 'react';
import { Link } from 'react-scroll'
import styled from 'styled-components'
import imageheader from '../../image/6146b09d106eeae94a89a1e96468a28cdf95d40a.jpg'

const HeaderStyle =styled.div`
    width: 100%;
    height: 1%;
    position: sticky;
    top: 0;
    z-index:100;
`
const Header1Style = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Jersey 10';
    font-weight: bold;
    font-size: 5em;
    height: .3%;
    color: white;
    background-image: url(${imageheader});
    background-size: cover;
    background-position: center;
     @media (max-width: 360px ) {
    font-size: 2em;
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
    justify-content: center;
    gap: 2%;
    background-color:#2c85c8;
     :hover {
    color: #8a2cd2;
    cursor: pointer;
    transition: color 0.3s ease;
    }

    `

const FontStyle = styled.div`
    font-family: "Jersey 10" ;
    font-weight: 00;
    font-size: 2em;
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
                  MON PORTFOLIO
            </Header1Style>
            <Header2Style>
                <Link to="Acceuil" smooth={true} duration={500}><FontStyle>ACCUEIL</FontStyle></Link>
                <Link to="Apropos" smooth={true} duration={500}><FontStyle>A PROPOS</FontStyle></Link>
                <Link to="Projets" smooth={true} duration={500}><FontStyle>PROJETS</FontStyle></Link>
                <Link to="Certification" smooth={true} duration={500}><FontStyle>CERTIFICATION</FontStyle></Link>
                <Link to="Contact" smooth={true} duration={500}><FontStyle>CONTACT</FontStyle></Link>
            </Header2Style>
        </HeaderStyle>
    );
}
export default Header
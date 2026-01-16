import React from 'react';
import styled from 'styled-components'
import logowathsapp from '../../image/wathsapp.png'
import logolinkedin from '../../image/LinkedIn.png'
import logogmail from '../../image/gmail-white.svg'


const ContactStyle = styled.div`
    padding-bottom: 2%;
`

const H1Style = styled.h1`
    font-family: 'Jersey 10';
    font-weight: 400;
    font-size: 80px;
    color: rgba(44, 133, 200, 1);
    margin-bottom: 4%;
    text-align: center;
    padding-top: 2%;
     @media (max-width: 360px ) {
    font-size: 60px;
  }

  @media (min-width: 361px) and (max-width: 430px) {
    font-size: 60px;
  }
`
const LogoStyle = styled.img`
    width: 60px;
    height: 60px;
    @media (max-width: 360px) {
     width: 30px;
     height: 30px;
  }

  @media (min-width: 361px) and (max-width: 430px) {
     width: 30px;
    height: 30px;
  }

  @media (min-width: 431px) and (max-width: 600px) {
       width: 30px;
    height: 30px;
  }

  @media (min-width: 601px) and (max-width: 830px) {
     width: 40px;
    height: 40px;
  }

  @media (min-width: 831px) and (max-width: 1023px) {
    width: 50px;
    height: 50px;
  }
`

const Contact1Style = styled.div`
    margin-left: 20%;
    display: flex;
    align-items: end;
    gap: 3%;
    @media (max-width: 360px ) {
    margin-left: 10%;
  }

  @media (min-width: 361px) and (max-width: 430px) {
    margin-left: 10%;
  }

  @media (min-width: 431px) and (max-width: 600px) {
    margin-left: 10%;
  }

  @media (min-width: 601px) and (max-width: 830px) {
    margin-left: 10%;
  }

  @media (min-width: 831px) and (max-width: 1023px) {
   margin-left: 10%;
  }
`

const ParagraphStyle = styled.p`
    font-family: 'Jersey 10';
    font-weight: 400;
    font-size: 2.5em;
    color: black;
    margin-bottom: 1%;
   @media (max-width: 360px) {
    font-size: 1.2em;
    }

  @media (min-width: 361px) and (max-width: 430px) {
    font-size: 1.2em;
  }

  @media (min-width: 431px) and (max-width: 600px) {
    font-size: 1.5em;
  }

  @media (min-width: 601px) and (max-width: 830px) {
    font-size: 2em;
  }

  @media (min-width: 831px) and (max-width: 1023px) {
    font-size: 2em;
  }

  
`
function Contact(){
    return(
        <ContactStyle>
            <H1Style> CONTACT </H1Style>
            <Contact1Style><LogoStyle src={logowathsapp}></LogoStyle><ParagraphStyle>+237 657 05 04 56</ParagraphStyle>  </Contact1Style>
            <Contact1Style><LogoStyle src={logolinkedin}></LogoStyle><ParagraphStyle> Rodrigue Mabou Defo</ParagraphStyle></Contact1Style>
            <Contact1Style><LogoStyle src={logogmail}></LogoStyle><ParagraphStyle> sommetdefo3@gmail.com</ParagraphStyle></Contact1Style>
        </ContactStyle>
    )
}
export default Contact
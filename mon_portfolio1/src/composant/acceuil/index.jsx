import styled from 'styled-components'
import BlurAccueil from '../bluraccueil'
import imageacceuil from '../../image/928c2c2cdc67a507253902630c28d4919917d32c.jpg'
import logowathsapp from '../../image/wathsapp.png'
import logogmail from '../../image/gmail-white.svg'
import logolinkedin from '../../image/LinkedIn.png'
import logogithub from '../../image/github-svgrepo-com.svg'

const AcceuilStyle = styled.div`
    position: relative;
` 
const DivlogoStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    gap: 3%;
    position: absolute;
    bottom: 100px;
    left: 25%; 
     @media (max-width: 360px ) {
      bottom: 20px;
  }

  @media (min-width: 361px) and (max-width: 430px) {
      bottom: 20px;
  }

  @media (min-width: 431px) and (max-width: 600px) {
     bottom: 50px;
  }

  @media (min-width: 601px) and (max-width: 835px) {
      bottom: 50px;
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

  @media (min-width: 601px) and (max-width: 835px) {
     width: 40px;
    height: 40px;
  }

  @media (min-width: 831px) and (max-width: 1023px) {
    width: 50px;
    height: 50px;
  }
`
const ImgStyle = styled.img`
    width: 100%;
    height: 700px;
     @media (max-width: 360px ) {
    height: 300px;
  }

  @media (min-width: 361px) and (max-width: 430px) {
    height: 300px;
  }

  @media (min-width: 431px) and (max-width: 600px) {
   height: 500px;
  }

  @media (min-width: 601px) and (max-width: 835px) {
    height: 500px;
  }

  @media (min-width: 831px) and (max-width: 1024px) {
    height: 500px;
  }
`
const Divblurstyle= styled.div`
    position: absolute;
    right: 50px;
    top: 50px;
`
function Acceuil(){
        return (
            <AcceuilStyle>
              <Divblurstyle>
                <BlurAccueil/>
              </Divblurstyle>
            
            <div>
                <ImgStyle src={imageacceuil}></ImgStyle>
            </div>
            <DivlogoStyle>
                <a href="https://wa.me/237657050456" target="_blank" rel="noopener noreferrer">
                     <LogoStyle src={logowathsapp}></LogoStyle>
                </a>
                <a href="https://linkedin.com/in/rodrigue-mabou-defo" target="_blank" rel="noopener noreferrer">
                     <LogoStyle src={logolinkedin}></LogoStyle>
                </a>
                <a href="mailto:sommetdefo3@gmail.com" target="_blank" rel="noopener noreferrer">
                     <LogoStyle src={logogmail}></LogoStyle>
                </a>
                
                <a href="https://github.com/data237/12-projet-d-analyses-de-donn-es" target="_blank" rel="noopener noreferrer">
                     <LogoStyle src={logogithub}></LogoStyle>
                </a>
                
                
            </DivlogoStyle>
            </AcceuilStyle>
        )
}
export default Acceuil
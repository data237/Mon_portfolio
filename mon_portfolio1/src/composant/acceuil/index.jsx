import styled from 'styled-components'
import { Button } from 'antd';
import rectangle from '../../image/Rectangle 3.png'
import imagemabou from '../../image/mabou.jpg'



const AcceuilStyle = styled.div`
    padding-top: 8%;
    padding-bottom: 14%;
    display: flex;
    justify-content: center;
    align-items: center;  
` 
const GrilleStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
    position: absolute;
    top: 80px;
    width: 75vw;
    z-index: -1;
`
const ImgmabouStyle = styled.div`
    width: 250px;
    height: 250px;
    border-radius: 100%;
    overflow: hidden;
`
const Img = styled.img`
    height: 350px;
`
const H1 = styled.h1`
    font-family: 'poppins', sans-serif;
    font-weight: bold;
    font-size: 4em;
    color: white;
`
const H3 = styled.h3`
    font-family: 'poppins', sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    background: linear-gradient(90deg, #4FC3F7 0%, #FFFFFF 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`
function Acceuil(){
   
        return (
            <AcceuilStyle>
              <GrilleStyle>
                <img src={rectangle} alt="" />
              </GrilleStyle>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
                <ImgmabouStyle><Img src={imagemabou}></Img></ImgmabouStyle>
                <div style={{textAlign: 'center'}}>
                  <H1> MABOU Sommet </H1>
                  <H3>Developpeur Frontend & Data Analyste</H3>
                </div>
               
                <Button type="primary">
                Contactez Moi
                </Button>
              </div>
             
            </AcceuilStyle>
        )
}
export default Acceuil
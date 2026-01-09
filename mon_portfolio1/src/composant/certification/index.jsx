import styled from 'styled-components'


const H1Style = styled.h1`
    font-family: 'Jersey 10';
    font-weight: 400;
    font-size: 80px;
    color: rgba(44, 133, 200, 1);
    margin-bottom: 4%;
    text-align: center;
    padding-top: 4%;
     @media (max-width: 360px ) {
    font-size: 60px;
  }
  @media (min-width: 361px) and (max-width: 430px) {
    font-size: 60px;
  }
`

const CertifStyle = styled.div`
    background-color: white;
    padding-bottom: 4%;
`

const ParagraphStyle = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.5em;
    text-align: justify;
    color: black;
    margin-bottom: 1%;
    margin-left: 20%;
     @media (max-width: 360px ) {
    margin-left: 10%;
    margin-right: 10%;
    font-size: 1em;
  }

  @media (min-width: 361px) and (max-width: 430px) {
    margin-left: 10%;
     margin-right: 10%;
    font-size: 1em;
  }

  @media (min-width: 431px) and (max-width: 600px) {
    margin-left: 10%;
    margin-right: 10%;
  }

  @media (min-width: 601px) and (max-width: 835px) {
    margin-left: 10%;
    margin-right: 10%;
  }

  @media (min-width: 831px) and (max-width: 1024px) {
   margin-left: 10%;
   margin-right: 10%;
  }
`
function Certification(){
    return(
        <CertifStyle>
            <H1Style> CERTIFICATIONS & DIPLOME </H1Style>
            <ParagraphStyle> 🎓 IBM Data Analyst Professional on COURSERA</ParagraphStyle>
            <ParagraphStyle> 🎓 Excel skills for business : Macquarie University on COURSERA</ParagraphStyle>
            <ParagraphStyle> 🎓 Python : des fondamentaux aux concepts avancés du langage, France Université Numérique </ParagraphStyle>
            <ParagraphStyle> 🎓 Master en statistiques et Econométries à l'Ecole Nationale Supérieur Polytechnique de Yaoundé.</ParagraphStyle>
        </CertifStyle>
    )
}
export default Certification
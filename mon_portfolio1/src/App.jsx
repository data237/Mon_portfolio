import './App.css'

import { Element } from 'react-scroll';
import Header from './composant/header'
import Acceuil from './composant/acceuil'
import Apropos from './composant/apropos'
import GlobalStyle from './style/globalstyle.jsx';
import Projets from './composant/projets';
import Certification from './composant/certification';
import Contact from './composant/contact';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Element name="Acceuil"><section><Acceuil/></section></Element>
      <Element name="Apropos"><section><Apropos/></section></Element>
      <Element name="Projets"><section><Projets/></section></Element>
      <Element name="Certification"><section><Certification/></section></Element>
      <Element name="Contact"><section><Contact/></section></Element>
    </>
  )
}

export default App

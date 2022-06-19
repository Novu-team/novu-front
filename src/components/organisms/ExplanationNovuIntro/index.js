import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'

import DemonstrationImage from '../../../assets/NovuDemonstration.png'

const GiantTitle = styled.h1`
  color: white;
  font-size: 200px;
  font-weight: 600;
`

const SubGiantTitle = styled.h2`
  
  font-size: 100px;
  color: white;
  text-align: center;
`

const BoldText = styled.strong`
  font-weight: bold;
`

const LittleTextIntro = styled.div`
  //TODO : essayer de voir pour bien agencer le texte
`

const Demonstration = styled.img`

`

const TextExplanation = styled.p`
  color: white;
  font-size: x-large;
  padding: 5% 10% 0;
`

const VisualModelIntro = styled.div`
  width: 40%;
`

const TextContainerIntro = styled.div`
  width: 60%;
`

const BackgroundNovuIntro = styled.div`
  padding-bottom: 50px;
  background: ${({ theme }) => get(theme, 'darkBlue', '#FFF')} no-repeat fixed center;
  background-size: cover;
  display: flex;
`

const ExplanationNovuIntro = () => {
  return (
    <BackgroundNovuIntro>
      <TextContainerIntro>
        <GiantTitle>Novu</GiantTitle>
        <SubGiantTitle>C est quoi ?</SubGiantTitle>
        <LittleTextIntro>
          <TextExplanation>
            <BoldText>Novu</BoldText> c’est l’appli collaborative qui regroupe toutes les étapes de l’organisation de ton voyage, <BoldText>au même endroit.</BoldText>
          </TextExplanation>
          <TextExplanation>
            Logement, date de ton séjour, activités, affaires à mettre dans ta valises… toutes les infos y sont.
            <br/>Le groupe valide ensemble chaque étape du séjour, et toi tu gardes un oeil sur tes vacances.
          </TextExplanation>
          <TextExplanation>
            Tu aimes prendre les choses en main ?
            <br/>Tu peux facilement soumettre au groupe tes envies, valider le programme, relancer les retardataires.
          </TextExplanation>
          <TextExplanation>
            Tu préfères te laisser porter ?
            <br/>Donne tes réponses au groupe en 3 clics, tu n’auras plus qu’à profiter sur place.
          </TextExplanation>
          <TextExplanation>
            Pour chaque vacances en famille, weekend entre amis, sortie entre collègues, tu crées ton event sur Novu et tu te laisses guider.
            <BoldText> Avec Novu, les vacances tous ensemble, c’est uniquement du plaisir.</BoldText>
          </TextExplanation>
        </LittleTextIntro>
      </TextContainerIntro>
      <VisualModelIntro>
        <Demonstration src={DemonstrationImage} />
      </VisualModelIntro>
    </BackgroundNovuIntro>
  )
}

export default ExplanationNovuIntro
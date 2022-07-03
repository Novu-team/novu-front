/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'

const GiantTitle = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => get(theme, 'darkBlue', '#FFF')};
  padding-bottom: 30px;
`

const SubGiantTitle = styled.h2`
  padding: 15px;
  font-size: 30px;
  color: ${({ theme }) => get(theme, 'primary', '#FFF')};
`

const SubSubGiantTitle = styled.h3`
  padding: 15px;
  font-size: 25px;
  color: ${({ theme }) => get(theme, 'primary', '#FFF')};
`

const TextContent = styled.p`
  padding-left: 15px;
  padding-bottom: 15px;
`

const ListContent = styled.ul`
  padding-left: 15px;
`


const PolitiqueConfidentialitePage = () => {
  return (
    <>
      <GiantTitle>
        Politique de confidentialité
      </GiantTitle>
      <SubGiantTitle>
        Acceptation de nos conditions générales
      </SubGiantTitle>
      <TextContent>
        Devant le développement des nouveaux outils de communication, il est nécessaire de porter une attention particulière à la protection de la vie privée. C’est pourquoi, nous nous engageons à respecter la confidentialité des renseignements personnels que nous collectons.
      </TextContent>
      <SubGiantTitle>
        Collecte des renseignements personnels
      </SubGiantTitle>
      <TextContent>
        <ListContent>
          <li>
            Nom, Prénom
          </li>
          <li>
            Adresse électronique
          </li>
          <li>
            Numéro de téléphone
          </li>
          <li>
            Date de naissance
          </li>
          <li>
            Genre (Feminin / Masculin)
          </li>
          <li>
            Réseau social (facultatif)
          </li>
        </ListContent>
      </TextContent>
      <SubGiantTitle>
        Formulaires et interactivité:
      </SubGiantTitle>
      <TextContent>
        <SubSubGiantTitle>Vos renseignements personnels sont collectés par le biais de formulaire, à savoir :</SubSubGiantTitle>
        <ListContent>
          <li>
            Formulaire d'inscription au site Web
          </li>
        </ListContent>
        <SubSubGiantTitle>Nous utilisons les renseignements ainsi collectés pour les finalités suivantes :</SubSubGiantTitle>
        <ListContent>
          <li>
            Informations / Offres promotionnelles
          </li>
          <li>
            Statistiques
          </li>
          <li>
            Contact
          </li>
        </ListContent>
        <SubSubGiantTitle>Vos renseignements sont également collectés par le biais de l’interactivité pouvant s’établir entre vous et notre site Web et ce, de la façon suivante :</SubSubGiantTitle>
        <ListContent>
          <li>
            Correspondance
          </li>
        </ListContent>
      </TextContent>
      <SubGiantTitle>
        Droit d’opposition et de retrait
      </SubGiantTitle>
      <TextContent>
        Nous nous engageons à vous offrir un droit d’opposition et de retrait quant à vos renseignements personnels.
      </TextContent>
      <TextContent>
        Le droit d’opposition s’entend comme étant la possibilité offerte aux internautes de refuser que leurs renseignements personnels soient utilisés à certaines fins mentionnées lors de la collecte.
      </TextContent>
      <TextContent>
        Le droit de retrait s’entend comme étant la possibilité offerte aux internautes de demander à ce que leurs renseignements personnels ne figurent plus, par exemple, dans une liste de diffusion.
      </TextContent>
      <SubSubGiantTitle>Pour pouvoir exercer ces droits, vous pouvez :</SubSubGiantTitle>
      <TextContent>
        <ListContent>
          <li>
            Code postal :  44610
          </li>
          <li>
            Courriel :  graindorge@novu-app.com
          </li>
          <li>
            Téléphone :  0647757476
          </li>
          <li>
            Section du site web :   novu-app.com
          </li>
        </ListContent>
      </TextContent>
      <SubGiantTitle>
        Droit d’accès
      </SubGiantTitle>
      <TextContent>
        Nous nous engageons à reconnaître un droit d’accès et de rectification aux personnes concernées désireuses de consulter, modifier, voire radier les informations les concernant.
      </TextContent>
      <SubSubGiantTitle>
        L’exercice de ce droit se fera :
      </SubSubGiantTitle>
      <TextContent>
        <ListContent>
          <li>
            Code postal :  44610
          </li>
          <li>
            Courriel :  graindorge@novu-app.com
          </li>
          <li>
            Téléphone :  0647757476
          </li>
          <li>
            Section du site web :   novu-app.com
          </li>
        </ListContent>
      </TextContent>
      <SubGiantTitle>
        Sécurité
      </SubGiantTitle>
      <TextContent>
        Les renseignements personnels que nous collectons sont conservés dans un environnement sécurisé. Les personnes travaillant pour nous sont tenues de respecter la confidentialité de vos informations.
      </TextContent>
      <TextContent>
        Pour assurer la sécurité de vos renseignements personnels, nous avons recours aux mesures suivantes :
      </TextContent>
      <TextContent>
        <ListContent>
          <li>
            Gestion des accès - personne autorisée
          </li>
          <li>
            Gestion des accès - personne concernée
          </li>
          <li>
            Identifiant / mot de passe
          </li>
        </ListContent>
      </TextContent>
      <TextContent>
        Nous nous engageons à maintenir un haut degré de confidentialité en intégrant les dernières innovations technologiques permettant d’assurer la confidentialité de vos transactions. Toutefois, comme aucun mécanisme n’offre une sécurité maximale, une part de risque est toujours présente lorsque l’on utilise Internet pour transmettre des renseignements personnels.
      </TextContent>
      <SubGiantTitle>
        Législation
      </SubGiantTitle>
      <TextContent>
        Nous nous engageons à respecter les dispositions législatives énoncées dans :
      </TextContent>
      <TextContent>
        Législation : Règlement Général sur la Protection des Données (RGPD)
      </TextContent>
    </>
  )
}

export default PolitiqueConfidentialitePage
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
  font-size: 30px;
  color: ${({ theme }) => get(theme, 'primary', '#FFF')};
  padding-bottom: 15px;
`

const TextContent = styled.p`
  padding-bottom: 15px;
`

const CGUPage = () => {
  return (
    <>
      <GiantTitle>
        CGU NOVU
      </GiantTitle>
      <SubGiantTitle>
        Acceptation de nos conditions générales
      </SubGiantTitle>
      <TextContent>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        L'accès aux services proposés par NOVU se fera uniquement sous la réserve de l'acceptation des conditions décrites ci-dessous que NOVU est libre de modifier à tout moment et sans aucun préavis. L'utilisation de nos services implique le traitement de vos informations tel que décrit dans notre politique de confidentialité. Nous vous invitons à en prendre connaissance. L'utilisateur est invité à se référer régulièrement à la dernière version des présentes conditions disponibles en permanence à l'adresse suivante : https://www.novu-app.com/fr/conditions-generales.
        Cette version des conditions générales date du xx/xx/2022.
        La version française de ce document prévaut sur toutes les autres langues.
      </TextContent>
      <SubGiantTitle>
        Droits intellectuels
      </SubGiantTitle>
      <TextContent>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Le nom NOVU ainsi que tous ses logos sont des marques déposées. Il n'est pas autorisé d'utiliser ces marques à des fins personnelles, quelles qu'elles soient. L'utilisateur de NOVU s'engage à ne pas reproduire, copier, vendre, marchander ou céder tout ou partie des services de NOVU, sous aucun prétexte. Il s'engage également à ne pas masquer ou modifier nos services (la marque NOVU ou les publicités par exemple).
      </TextContent>
      <SubGiantTitle>
        Description sommaire du produit
      </SubGiantTitle>
      <TextContent>
        NOVU c’est un outil collaboratif, qui regroupe toutes les étapes de l’organisation de ton événement (voyage, week-end, séminaire, soirée…), au même endroit. Logement, date de ton séjour, activités, affaires à mettre dans tes valises… toutes les infos y sont. Le groupe valide ensemble chaque étape de l’événement, et toi tu gardes un œil sur tes vacances. Tu aimes prendre les choses en main ? Tu peux facilement soumettre au groupe tes envies, valider le programme, relancer les retardataires.Tu préfères te laisser porter ? Donne tes réponses au groupe en 3 clics, tu n’auras plus qu’à profiter sur place. Pour chaque vacances en famille, weekend entre amis, sortie entre collègues, tu crées ton événement sur NOVU et tu te laisses guider.
      </TextContent>
      <TextContent>
        NOVU est accessible en ligne sur le site internet www.novu-app.com mais également via des applications mobiles. Les événements peuvent être partagés entre amis via un lien de partage.
      </TextContent>
      <SubGiantTitle>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Conseils d'utilisation pour un fonctionnement optimal de l'outil
      </SubGiantTitle>
      <TextContent>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Le lien hypertexte permettant d'accéder aux événements NOVU ne doit être transmis qu'à des personnes que vous désirez inviter personnellement à vos événements.Considérez ce lien comme l'unique “clef” permettant d'accéder à vos événements NOVU.
      </TextContent>
      <TextContent>
        Bien que non limité, ni dans le temps, ni en nombre de participants, il est conseillé de créer un événement NOVU pour une durée et un nombre de participants raisonnables.
      </TextContent>
      <SubGiantTitle>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Cadre d'utilisation approprié
      </SubGiantTitle>
      <TextContent>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        NOVU est adapté à une utilisation entre amis, en famille, entre collègues. Nous vous recommandons de toujours connaître au moins personnellement une personne parmi les participants. La confiance doit régner dans le groupe tout au long de l'utilisation d'un événement NOVU. Vous utilisez NOVU pour faciliter l’organisation de votre événement, il est donc recommandé de collaborer avec chacun pour que vôtre événement se prépare, puis se déroule de la manière la plus fluide possible.
      </TextContent>
      <SubGiantTitle>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Conditions d'accès
      </SubGiantTitle>
      <TextContent>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Vous ne pouvez pas utiliser NOVU si les lois de la juridiction applicable vous interdisent de recevoir des services tels que nous les proposons, si nous avons précédemment banni votre compte pour violation de ces conditions, ou si vous n'êtes pas en âge d'accepter des conditions d'utilisation.
      </TextContent>
      <TextContent>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Le Service n'est pas destiné aux personnes âgées de moins de 16 ans, et nous demandons à ces personnes de ne pas fournir d'informations personnelles par le biais du Service. Si votre enfant a soumis des informations personnelles et que vous souhaitez demander que ces informations personnelles soient supprimées, veuillez nous contacter via l'adresse privacy@novu-app.com ou par courrier au 10 rue du port Larron, 44610 Indre, France.
      </TextContent>
      <TextContent>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Comme utilisateur de NOVU, vous devez à tout moment fournir des données correctes à NOVU ainsi qu'au groupe participant aux comptes ; toujours vérifier les informations vous concernant.
      </TextContent>
      <TextContent>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Comme utilisateur de NOVU, vous vous engagez expressément à ne jamais : véhiculer du contenu qui soit illégal, nuisible, menaçant, abusif, constitutif de harcèlement, diffamatoire, vulgaire, obscène, menaçant pour la vie privée d'autrui, haineux, raciste, ou autrement répréhensible ; véhiculer du contenu violant un brevet ou une marque déposée ; porter atteinte de façon quelconque à d'autres utilisateurs ; harceler de quelque manière que ce soit un autre ou plusieurs autres utilisateurs ; tenter de tromper ou d'induire en erreur d'autres utilisateurs ; utiliser NOVU dans des chaînes d'emails (de type "hoax") ; entraver ou perturber intentionnellement nos services ; avoir une utilisation de NOVU qui serait contraire à la loi française; violer, intentionnellement ou non, toute loi ou réglementation nationale ou internationale en vigueur et toutes autres règles ayant force de loi ; reproduire, copier, vendre, revendre, ou exploiter dans un but commercial quel qu'il soit toute partie ou utilisation de nos services, tout droit d'accès à nos services.
      </TextContent>
      <TextContent>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        NOVU n'est en aucun cas responsable de l'exactitude ou de la précision des données rentrées par vous ou par les autres participants sur NOVU. NOVU ne jouera pas les arbitres au sein de votre groupe et ne pourra être tenu responsable du caractère inexact de certaines données. NOVU doit être vu comme un outil de consensus permettant d’organiser votre événement de la manière la plus fluide possible et non comme un outil permettant de stocker l'historique de l’ensemble de l’événement. En aucun cas NOVU ne pourra être tenu responsable de quelque nature que ce soit de dégâts directs ou indirects qui résulteraient : d'une utilisation inappropriée de ses services, d'une utilisation jugée illégale ou frauduleuse de ses services, de l'inexactitude des données sur un événement NOVU, de résultats erronés fournis par ses services, d'une indisponibilité temporaire ou durable de ses services, d'une défaillance quelconque de ses services, de toute cause en relation avec ses services.
      </TextContent>
      <SubGiantTitle>
        Avertissement
      </SubGiantTitle>
      <TextContent>
        Un événement NOVU ne doit JAMAIS avoir une quelconque valeur contractuelle aux yeux des utilisateurs. Pour le bon fonctionnement de l'outil, il est important que ceux ayant accès à un même événement NOVU (amis, famille, collègues) soient liés moralement ou contractuellement entre eux.
      </TextContent>
      <TextContent>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Un lien http permet d'accéder à NOVU. Ce lien est unique et ne peut pas être modifié.. Ce lien donne un accès à NOVU en lecture et en écriture. IL EST IMPORTANT DE NE JAMAIS COMMUNIQUER CE LIEN A DES PERSONNES QUI NE SONT PAS DIRECTEMENT IMPLIQUÉES DANS VOTRE ÉVÉNEMENT NOVU !
      </TextContent>
      <TextContent>
        Ce lien doit être traité comme le lien d'accès à votre événement NOVU et doit être traité avec précaution. En particulier, il est fortement déconseillé de le publier ou que ce soit, et en particulier sur des réseaux sociaux ou dans des forums.
      </TextContent>
      <TextContent>
        La probabilité de trouver ce lien "par hasard" est pratiquement nulle. Néanmoins, il n'est pas impossible à un étranger de se l'approprier : il peut être intercepté par un hacker, récupéré dans la mémoire d'un ordinateur ou simplement copié dans l'historique de votre navigateur Internet. Il est déconseillé de stocker des informations confidentielles sur NOVU. Si l'utilisateur le fait, il le fera à ses risques et périls. Si vous soupçonnez qu'une personne étrangère au groupe accède à votre événement  NOVU, abandonnez cet événement  sur le champ et créez-en de nouveaux ! Vous comprenez que NOVU ne peut être tenu responsable de l'utilisation que vous ou l'un des membres de votre groupe faites du lien vers un compte partagé.
      </TextContent>
      <SubGiantTitle>
        Suspension et interruption d'accès aux services
      </SubGiantTitle>
      <TextContent>
        NOVU a le droit d'arrêter ses services (ou une partie d'entre eux) de manière provisoire ou durable.De les supprimer, les modifier ou d'en introduire de nouveaux sans préavis. NOVU se réserve le droit (mais n'est pas obligé de le faire) de supprimer un événement  NOVU ou de bannir un ou des utilisateur(s) sans aucune justification et sans aucun préavis.
      </TextContent>
      <SubGiantTitle>
        Quitter un NOVU
      </SubGiantTitle>
      <TextContent>
        Lorsque vous supprimez un événement NOVU de votre application mobile et/ou de votre profil utilisateur (par exemple parce que vous quittez une activité en cours), cela ne le supprime pas des serveurs de NOVU. En effet, d'autres utilisateurs pourraient toujours souhaiter y accéder. Également, en conservant le lien d'accès de l’événement NOVU, vous pourriez choisir d'y accéder plus tard.
      </TextContent>
      <SubGiantTitle>
        Suppression définitive d'un NOVU
      </SubGiantTitle>
      <TextContent>
        Pour les raisons évoquées au point précédent, il n'est actuellement pas possible pour un utilisateur de supprimer totalement un événement NOVU des serveurs de NOVU.
      </TextContent>
      <SubGiantTitle>
        Respect de la vie privée
      </SubGiantTitle>
      <TextContent>
        Afin de vous fournir les services, nous recueillons certaines de vos informations personnelles. Nous décrivons notre collecte et notre utilisation des informations personnelles dans notre politique de confidentialité. Veuillez consulter cette politique avant d'utiliser NOVU. Vous devez être âgé de 16 ans ou plus pour utiliser ce service.
      </TextContent>
      <SubGiantTitle>
        Publicité
      </SubGiantTitle>
      <TextContent>
        NOVU se finance tout ou en partie grâce à la publicité (publicité de type Google Admob par exemple). De la publicité peut donc apparaître dans les services de NOVU. La gestion de la publicité s'effectue de manière automatique et pourrait être ciblée sur la base des informations dont nous disposons (langue, adresse IP, identifiant publicitaire). Les informations permettant le ciblage publicitaire ne sont pas traitées manuellement.
      </TextContent>
      <SubGiantTitle>
        Souscription à des fonctionnalités additionnelles
      </SubGiantTitle>
      <TextContent>
        NOVU offre des fonctionnalités additionnelles sous forme de souscriptions annuelles. Ces souscriptions sont gérées par les plateformes telles que Google Play, Apple AppStore ou Huawei AppGallery.
      </TextContent>
      <TextContent>
        L'abonnement est prolongé automatiquement sauf si vous l'avez désactivé dans les 24 heures précédant la date de renouvellement. La prolongation de l'abonnement coûte le même montant que l'abonnement initial. Après un achat, vous pouvez désactiver le renouvellement automatique dans les paramètres de votre compte iTunes ou Google Play. Veuillez noter qu'un abonnement en cours ne peut être annulé.
      </TextContent>
      <SubGiantTitle>
        Loi applicable et juridiction compétente
      </SubGiantTitle>
      <TextContent>
        Les présentes conditions générales d'utilisation sont régies par la loi française. Tout litige sera soumis à la compétence exclusive des tribunaux de Nantes (France).
      </TextContent>
    </>
  )
}

export default CGUPage
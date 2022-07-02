import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { map } from 'lodash'
import SVG from 'react-inlinesvg'

import media from '../../../utils/media'
import HomeSectionSubtitle from '../../atoms/HomeSectionSubtitle'
import HomeSectionDescription from '../../atoms/HomeSectionDescription'

const DataContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 32px auto;
  justify-content: space-around;
  
  ${media.lessThan('md')`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
  
  ${media.greaterThan('sm')`
    margin: 40px auto;
  `}
`

const PartContainer = styled.div`
  margin: 0 20px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

const PartTitle = styled(HomeSectionSubtitle)`
  margin: 8px auto 20px;
  text-align: center;
  font-size: xx-large;
  
  ${media.lessThan('sm')`
    margin-top: 0;
    margin-bottom: 0;
  `}
`

const PartDescription = styled(HomeSectionDescription)`
  margin: 20px 0;
  text-align: center;
`

const AuthorStatement = styled(HomeSectionDescription)`
  margin: 20px 0;
  text-align: center;
  font-weight: bold;
  font-size: x-large;
`


const IconSVGStyled = styled(SVG)`
  margin-bottom: 20px;
  
  & path {
    fill: ${({ color }) => color};
  }
`

IconSVGStyled.propTypes = {
  color: PropTypes.string
}

const ProfitsPart = ({ data }) => map(data, ({ title, descriptions, icon, author }) => (
  <PartContainer key={`${title}`}>
    <IconSVGStyled color={'white'} src={icon} />
    <PartTitle>{title}</PartTitle>
    <PartDescription>{descriptions}</PartDescription>
    <AuthorStatement>{author}</AuthorStatement>
  </PartContainer>
))

const RowImageDescription = ({ data }) => (
  <DataContainer>
    <ProfitsPart data={data} />
  </DataContainer>
)

RowImageDescription.propTypes = {
  data: PropTypes.array.isRequired
}

export default RowImageDescription
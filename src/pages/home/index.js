import React, { useEffect } from 'react'

import MyImage from '../../assets/img/logo.png';

import { Logo, MainTitle, Subtitle, Container, TextContainer, Text } from './styles'

export const Home = () => {
  // const navigate = useNavigate()

  return (
    <Container>
      <Logo src={MyImage} alt="logo"/>
      <MainTitle>
        Base de currículos AMF
      </MainTitle>
      <Subtitle>
        Plataforma de cadastro de currículo e análise de perfil
      </Subtitle>
      <TextContainer>
        <Text>
          Olá! Esta é a nossa Plataforma de Cadastro de Currículos.
          Esse espaço foi criado pensando em você que está em busca de
          oportunidades no mercado de trabalho e crescimento profissional. 
        </Text>
      </TextContainer>
      <Text>
        Cadastre-se e faça parte do nosso banco de talentos
      </Text>
    </Container>
  )
}

export default Home
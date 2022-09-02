import React from 'react'

import logoAmf from '../../assets/img/logo-amf.svg';

import undraw_0 from '../../assets/img/undraw_0.svg';
import undraw_1 from '../../assets/img/undraw_1.svg';
import undraw_2 from '../../assets/img/undraw_2.svg';
import undraw_3 from '../../assets/img/undraw_3.svg';

import logoSistema from '../../assets/img/logo-sistema.svg';

import {
  Logo,
  Header,
  MainTitle,
  Subtitle,
  Container,
  Text,
  LeftImages,
  ContainerHome,
  ContainerInfos,
  RightImages,
  ButtonsDiv,
  ButtonLogin,
  ButtonCadastrar,
  ContainerStart,
  InputEmail,
} from './styles'

export const Form2 = () => {
  // const navigate = useNavigate()

  return (
    <Container>
        <ContainerInfos>
          <Logo src={logoSistema} alt="logo"/>
          <MainTitle>
            Base de currículos AMF
          </MainTitle>
          <Subtitle>
            Plataforma de cadastro de currículo e análise de perfil
          </Subtitle>
          <Text>
            <b>Olá!</b> Esta é a nossa <b>Plataforma de Cadastro de Currículos</b>.
            Esse espaço foi criado pensando em você que está em busca de
            oportunidades no mercado de trabalho e crescimento profissional. 
          </Text>
          <Text>
            Cadastre-se e faça parte do nosso banco de talentos
          </Text>

          <ContainerStart>
            <InputEmail type="email" placeholder="Entre com o seu E-mail"/>
            <ButtonCadastrar>Cadastrar</ButtonCadastrar>
          </ContainerStart>
        </ContainerInfos>
    </Container>
  )
}

export default Form2

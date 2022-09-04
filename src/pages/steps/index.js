import { Route, Routes } from "react-router-dom";
import "./styles.js";
import { Container, Header, ContainerHome, LeftImages, Logo, RightImages, MainTitle, Subtitle, ContainerInfos } from "./styles.js";
import { UserForm } from '../../components/UserForm';
import logoAmf from '../../assets/img/logo-amf.svg';
import logoSistema from '../../assets/img/logo-sistema.svg';
import undraw_0 from '../../assets/img/undraw_0.svg';
import undraw_1 from '../../assets/img/undraw_1.svg';
import undraw_2 from '../../assets/img/undraw_2.svg';
import undraw_3 from '../../assets/img/undraw_3.svg';
const Steps = () => {
    return (
        <Container>
            <Header>
                <Logo size="100" src={logoAmf} alt="logo" />


            </Header>
            <ContainerInfos>
                <MainTitle>
                    Base de currículos AMF
                </MainTitle>
                    {/* <Subtitle>
                        Plataforma de cadastro de currículo e análise de perfil
                    </Subtitle> */}
                    <Logo src={logoSistema} alt="logo"/>
                    <UserForm />
                </ContainerInfos>
            {/* <ContainerHome>

                <LeftImages>
                    <Logo size="90" src={undraw_0} alt="logo" />
                    <Logo size="90" src={undraw_1} alt="logo" />
                </LeftImages>
                
               

                 <RightImages>
                    <Logo size="90" src={undraw_2} alt="logo" />
                    <Logo size="90" src={undraw_3} alt="logo" />
                </RightImages>

            </ContainerHome> */}
        </Container>
    );
};

export default Steps;
import "./styles.js";
import { Container, Header, ContainerHome, LeftImages, Logo, RightImages, MainTitle, Subtitle, ContainerInfos } from "./styles.js";
import logoAmf from '../../assets/img/logo-amf.svg';
import logoSistema from '../../assets/img/logo-sistema.svg';
import UserForm from '../../components/UserForm'
const Steps = () => {
    return (
        <Container>
            <Header>
            </Header>
            <Logo size="100" src={logoAmf} alt="logo" />
            <ContainerInfos>
                <MainTitle>
                    Base de currículos AMF
                </MainTitle>
                <Logo src={logoSistema} alt="logo" />
                <UserForm />
            </ContainerInfos>
        </Container>
    );
};

export default Steps;
import "./styles.js";
import { Link } from 'react-router-dom';
import { Container, Header, Logo, MainTitle, ContainerInfos } from "./styles.js";
import logoAmf from '../../assets/img/logo-amf.svg';
import logoSistema from '../../assets/img/logo-sistema.svg';
import UserForm from '../../components/UserForm'
const Curriculum = () => {
    return (
        <Container>
            <Header>
                <Logo size="100" src={logoAmf} alt="logo" />
                <MainTitle>
                    Base de currículos AMF
                </MainTitle>
            </Header>
            <ContainerInfos>
                <Link to="/step" >
                    <Logo src={logoSistema} alt="logo" />
                </Link>
                <UserForm />
            </ContainerInfos>
        </Container>
    );
};

export default Curriculum;
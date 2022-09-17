import styled from "styled-components";
// Create a Title component that'll render an <h1> tag with some styles

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0px 50px;
  align-items: center;

`;
export const Cadastro = styled.div`
width: 100%;
min-height: calc(100vh - 58px);
display: flex;
flex-direction: column;
align-items: center;
`
export const Output = styled(Cadastro)`
  margin: 60px 0 0 0;
  padding: 30px;
  width: 100%;
  min-height: 500px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 3px 12px rgb(160, 181, 238);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `

  export const MainContainer = styled(Cadastro)`
  width: 100%;
  max-width: 776px;
  margin: 0 auto;
  padding: 70px 0;
  `
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const ButtonsDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export const ButtonLogin = styled.button`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 29px;
  text-align: center;
  color: #001E89;
  background: white;
  border: none;
  cursor: pointer;
  padding: 0px 40px;
  border: 1px solid #001E89;
  border-radius: 20px;

  transition: all 0.7s ease;

  :hover {
    background: #001E89;
    color: white;
  }
`

export const ButtonCadastrar = styled.div`
  display: flex;
  padding: 0px 24px;
  width: 85px;
  height: 41px;
  background: #001E89;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border: 0px solid #001E89;

  transition: all 0.7s ease;

  :hover {
    background: white;
    color: #001E89;
    border: 1px solid #001E89;
  }
`

export const LeftImages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3.5% 0px;
  width: 15%;
`

export const ContainerHome = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`

export const ContainerInfos = styled.div`
  display: flex;
  align-items: center;
`

export const RightImages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5% 0px;
  width: 15%;
`

export const ContainerStart = styled.div`
  display: flex;
  width: 42%;
  justify-content: space-between;
  margin-top: 10px;
`

export const InputEmail = styled.input`
  padding: 0px 35px;
  width: 150px;
  height: 41px;
  background: #E2E2E2;
  border-radius: 10px;
  border: 0px solid;
	outline: inherit;
  transition: all 0.5s ease;

  :focus {
    border: 2px solid #001E89;
  }
`

export const Logo = styled.img`
  width: ${props => props?.size + 'px' ?? "40px"};
  height: 175px;
`;
export const Progressbar = styled.div`
  width: 400px;
  height: 10px;
  background-color: white;
  margin-bottom: 50px;
`;
export const MainTitle = styled.span`
  font-size: 2em;
  font-weight: bolder;
  margin-top: 30px;
`;

export const Subtitle = styled.span`
  font-size: 1.2em;
  margin-top: 5px;
`;


export const Text = styled.span`
  font-family: 'Inter';
  font-size: 1em;
  line-height: 24px;
  text-align: center;
  color: #575664;
  width: 46%;
  margin: 2% 0px 20px 0px;
`;

export const Form = styled.form`
  width: 100%;
`;
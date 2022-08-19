import styled from "styled-components";
// Create a Title component that'll render an <h1> tag with some styles

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  align-items: center;
  background-color: red;
`;

export const Logo = styled.img`
  width: 203px;
  height: 175px;
`;

export const MainTitle = styled.span`
  font-size: 61px;
  font-weight: bolder;
  margin-top: 30px;
`;

export const Subtitle = styled.span`
  font-size: 24px;
  margin-top: 5px;
`;

export const TextContainer = styled.div`
  width: 750px;
  margin-top: 5%;
`;


export const Text = styled.span`
  font-size: 20px
`;
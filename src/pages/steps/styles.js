/* Global Styles */
import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
margin: 0;
padding: 0;
font-family: sans-serif;`


/* Nav Styles */

export const Nav = styled.nav`
  width: 100%;
  padding: 20px 30px;
  background: #333;
`
export const NavA = styled(Nav)`
  margin-right: 10px;
    text-decoration: none;
    display: inline-block;
    color: #fff;
  `
/* Home Title Styles */

export const homeTitle = styled.span`
  margin: 18px 30px;
  font-size: 30px;
  line-height: 1;
  `

/* Signup styles */
export const Cadastro = styled.div`
  width: 100%;
  min-height: calc(100vh - 58px);
  display: flex;
  flex-direction: column;
  align-items: center;
  `

export const MainContainer = styled(Cadastro)`
  width: 100%;
  max-width: 776px;
  margin: 0 auto;
  padding: 70px 0;
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

/* Step Indicator Styles */
export const StepIndicator = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  `
export const Hr = styled(StepIndicator)`
  width: 160px;
  background: #fafafa;
  height: 2px;
  border-width: 0;
  margin: 0 16px;
  `

//   .stepIndicator hr: last - of - type {
//   display: none;
// }
export const StepIndicatorA = styled(StepIndicator)`
  text - decoration: none;
  width: 50px;
  height: 50px;
  background: #fff;
  color: lightblue;
  box - shadow: 0px 3px 12px rgb(160, 181, 238);
  border - radius: 50px;
  display: flex;
  align - items: center;
  justify - content: center;
  /* cursor: pointer; */
  cursor: default ;
  user - select: none;
  position: relative;
  font - weight: bold;
  font - size: 22px;
  transition: all 600ms ease -in -out;
`

export const ActiveLink = styled(StepIndicator)`
  background: lightblue;
  color: #fff;
  `

/* Button Container Styles */
export const BtnContainer = styled.div`
  width: 100 %;
  display: flex;
  justify - content: flex - end;
  align - items: center;
  `
export const BtnContainerA = styled(BtnContainer)`
  text - decoration: none;
  display: inline - block;
  margin - left: 10px;
  color: #000;
  `

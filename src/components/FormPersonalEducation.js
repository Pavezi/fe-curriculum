import React, { useState } from 'react';
import 'date-fns'
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import { ButtonLogin, ButtonsDiv, Cadastro, MainContainer, Output } from './styles';
import dayjs from 'dayjs';

const FormPersonalEducation = (props) => {
  const continua = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  // const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));
  // const handleChangeD = (newValue) => {
  //   setValue(newValue);
  // };
  const { values, handleChange } = props;
  return (
    <Cadastro>
      <MainContainer>
        <Output open
          fullWidth
          maxWidth='sm'>
          <AppBar title="Enter User Details" />
          <TextField
            required
            variant="filled"
            placeholder="Seu Nome"
            label="Nome"
            onChange={(e) => handleChange('name', e)}
            defaultValue={values.name}
            margin="normal"
            fullWidth
          />
          <br />
          {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DesktopDatePicker
              label="Date desktop"
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChangeD}
              renderInput={(params) => <TextField {...params} />}
            />    
          </MuiPickersUtilsProvider> */}
          <br />
          <TextField
            required
            variant="filled"
            placeholder="Seu Endereço"
            label="Endereço"
            onChange={(e) => handleChange('adress', e)}
            defaultValue={values.adress}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            required
            placeholder="Seu Objetivo"
            variant="filled"
            label="Objetivo"
            onChange={(e) => handleChange('objective', e)}
            defaultValue={values.objetivo}
            margin="normal"
            fullWidth
          />
          <br />
          <ButtonsDiv>
            <ButtonLogin color="primary"
              variant="contained"
              onClick={continua}>
              Continuar
            </ButtonLogin>
            <ButtonLogin color="primary"
              variant="contained"
              onClick={back}>
              Voltar
            </ButtonLogin>
          </ButtonsDiv>
        </Output>
      </MainContainer>
    </Cadastro>
  );
};

export default FormPersonalEducation;
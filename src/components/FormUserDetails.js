import React, { useState }  from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import { ButtonLogin, ButtonsDiv, Cadastro, MainContainer, Output } from './styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Curso</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Sistemas de Informação</MenuItem>
          <MenuItem value={20}>Administração</MenuItem>
          <MenuItem value={30}>Direito</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
const FormUserDetails = (props) =>  {
  const continua = (e) => {
    e.preventDefault();
    props.nextStep();
  };
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
              onChange={(e) => handleChange('name',e)}
              defaultValue={values.name}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              required
              variant="filled"
              placeholder="Seu Email"
              label="Email"
              onChange={(e) => handleChange('email',e)}
              defaultValue={values.email}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              required
              variant="filled"
              placeholder="Seu Endereço"
              label="Endereço"
              onChange={(e) => handleChange('adress',e)}
              defaultValue={values.adress}
              margin="normal"
              fullWidth
            />
            <br />
            <BasicSelect></BasicSelect>
            <br />
            <TextField
              required
              placeholder="Seu Objetivo"
              variant="filled"
              label="Objetivo"
              onChange={(e) => handleChange('objetivo',e)}
              defaultValue={values.objetivo}
              margin="normal"
              fullWidth
            />
            <br />
            <ButtonsDiv><ButtonLogin color="primary"
              variant="contained"
              onClick={continua}>
              Continuar
            </ButtonLogin>
            </ButtonsDiv>
          </Output>
        </MainContainer>
      </Cadastro>
    );
};

export default FormUserDetails;

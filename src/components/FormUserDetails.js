import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
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
              onChange={handleChange('name')}
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
              onChange={handleChange('email')}
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
              onChange={handleChange('adress')}
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
              onChange={handleChange('objetivo')}
              defaultValue={values.objetivo}
              margin="normal"
              fullWidth
            />
            <br />
            <ButtonsDiv><ButtonLogin color="primary"
              variant="contained"
              onClick={this.continue}>
              Continuar
            </ButtonLogin>
            </ButtonsDiv>
          </Output>
        </MainContainer>
      </Cadastro>

    );
  }
}

export default FormUserDetails;

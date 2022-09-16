import React, { useState, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { ButtonLogin, ButtonsDiv, Cadastro, MainContainer, Output, Form } from './styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import cadastrarPersona from '../schemas/cadastrarPersona.schema';

const FormUserDetails = ({ formData, setFormData, nextStep, }) => {

  const continua = () => {
    nextStep();
  };

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
            label="Email"
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })}
            placeholder="Email..."
            margin="normal"
            fullWidth
            name='email'
            value={formData.email}
          />
          <TextField
            required
            variant="filled"
            label="Password"
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })}
            placeholder="Password..."
            margin="normal"
            fullWidth
            name='password'
            value={formData.password}

          />
          <ButtonsDiv>
            <ButtonLogin color="primary"
              variant="contained"
              type='continua'
            >
              Continuar
            </ButtonLogin>
          </ButtonsDiv>
        </Output>
      </MainContainer>
    </Cadastro >
  );
};

export default FormUserDetails;

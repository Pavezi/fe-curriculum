import React, { useState, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
// import Select from '@material-ui/core/Select';
import { ButtonLogin, ButtonsDiv, Cadastro, MainContainer, Output, Form } from './styles';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useFormik } from 'formik';
import cadastrarPersona from '../schemas/cadastrarPersona.schema';
import { BottomNavigation } from '@material-ui/core';
import { BooleanField } from 'react-admin';

const BasicSelect = (props) => {

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
          < InputLabel id="demo-simple-select-label" > Curso</InputLabel >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={props.defaultValue}
            label="Age"
            onChange={props.handleChange}
            name="curso"
          >
            <MenuItem value="Sistemas de Informação">Sistemas de Informação</MenuItem>
            <MenuItem value="Administração">Administração</MenuItem>
            <MenuItem value="Direito">Direito</MenuItem>
          </Select>
      </FormControl>
    </Box>
  );
}
const FormUserDetails = ({ values, handleChange, nextStep, prevStep }) => {
  const initialValues = {
    nome: '',
    cpf: '',
    dataNacimento: '',
    email: '',
    endereco: '',
    // cep: '',
    // cidade: '',
    // bairro: '',
    // estado: '',
    // curso: '',
    objetivo: '',
    // experiencia: '',
  }

  const continua = () => {
    nextStep();
  };

  
  const back = (e) => {
    prevStep()
  }
  
  const formik = useFormik({
    initialValues,
    validationSchema: cadastrarPersona(),
    onSubmit: continua,
  })
  
  console.log('###', formik.errors);
  
  return (
    <Cadastro>
      <MainContainer>

        <Output open
          fullWidth
          maxWidth='sm'>
          <Form onSubmit={e => formik.handleSubmit(e)}>
            <AppBar title="Enter User Details" />
            <TextField
              required
              variant="filled"
              label="Nome"
              onChange={formik.handleChange}
              defaultValue={formik.values.nome}
              margin="normal"
              fullWidth
              name='nome'
            />
            <span
              className="focus-input"
              data-placeholder={formik.values.nome !== '' ? '' : 'Nome'}
            />
            {formik.errors.nome && (
              <span className="label-error">{formik.errors.nome}</span>
            )}
            <br />
            <TextField
              required
              variant="filled"
              label="CPF"
              onChange={formik.handleChange}
              defaultValue={formik.values.cpf}
              margin="normal"
              fullWidth
              name='cpf'
            />
            <span
              className="focus-input"
              data-placeholder={formik.values.cpf !== '' ? '' : 'CPF*'}
            />
            {
              console.log(formik.touched)
            }
            {formik.errors.cpf && (
              <span className="label-error">{formik.errors.cpf}</span>
            )}
            <br />
            <TextField
              required
              variant="filled"
              label="Data de Nascimento"
              onChange={formik.handleChange}
              defaultValue={formik.values.dataNacimento}
              margin="normal"
              fullWidth
              name='dataNacimento'
            />
            <span
              className="focus-input"
              data-placeholder={formik.values.dataNacimento !== '' ? '' : 'Data de nascimento*'}
            />
            {formik.errors.dataNacimento && (
              <span className="label-error">{formik.errors.dataNacimento}</span>
            )}

            <br />
            <TextField
              required
              variant="filled"
              placeholder="Seu Email"
              label="Email"
              onChange={formik.handleChange}
              defaultValue={formik.values.email}
              margin="normal"
              fullWidth
              name="email"
            />
            <span
              className="focus-input"
              data-placeholder={formik.values.email !== '' ? '' : 'Email*'}
            />
            {formik.errors.dataNacimento && (
              <span className="label-error">{formik.errors.email}</span>
            )}
            <br />
            <TextField
              required
              variant="filled"
              placeholder="Seu Endereço"
              label="Endereço"
              onChange={formik.handleChange}
              defaultValue={formik.values.adress}
              margin="normal"
              fullWidth
              name="endereco"
            />
            <br />
            <BasicSelect
              handleChange={formik.handleChange}
              defaultValue={formik.values.curso}
            />
            <br />
            <TextField
              required
              placeholder="Seu Objetivo"
              variant="filled"
              label="Objetivo"
              onChange={formik.handleChange}
              defaultValue={formik.values.objetivo}
              margin="normal"
              fullWidth
              name="objetivo"
            />
            <br />
            <Checkbox
              checked={formik.values.experiencia}
              onChange={formik.handleChange}
              defaultValue={formik.values.experiencia}
              margin="normal"
              // fullWidth
              name="experiencia"
            />
            <span>Possui experiências profissionais?</span>
            <br />
            <ButtonsDiv><ButtonLogin color="primary"
              variant="contained"
              type='submit'
            // onClick={ continua
            //   //     if(initialValues = full){onClick = { continua } >
            //   // }
            // }continua
            //     if(initialValues = full){onClick = { continua } >
            // }
            >
              Continuar
            </ButtonLogin>
            </ButtonsDiv>
          </Form>
        </Output>
      </MainContainer>
    </Cadastro >
  );
};

export default FormUserDetails;

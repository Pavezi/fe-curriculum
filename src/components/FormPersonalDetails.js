import React, { Component, useCallback } from 'react';
import cadastrarPersona from '../schemas/cadastrarPersona.schema';
import { useFormik } from 'formik';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// export class FormPersonalDetails extends Component{
const FormPersonalDetails = ({nextStep, prevStep, values, handleChange}) => {
  const initialValues = {
    nome: '',
    dataNacimento: '',
    sexo: '',
    cpf: '',
    endereco: '',
    cep: '',
    cidade: '',
    bairro: '',
    estado: '',
    objetivo: '',
  }
  const onSubmit = useCallback((values) => {
    const jogadores = []

    if (JSON.parse(localStorage.getItem('jogadores'))) {
      jogadores.push(...JSON.parse(localStorage.getItem('jogadores')))
    }

    if (jogadores) {
      jogadores.push(values)

      localStorage.setItem('jogadores', JSON.stringify(jogadores))
    } else {
      localStorage.setItem('jogadores', JSON.stringify(values))
    }
  }, [])

  const formik = useFormik({
    initialValues,
    validationSchema: cadastrarPersona(),
    onSubmit,
  })

  const continua = e => {
    e.preventDefault();
    nextStep();
  };

  console.log(formik.values);

  const back = e => {
    e.preventDefault();
    prevStep();
  };
  // onSubmit={formik.handleSubmit}
  return (
    <MuiThemeProvider>
      <>
        <Dialog
          open
          fullWidth
          maxWidth='sm'
        >
          <input
            className={formik.values.nome !== "" ? "has-val input" : "input"}
            id="nome"
            name="nome"
            value={formik.values.nome}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <span
            className="focus-input"
            data-placeholder={formik.values.nome !== '' ? '' : 'Nome'}
          />
          {/* <AppBar title="Enter Personal Details" />
          <TextField
            placeholder="Enter Your Occupation"
            label="Occupation"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your City"
            label="City"
            onChange={handleChange('city')}
            defaultValue={values.city}
            margin="normal"
            fullWidth
          />
          <br />
          <TextField
            placeholder="Enter Your Bio"
            label="Bio"
            onChange={handleChange('bio')}
            defaultValue={values.bio}
            margin="normal"
            fullWidth
          />
          <br /> */}

          <Button
            color="secondary"
            variant="contained"
            onClick={back}
          >Back</Button>

          <Button
            color="primary"
            variant="contained"
            onClick={continua}
          >Continue</Button>
        </Dialog>
      </>
    </MuiThemeProvider>
  );
};


export default FormPersonalDetails;

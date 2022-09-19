import React, { useState } from 'react';
import 'date-fns'
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import { ButtonLogin, ButtonsDiv, Cadastro, MainContainer, Output, Form } from './styles';
import { useFormik } from 'formik';
import cadastrarExp from '../schemas/cadastrarExp.schema';

const FormEducationExp = (nextStep, prevStep, formData,) => {
  const initialValues = {
    name: formData.name,
    email: formData.email,
    cpf: formData.cpf,
    curse: formData.curse,
    adress: formData.adress,
    bio: formData.bio,
    objective: formData.objective,
  }

  const continua = () => {
    nextStep();
  };

  const back = (e) => {
    prevStep()
  }

  const formik = useFormik({
    initialValues,
    validationSchema: cadastrarExp(),
    onSubmit: continua,
  })

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
              value={formData.name}
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
          </Form>
        </Output>
      </MainContainer>
    </Cadastro>
  );
};

export default FormEducationExp;
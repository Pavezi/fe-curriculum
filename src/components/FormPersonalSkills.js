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

const FormPersonalSkills = ({ fields, nextStep, prevStep }) => {
    const initialValues = {
        inico: fields.inico,
        fim: fields.fim,
    }
    const passData = () => {

        fields.inico = formik.values.inico;
        fields.fim = formik.values.fim;
        console.log(fields);
    }
    const continua = () => {
        nextStep();
        passData();
    };
    const back = (e) => {
        prevStep();
        passData();
    }

    const formik = useFormik({
        initialValues,
        // validationSchema: cadastrarPersona(),
    })

    console.log('###', formik.errors);

    return (
        <Cadastro>
            <MainContainer>
                <h1>1 - Informações do Usuário</h1>

                <Output open
                    fullWidth
                    maxWidth='sm'>
                    <Form onSubmit={e => formik.handleSubmit(e)}>
                        <AppBar title="Enter User Details" />
                        <TextField
                            // required

                            variant="filled"
                            label="Inicio"
                            onChange={formik.handleChange}
                            defaultValue={formik.values.inico}
                            margin="normal"
                            fullWidth
                            name='inico'
                        />
                        <span
                            className="focus-input"
                            data-placeholder={formik.values.inico !== '' ? '' : 'Inicio'}
                        />
                        {formik.errors.nome && (
                            <span className="label-error">{formik.errors.inico}</span>
                        )}
                        <br />
                        <TextField
                            // required

                            variant="filled"
                            label="Fim"
                            onChange={formik.handleChange}
                            defaultValue={formik.values.fim}
                            margin="normal"
                            fullWidth
                            name="fim"
                        />

                        <br />
                        <ButtonsDiv><ButtonLogin color="primary"
                            variant="contained"
                            type='submit'
                            // onSelect={continua(), passData()}
                            onClick={() => {
                                continua()
                            }}
                        >
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
        </Cadastro >
    );
};

export default FormPersonalSkills;

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import { Button, ButtonsDiv, Cadastro, MainContainer, Output, Form } from './styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useFormik } from 'formik';
import registerPerson from '../schemas/registerPerson.schema';

const FormUserDetails = ({ nextStep, formData }) => {
  const initialValues = {
    nome: formData.name,
    password: formData.password,
    email: formData.email,
    cpf: formData.cpf,
    curse: formData.curse,
    birth_date: formData.birth_date,
    adress: formData.adress,
    telephone: formData.telephone,
    objective: formData.objective,
  }

  const continua = () => {
    nextStep();
  };

  const formik = useFormik({
    initialValues,
    onSubmit: continua,
    // validationSchema: registerPerson(),

  })

  const passData = () => {
    formData.name = formik.values.name;
    formData.password = formik.values.password;
    formData.email = formik.values.email;
    formData.cpf = formik.values.email;
    formData.birth_date = formik.values.birth_date;
    formData.curse = formik.values.curse;
    formData.adress = formik.values.adress;
    formData.telephone = formik.values.telephone;
    formData.objective = formik.values.objective;
    console.log(formData);
  }
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
              name='name'
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
              label="Senha"
              onChange={formik.handleChange}
              value={formData.password}
              margin="normal"
              fullWidth
              name='password'
            />
            <span
              className="focus-input"
              data-placeholder={formik.values.password !== '' ? '' : 'Nome'}
            />
            {formik.errors.nome && (
              <span className="label-error">{formik.errors.password}</span>
            )}
            <br />
            <TextField
              required
              variant="filled"
              placeholder="Seu Email"
              label="Email"
              onChange={formik.handleChange}
              defaultValue={formData.email}
              margin="normal"
              fullWidth
              name="email"
            />
            <span
              className="focus-input"
              data-placeholder={formik.values.email !== '' ? '' : 'Email*'}
            />
            {formik.errors.birth_date && (
              <span className="label-error">{formik.errors.email}</span>
            )}
            <br />
            <TextField
              required
              variant="filled"
              label="CPF"
              onChange={formik.handleChange}
              defaultValue={formData.cpf}
              margin="normal"
              fullWidth
              name='cpf'
            />
            <span
              className="focus-input"
              data-placeholder={formik.values.cpf !== '' ? '' : 'CPF*'}
            />
            {formik.errors.cpf && (
              <span className="label-error">{formik.errors.cpf}</span>
            )}
            <br />
            <TextField
              required
              variant="filled"
              label="Data de Nascimento"
              onChange={formik.handleChange}
              defaultValue={formData.birth_date}
              margin="normal"
              fullWidth
              name='birth_date'
            />
            <span
              className="focus-input"
              data-placeholder={formik.values.birth_date !== '' ? '' : 'Data de nascimento*'}
            />
            {formik.errors.birth_date && (
              <span className="label-error">{formik.errors.birth_date}</span>
            )}
            <br />
            < InputLabel id="demo-simple-select-label" >Curso</InputLabel >
            <Select
              fullWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={formData.curse}
              label="Age"
              handleChange={formik.handleChange}
              name="curse"
            >
              <MenuItem value="Sistemas de Informação">Sistemas de Informação</MenuItem>
              <MenuItem value="Administração">Administração</MenuItem>
              <MenuItem value="Direito">Direito</MenuItem>
            </Select>
            <br />
            <TextField
              required
              variant="filled"
              placeholder="Seu Endereço"
              label="Endereço"
              onChange={formik.handleChange}
              defaultValue={formData.adress}
              margin="normal"
              fullWidth
              name="endereco"
            />
            <br />
            <TextField
              required
              placeholder="Seu Telefone"
              variant="filled"
              label="Telefone"
              onChange={formik.handleChange}
              defaultValue={formData.telephone}
              margin="normal"
              fullWidth
              name="telephone"
            />
            <span
              className="focus-input"
              data-placeholder={formik.values.telephone !== '' ? '' : 'telephone*'}
            />
            {formik.errors.telephone && (
              <span className="label-error">{formik.errors.telephone}</span>
            )}
            <br />
            <TextField
              required
              placeholder="Seu Objetivo"
              variant="filled"
              label="Objetivo"
              onChange={formik.handleChange}
              defaultValue={formData.objective}
              margin="normal"
              fullWidth
              name="objetivo"
            />
            <br />
            <Checkbox
              checked={formik.values.experience}
              onChange={formik.handleChange}
              defaultValue={formData.experience}
              margin="normal"
              name="experiencia"
            />
            <span>Possui experiências profissionais?</span>
            <br />
            <ButtonsDiv><Button color="primary"
              variant="contained"
              type='submit'
              onSubmit={passData()}            >
              Continuar
            </Button>
            </ButtonsDiv>
          </Form>
        </Output>
      </MainContainer>
    </Cadastro >
  );
};

export default FormUserDetails;

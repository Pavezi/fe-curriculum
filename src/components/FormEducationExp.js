import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import { Button, ButtonsDiv, Cadastro, MainContainer, Output, Form, Subtitle, ContainerInfos } from './styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useFormik } from 'formik';
import registerPerson from '../schemas/registerPerson.schema';

const FormEducationExp = ({ nextStep, prevStep, formData }) => {
  const initialValues = {
    curse_name: formData.curse_name,
    institution: formData.institution,
    start_date: formData.start_date,
    end_date: formData.end_date,
    bio: formData.bio,
  }

  const continua = () => {
    nextStep();
  };
  const back = (e) => {
    prevStep();
  };
  const formik = useFormik({
    initialValues,
    onSubmit: continua,
    // validationSchema: registerPerson(),

  })

  const passData = () => {
    formData.curse_name = formik.values.curse_name;
    formData.institution = formik.values.institution;
    formData.start_date = formik.values.start_date;
    formData.end_date = formik.values.start_date;
    formData.birth_date = formik.values.birth_date;
    formData.bio = formik.values.bio;
    console.log(formData);
  }
  return (
    <Cadastro>
      <MainContainer>
        <Output open
          fullWidth
          maxWidth='sm'>
          <Form onSubmit={e => formik.handleSubmit(e)}>
            <ContainerInfos>
              <Subtitle>Experiência Educacional</Subtitle>
            </ContainerInfos>
            <TextField
              required
              variant="filled"
              label="Formação"
              onChange={formik.handleChange}
              value={formData.curse_name}
              margin="normal"
              fullWidth
              name='curse_name'
            />
            <span
              className="focus-input"
              data-placeholder={formik.values.curse_name !== '' ? '' : 'Nome'}
            />
            {formik.errors.nome && (
              <span className="label-error">{formik.errors.curse_name}</span>
            )}
            <br />
            <TextField
              required
              variant="filled"
              label="Instituição"
              onChange={formik.handleChange}
              value={formData.institution}
              margin="normal"
              fullWidth
              name='institution'
            />
            <span
              className="focus-input"
              data-placeholder={formik.values.institution !== '' ? '' : 'Nome'}
            />
            {formik.errors.nome && (
              <span className="label-error">{formik.errors.institution}</span>
            )}
            <br />
            <TextField
              required
              variant="filled"
              placeholder="Seu start_date"
              label="Data de Início"
              onChange={formik.handleChange}
              defaultValue={formData.start_date}
              margin="normal"
              fullWidth
              name="start_date"
            />
            <span
              className="focus-input"
              data-placeholder={formik.values.start_date !== '' ? '' : 'start_date*'}
            />
            {formik.errors.birth_date && (
              <span className="label-error">{formik.errors.start_date}</span>
            )}
            <br />
            <TextField
              required
              variant="filled"
              label="Data da Conclusão"
              onChange={formik.handleChange}
              defaultValue={formData.end_date}
              margin="normal"
              fullWidth
              name='end_date'
            />
            <span
              className="focus-input"
              data-placeholder={formik.values.end_date !== '' ? '' : 'end_date*'}
            />
            {formik.errors.end_date && (
              <span className="label-error">{formik.errors.end_date}</span>
            )}
            <ButtonsDiv><Button color="primary"
              variant="contained"
              type='submit'
              onSubmit={passData()}            >
              Continuar
            </Button>
              <Button color="primary"
                variant="contained"
                type='submit'
                onSubmit={passData()}            >
                Voltar
              </Button>
            </ButtonsDiv>
          </Form>
        </Output>
      </MainContainer>
    </Cadastro >
  );
};

export default FormEducationExp;

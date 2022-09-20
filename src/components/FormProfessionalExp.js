import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, ButtonsDiv, Cadastro, MainContainer, Output, Form, Subtitle, ContainerInfos } from './styles';
import { useFormik } from 'formik';
import registerPerson from '../schemas/registerPerson.schema';

const FormEducationExp = ({ nextStep, prevStep, formData }) => {
  const initialValues = {
    enterprise: formData.enterprise,
    start_date: formData.start_date,
    end_date: formData.end_date,
    duty: formData.duty,
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
    formData.enterprise = formik.values.enterprise;
    formData.start_date = formik.values.start_date;
    formData.end_date = formik.values.start_date;
    formData.duty = formik.values.duty;
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
              value={formData.enterprise}
              margin="normal"
              fullWidth
              name='enterprise'
            />
            <span
              className="focus-input"
              data-placeholder={formik.values.enterprise !== '' ? '' : 'Nome'}
            />
            {formik.errors.nome && (
              <span className="label-error">{formik.errors.enterprise}</span>
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
            <ButtonsDiv>
              <Button color="primary"
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

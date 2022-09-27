import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalSkills from './FormPersonalSkills';
import FormProfessionalExp from './FormProfessionalExp';
import FormPersonalEducation from './FormPersonalEducation';
import FormCJ from './CadastrarJogador/CadastrarJogador';
import Confirm from './Confirm';
import Success from './Success';
import cadastrarJogador from '../schemas/cadastrarPersona.schema';

const UserForm = () => {
  const [step, setStep] = useState(1)
  const [fields, setFields] = useState({
    nome: '',
    cpf: '',
    birthDate: '',
    email: '',
    endereco: '',
    curse: '',
    objetivo: '',
  });
  
  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
    console.log(step + 'next');
  };

  // Go back to prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Handle fields change
  // const handleChange = (input, e) => {
  //   let temp = fields;
  //   temp[input] = e.target?.value;
  //   setFields(temp);
  //   console.log(fields);
  //   console.log(step + 'handle');
  //   console.log(step + 'e');
  // };
  const { name, email, cpf, birthDate, occupation, adress, bio, curse, objective } = fields;
  const values = { name, email, cpf, birthDate, occupation, adress, bio, curse, objective };
  switch (step) {
    case 1:
      return (
        //   <FormPersonalDetails
        //   nextStep={nextStep}
        //   prevStep={prevStep}
        //   handleChange={handleChange}
        //   values={values}
        // />
        <FormUserDetails
          nextStep={nextStep}
          prevStep={prevStep}
          // handleChange={handleChange}
          values={values}
          fields={fields}
        />
        // <div></div>
      );
    // return <FormCJ
    // nextStep={nextStep}
    // handleChange={handleChange}
    //   values={values}/>;
    case 2:
      return (
        <FormPersonalEducation
          nextStep={nextStep}
          prevStep={prevStep}
          // handleChange={handleChange}
          values={values}
        />);

    case 3:

      return (
        <FormPersonalSkills
          nextStep={nextStep}
          prevStep={prevStep}
          // handleChange={handleChange}
          values={values}
          fields={fields}

        />
      );
    case 4:
      return (
        // <Confirm
        //   nextStep={nextStep()}
        //   prevStep={prevStep()}
        //   values={values}
        // />
        <div></div>);
    case 5:
      // return <Success />;
      return <div></div>
    default:
      (console.log('This is a multi-step form built with React.'))
  }
}

export default UserForm

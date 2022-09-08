import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormProfessionalExp from './FormProfessionalExp';
import FormPersonalEducation from './FormPersonalEducation';
import FormCJ from './CadastrarJogador/CadastrarJogador';
import Confirm from './Confirm';
import Success from './Success';
import cadastrarJogador from '../schemas/cadastrarPersona.schema';

const UserForm = () => {
  const [step, setStep] = useState(1)
  const [fields, setFields] = useState({
    name: '',
    email: '',
    occupation: '',
    adress: '',
    bio: '',
    objective: '',
  });

  // Proceed to next step
  const nextStep = () => {
    console.log(step + 'next');
    setStep(step + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    console.log(step);
    setStep(step - 1);
  };

  // Handle fields change
  const handleChange = (input,e) => {
    let temp = fields;
    temp[input] = e.target.value;
    setFields(temp);
    console.log(fields);
  };
    const { name, email, occupation, adress, bio,objective } = fields;
    const values = { name, email, occupation, adress, bio,objective };
   switch (step) {
      case 1:
        return (
          <FormUserDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
          // <FormUserDetails
          //   nextStep= {nextStep()}
          //   handleChange={handleChange()}
          //   values={values}
          // />
          // <div></div>
        );
        // return <FormCJ
        // nextStep={nextStep}
        // handleChange={handleChange}
        //   values={values}/>;
      case 2:
        return (
          <FormProfessionalExp
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
        );
      case 3:
        return (
          <FormPersonalEducation
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />);
      

      case 4:
        return (
          // <Confirm
          //   nextStep={nextStep()}
          //   prevStep={prevStep()}
          //   values={values}
          // />
<div></div>        );
      case 5:
        // return <Success />;
        return <div></div>
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }

  export default UserForm

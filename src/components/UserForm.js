import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalSkills from './FormPersonalSkills';
import FormProfessionalExp from './FormProfessionalExp';
import FormPersonalEducation from './FormPersonalEducation';


const UserForm = () => {
  const [step, setStep] = useState(1)
  const [fields, setFields] = useState({
    nome: '',
    cpf: '',
    birthDate: '',
    email: '',
    endereco: '',
    curse: '',
    objective: '',
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
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          prevStep={prevStep}
          // handleChange={handleChange}
          fields={fields}
        />);
    case 3:
      return (
        <FormPersonalEducation
          nextStep={nextStep}
          prevStep={prevStep}
          // handleChange={handleChange}
          fields={fields}       
           />);

    case 2:
      return (
        <FormPersonalSkills
          nextStep={nextStep}
          prevStep={prevStep}
          // handleChange={handleChange}
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

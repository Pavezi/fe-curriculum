import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormProfessionalExp from './FormProfessionalExp';
import FormEducationExp from './FormEducationExp';
import Confirm from './Confirm';
import Success from './Success';
import registerPerson from '../schemas/registerPerson.schema';

const UserForm = () => {
  const [step, setStep] = useState(1)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf:'',
    curse: '',
    birth_date:'',
    adress: '',
    telephone: '',
    objective: '',
  });

  const nextStep = () => {
    console.log(step + 'next');
    setStep(step + 1);
  };

  const prevStep = () => {
    console.log(step);
    setStep(step - 1);
  };

  const { name, password, email, cpf, curse, birth_date, adress, telephone, objective, professional_exp, educational_exp } = formData;
  const values = { name, password, email, cpf, curse, birth_date, adress, telephone, objective, professional_exp, educational_exp };
  switch (step) {
    case 3:
      return (
        <FormUserDetails
          nextStep={nextStep}
          values={values}
          formData={formData}
        />
      );
    case 2:
      return (
        <FormProfessionalExp
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
          formData={formData}
        />
      );
    case 1:
      return (
        <FormEducationExp
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
          formData={formData}
        />);


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

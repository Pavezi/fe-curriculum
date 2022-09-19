import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormProfessionalExp from './FormProfessionalExp';
import FormPersonalEducation from './FormEducationExp';
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
    bio: '',
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

  const { name, password, email, cpf, curse, birth_date, adress, telephone, bio, objective, professional_exp, educational_exp } = formData;
  const values = { name, password, email, cpf, curse, birth_date, adress, telephone, bio, objective, professional_exp, educational_exp };
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
          formData={formData}
          setFormData={setFormData}
        />
      );
    case 2:
      return (
        <FormProfessionalExp
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
        />
      );
    case 3:
      return (
        <FormPersonalEducation
          nextStep={nextStep}
          prevStep={prevStep}
          values={values}
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

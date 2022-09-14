import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import { ButtonLogin, ButtonsDiv, Cadastro, MainContainer, Output } from './styles';

const initialValues = {
    friends: [
        {
            empresa: '',
            funcao: '',
            dataInicio: '',
            dataFim: '',
            atividades: '',
            more: '',
        },
    ],
};
const continua = (nextStep) => {
    nextStep();
};
const back = (e, prevStep) => {
    prevStep()
}
const InviteFriends = () => (
    
    <Cadastro>
        <h1>Invite friends</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
                // continua
            }}
        >
            {({ values }) => (
                <Output open
                    fullWidth
                    maxWidth='sm'>
                    <FieldArray name="friends">
                        {({ insert, remove, push }) => (
                            <div>
                                {values.friends.length > 0 &&
                                    values.friends.map((friend, index) => (
                                        <div className="row" key={index}>
                                            <div className="col">
                                                <label htmlFor={`friends.${index}.empresa`}>Empresa</label>
                                                <Field
                                                    name={`friends.${index}.empresa`}
                                                    placeholder="Jane Doe"
                                                    type="text"
                                                />
                                                <ErrorMessage
                                                    name={`friends.${index}.empresa`}
                                                    component="div"
                                                    className="field-error"
                                                />
                                            </div>
                                            <div className="col">
                                                <label htmlFor={`friends.${index}.funcao`}>Função</label>
                                                <Field
                                                    name={`friends.${index}.funcao`}
                                                    placeholder="jane@acme.com"
                                                    type="funcao"
                                                />
                                                <ErrorMessage
                                                    name={`friends.${index}.funcao`}
                                                    component="div"
                                                    className="field-error"
                                                />
                                            </div>
                                            <div className="col">
                                                <button
                                                    type="button"
                                                    className="secondary"
                                                    onClick={() => remove(index)}
                                                >
                                                    X
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                {/* <button
                                    type="button"
                                    className="secondary"
                                    onClick={() => push({ empresa: '', funcao: '', dataInicio: '', dataFim: '', atividades: '', more: '', })}
                                >
                                    Add Friend
                                </button> */}
                                <ButtonLogin color="primary"
                            variant="contained"
                            type='submit'
                                    onClick={() => push({ empresa: '', funcao: '', dataInicio: '', dataFim: '', atividades: '', more: '', })}

                        >
                                    Add
                        </ButtonLogin>
                            </div>
                        )}
                    </FieldArray>
                    {/* <ButtonsDiv>
                        <ButtonLogin color="primary"
                            variant="contained"
                            type='submit'
                        >
                            Continuar
                        </ButtonLogin>
                        <ButtonLogin color="primary"
                            variant="contained"
                            onClick={back}>
                            Voltar
                        </ButtonLogin>
                    </ButtonsDiv>    */}
                                 </Output>
            )}
        </Formik>
    </Cadastro>
);

export default InviteFriends
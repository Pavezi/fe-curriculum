import * as Yup from 'yup'
import nomeCompletoValidator from './nomeCompleto.validator'
import cpfValidator from './cpf.validator'
import emailValidator from './email.validator'

const registerPerson = () => {

  return Yup.object().shape({
    name: Yup.string()
      .required('Nome obrigatório')
      .test('isValidNomeCompleto', 'Deve possuir nome e sobrenome', nomeCompletoValidator),

    password: Yup.string()
      .required('Senha obrigatória'),

    email: Yup.string()
      .required('Email obrigatório')
      .test('isValidEmail', 'Deve ser um email válido', emailValidator),

    telephone: Yup.string()
      .required('Telefone obrigatório')
      .max(15, 'Formato inválido'),

    cpf: Yup.string()
      .required('CPF obrigatório')
      .test('isValidCpfOrCnpj', 'Deve ser um CPF válido', cpfValidator)
      .max(14, 'Formato inválido'),

    curse: Yup.string()
      .required('Curso obrigatório'),

    birth_date: Yup.string()
      .required('Data de nascimento obrigatório'),

    // endereco: Yup.string()
    //   .required('Endereço obrigatório'),

    // cep: Yup.string()
    //   .required('CEP obrigatório'),

    // cidade: Yup.string()
    //   .required('Cidade obrigatória'),

    // bairro: Yup.string()
    //   .required('Bairro obrigatório'),

    // estado: Yup.string()
    //   .required('Estado obrigatório')
    //   .length(2, 'Apenas a sigla')
    //   .min(2, 'campo invalido'),

  })
}

export default registerPerson
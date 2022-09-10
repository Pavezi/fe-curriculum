import * as Yup from 'yup'
import nomeCompletoValidator from './nomeCompleto.validator'
import cpfValidator from './cpf.validator'
import emailValidator from './email.validator'

const cadastrarPersona = () => {
  
  return Yup.object().shape({
  // codigo: Yup.string()
  //   .required('Código do jogador obrigatório')
  //   .min(1, 'campo invalido'),

  nome: Yup.string()
    .required('Nome obrigatório')
    .test('isValidNomeCompleto', 'Deve possuir nome e sobrenome', nomeCompletoValidator),

  email: Yup.string()
    .required('Email obrigatório')
    .test('isValidEmail', 'Deve ser um email válido', emailValidator),
    
  // telefone: Yup.string()
  //   .required('Telefone obrigatório')
  //   .max(15, 'Formato inválido'),

  dataNacimento: Yup.string()
    .required('Data de nascimento obrigatório'),

  // sexo: Yup.string()
  //   .required('Sexo obrigatório')
  //   .length(1, 'M/F/O'),

  cpf: Yup.string()
    .required('CPF obrigatório')
    .test('isValidCpfOrCnpj', 'Deve ser um CPF válido', cpfValidator)
    .max(14, 'Formato inválido'),

  endereco: Yup.string()
    .required('Endereço obrigatório'),

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


})}

export default cadastrarPersona
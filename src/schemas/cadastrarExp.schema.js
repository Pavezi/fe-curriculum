import * as Yup from 'yup'

const cadastrarCentroEsportivoSchema = () => Yup.object().shape({
  nome: Yup.string()
    .required('Nome obrigatório'),

  endereco: Yup.string()
    .required('Endereço obrigatório'),

  complemento: Yup.string(),

  cep: Yup.string()
    .required('CEP obrigatório'),

  cidade: Yup.string()
    .required('Cidade obrigatória'),

  bairro: Yup.string()
    .required('Bairro obrigatório'),

  estado: Yup.string()
    .required('Estado obrigatório')
    .length(2, 'Apenas a sigla')
    .min(2, 'campo invalido'),

})

export default cadastrarCentroEsportivoSchema
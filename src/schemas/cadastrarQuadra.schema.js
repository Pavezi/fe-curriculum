import * as Yup from 'yup'

const cadastrarQuadra = () => Yup.object().shape({
  codigo: Yup.string()
    .required('Código da quadra obrigatório')
    .min(1, 'campo invalido'),

  nome: Yup.string()
    .required('Nome obrigatório'),

  centroDesportivo: Yup.string(),

  tipo: Yup.string(),
})

export default cadastrarQuadra
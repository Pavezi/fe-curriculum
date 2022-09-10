import * as Yup from 'yup'

const cadastrarPartida = () => Yup.object().shape({
  codigo: Yup.string()
    .required('Código da partida obrigatório')
    .min(1, 'campo invalido'),

  codigoCentroDesportivo: Yup.string()
    .required('Código do centro desportivo obrigatório')
    .min(1, 'campo invalido'),

  codigoQuadra: Yup.string()
    .required('Código da quadra obrigatório')
    .min(1, 'campo invalido'),

  data: Yup.string()
    .required('Data do jogo obrigatório'),

  hora: Yup.string()
    .required('Hora do jogo obrigatório'),

  maximoJogadores: Yup.string()
    .required('Maximo de jogadores')
    .max(99),

  donoPartida: Yup.string(),

  precoPorJogador: Yup.string()
    .required('Preço por jogador obrigatório'),
})

export default cadastrarPartida
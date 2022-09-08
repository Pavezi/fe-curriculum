import { useCallback } from "react";
import { useFormik } from 'formik';
import cadastrarJogador from '../../schemas/cadastrarPersona.schema'

import './Form.css';
import { Cadastro, ButtonLogin,ButtonsDiv } from "./styles";

const FormCJ = () => {
  const initialValues = {
    nome: '',
    dataNacimento: '',
    sexo: '',
    cpf: '',
    endereco: '',
    cep: '',
    cidade: '',
    bairro: '',
    estado: '',
    objetivo: '',
  }

  const onSubmit = useCallback((values) => {
    const jogadores = []

    if (JSON.parse(localStorage.getItem('jogadores'))) {
      jogadores.push(...JSON.parse(localStorage.getItem('jogadores')))
    }

    if (jogadores) {
      jogadores.push(values)

      localStorage.setItem('jogadores', JSON.stringify(jogadores) )
    } else {
      localStorage.setItem('jogadores', JSON.stringify(values) )
    }
  }, [])

  const formik = useFormik({
    initialValues,
    validationSchema: cadastrarJogador(),
    onSubmit,
  })

  return (
    <Cadastro>
      <form className="login-form" onSubmit={ formik.handleSubmit }>

        <div className="space-div"/>

        <div className="wrap-input">
          <input
            className={formik.values.nome !== "" ? "has-val input" : "input"}
            id="nome"
            name="nome"
            value={formik.values.nome}
            onChange={formik.handleChange}
            onBlur={ formik.handleBlur }
          />
          <span
            className="focus-input"
            data-placeholder={ formik.values.nome !== '' ? '' : 'Nome'}
          />
        </div>
        {formik.errors.nome && formik.touched.nome && (
          <span className="label-error">{ formik.errors.nome }</span>
        )}

        <div className="space-div"/>

        <div className="wrap-input">
          <input
            className={formik.values.dataNacimento !== "" ? "has-val input" : "input"}
            id="dataNacimento"
            name="dataNacimento"
            value={formik.values.dataNacimento}
            onChange={formik.handleChange}
            onBlur={ formik.handleBlur }
          />
          <span
            className="focus-input"
            data-placeholder={ formik.values.dataNacimento !== '' ? '' : 'Data de nascimento*'}
          />
        </div>
        {formik.errors.dataNacimento && formik.touched.dataNacimento && (
          <span className="label-error">{ formik.errors.dataNacimento }</span>
        )}

        <div className="space-div"/>

        <div className="wrap-input">
          <input
            className={formik.values.sexo !== "" ? "has-val input" : "input"}
            id="sexo"
            name="sexo"
            value={formik.values.sexo}
            onChange={formik.handleChange}
            onBlur={ formik.handleBlur }
          />
          <span
            className="focus-input"
            data-placeholder={ formik.values.sexo !== '' ? '' : 'Sexo*'}
          />
        </div>
        {formik.errors.sexo && formik.touched.sexo && (
          <span className="label-error">{ formik.errors.sexo }</span>
        )}

        <div className="space-div"/>

        <div className="wrap-input">
          <input
            className={formik.values.cpf !== "" ? "has-val input" : "input"}
            id="cpf"
            name="cpf"
            value={formik.values.cpf}
            onChange={formik.handleChange}
            onBlur={ formik.handleBlur }
          />
          <span
            className="focus-input"
            data-placeholder={ formik.values.cpf !== '' ? '' : 'CPF*'}
          />
        </div>
        {formik.errors.cpf && formik.touched.cpf && (
          <span className="label-error">{ formik.errors.cpf }</span>
        )}

        <div className="space-div"/>

        <div className="wrap-input">
          <input
            className={formik.values.endereco !== "" ? "has-val input" : "input"}
            id="endereco"
            name="endereco"
            value={formik.values.endereco}
            onChange={formik.handleChange}
            onBlur={ formik.handleBlur }
          />
          <span
            className="focus-input"
            data-placeholder={ formik.values.endereco !== '' ? '' : 'Endereco*'}
          />
        </div>
        {formik.errors.endereco && formik.touched.endereco && (
          <span className="label-error">{ formik.errors.endereco }</span>
        )}

        <div className="space-div"/>

        <div className="wrap-input">
          <input
            className={formik.values.cep !== "" ? "has-val input" : "input"}
            id="cep"
            name="cep"
            value={formik.values.cep}
            onChange={formik.handleChange}
            onBlur={ formik.handleBlur }
          />
          <span
            className="focus-input"
            data-placeholder={ formik.values.cep !== '' ? '' : 'CEP*'}
          />
        </div>
        {formik.errors.cep && formik.touched.cep && (
          <span className="label-error">{ formik.errors.cep }</span>
        )}

        <div className="space-div"/>

        <div className="wrap-input">
          <input
            className={formik.values.cidade !== "" ? "has-val input" : "input"}
            id="cidade"
            name="cidade"
            value={formik.values.cidade}
            onChange={formik.handleChange}
            onBlur={ formik.handleBlur }
          />
          <span
            className="focus-input"
            data-placeholder={ formik.values.cidade !== '' ? '' : 'Cidade*'}
          />
        </div>
        {formik.errors.cidade && formik.touched.cidade && (
          <span className="label-error">{ formik.errors.cidade }</span>
        )}

        <div className="space-div"/>

        <div className="wrap-input">
          <input
            className={formik.values.bairro !== "" ? "has-val input" : "input"}
            id="bairro"
            name="bairro"
            value={formik.values.bairro}
            onChange={formik.handleChange}
            onBlur={ formik.handleBlur }
          />
          <span
            className="focus-input"
            data-placeholder={ formik.values.bairro !== '' ? '' : 'Bairro*'}
          />
        </div>
        {formik.errors.bairro && formik.touched.bairro && (
          <span className="label-error">{ formik.errors.bairro }</span>
        )}

        <div className="space-div"/>

        <div className="wrap-input">
          <input
            className={formik.values.estado !== "" ? "has-val input" : "input"}
            id="estado"
            name="estado"
            value={formik.values.estado}
            onChange={formik.handleChange}
            onBlur={ formik.handleBlur }
          />
          <span
            className="focus-input"
            data-placeholder={ formik.values.estado !== '' ? '' : 'Estado*'}
          />
        </div>
        {formik.errors.estado && formik.touched.estado && (
          <span className="label-error">{ formik.errors.estado }</span>
        )}

        <div className="space-div"/>

        <div className="wrap-input">
          <input
            className={formik.values.objetivo !== "" ? "has-val input" : "input"}
            id="objetivo"
            name="objetivo"
            value={formik.values.objetivo}
            onChange={formik.handleChange}
            onBlur={ formik.handleBlur }
          />
          <span
            className="focus-input"
            data-placeholder={ formik.values.objetivo !== '' ? '' : 'Posição preferida do jogador'}
          />
        </div>

        <div className="space-div"/>

        <div className="wrap-input">
          <input
            className={formik.values.jogoPreferido !== "" ? "has-val input" : "input"}
            id="jogoPreferido"
            name="jogoPreferido"
            value={formik.values.jogoPreferido}
            onChange={formik.handleChange}
            onBlur={ formik.handleBlur }
          />
          <span
            className="focus-input"
            data-placeholder={ formik.values.jogoPreferido !== '' ? '' : 'Tipo de jogo preferido do jogador'}
          />
        </div>
        {/* <div className="container-login-form-btn">
          <button className="login-form-btn" type="button" onClick={ () => formik.resetForm() }>Limpar</button>
          <button className="login-form-btn" onClick={continua} type="submit">Próximo</button>
        </div> */}
        <ButtonsDiv>
            <ButtonLogin color="primary"
              variant="contained"
              onClick={this.continua}>
              Continuar
            </ButtonLogin>
            <ButtonLogin color="primary"
              variant="contained"
              onClick={ () => formik.resetForm() }>
              Limpar
            </ButtonLogin>
          </ButtonsDiv>
      </form>
    </Cadastro>
  );
};

export default FormCJ
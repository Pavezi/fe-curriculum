import React from "react";
import * as Yup from "yup";
import { FormikStepper, FormikStep, InputField } from "formik-stepper";

import TextField from '@material-ui/core/TextField';
import { useFormik, Field, } from "formik";

import './index.scss'
import { CardContent, Card, Box, } from "@material-ui/core";

const validationSchema = Yup.object().shape({
	nome: Yup.string()
		.required('Nome obrigatório'),
	// .test('isValidNomeCompleto', 'Deve possuir nome e sobrenome'),

	email: Yup.string()
		.required('Email obrigatório'),
	// .test('isValidEmail', 'Deve ser um email válido'),

	// dataNacimento: Yup.string()
	// 	.required('Data de nascimento obrigatório'),

	// cpf: Yup.string()
	// 	.required('CPF obrigatório')
	// 	.test('isValidCpfOrCnpj', 'Deve ser um CPF válido', cpfValidator)
	// 	.max(14, 'Formato inválido'),

	// endereco: Yup.string()
	// 	.required('Endereço obrigatório'),

	// Step 2

	nomeCadastrarExp: Yup.string()
		.required('Nome obrigatório'),

	enderecoCadastrarExp: Yup.string()
		.required('Endereço obrigatório')


	// Step 3

	// Step 4

});

export default function App() {
	const onSubmit = async (values, { setSubmitting }) => {
		console.log(values);
		setSubmitting(false); //// Important
	};

	const initialValues = {
		nome: '',
		email:'',
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

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	})

	return (
		<div className="Container">
			<div className="Cadastro">

				<FormikStepper
					/// Accept all Formik props
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
					labelsColor="secondary" /// The text label color can be root variables or css => #fff
					withStepperLine /// false as default and If it is false, it hides stepper line
					// nextBtnLabel="step" /// Next as default
					prevBtnLabel="return" /// Prev as default
					submitBtnLabel="Done" /// Submit as default
					nextBtnColor="primary" /// as default and The color can be root variables or css => #fff
					prevBtnColor="danger" /// as default and The color can be root variables or css => #fff
					submitBtnColor="success" /// as default and The color can be root variables or css => #fff
				>
					{/*  Step 1 */}
					<FormikStep
						label="Usuário" // Nome do step
						withIcons="fa fa-user" // to add icon into the circle must add icon as class Name like Fontawesome
						withNumbers /// If true, it hides the icon and shows the step number
						iconColor="white" /// The color can be root variables or css => #fff
						circleColor="danger" /// The color can be root variables or css => #fff
					>
						<InputField className="form__field" name="nome" placeholder="Nome" />
						<br/>
						<InputField className="form__field" name="email" placeholder="E-mail" />
						<br />
						<InputField className="form__field" name="email" placeholder="E-mail" />
						<br />

					</FormikStep>
					{/*  Step 2 */}
					<FormikStep
						label="Experiencias profissionais"
						withIcons="fa fa-lock"
						iconColor="white"
						circleColor="danger"
					>
						<div class="form__group field">
							<InputField name="nomeCadastrarExp" label="nomeCadastrarExp" />
						</div>

						<div class="form__group field">
						</div>
						<InputField name="enderecoCadastrarExp" label="enderecoCadastrarExp" />
					</FormikStep>

					{/*  Step 3 */}
					<FormikStep
						label="Login Info"
						withIcons="fa fa-lock"
						iconColor="white"
						circleColor="danger"
					>
						<InputField name="email" label="Email" type="email" />
						<InputField name="password" label="password" type="password" />
					</FormikStep>

					{/*  Step 4 */}
					<FormikStep
						label="Login Info"
						withIcons="fa fa-lock"
						iconColor="white"
						circleColor="danger"
					>
						<InputField name="email" label="Email" type="email" />
						<InputField name="password" label="password" type="password" />
					</FormikStep>
				</FormikStepper>

			</div>
		</div>


	);
}

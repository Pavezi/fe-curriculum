import React from "react";
import * as yup from 'yup';
import { useState } from "react";
import nomeCompletoValidator from '../schemas/nomeCompleto.validator';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function SignUpInfo({ formData, setFormData }) {
    const [status, setStatus] = useState({
        type: '',
        mengagem: '',
    });
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).max(32).required(),
    });
    // function validate() {
    //     let schema = Yup.object().shape({
    //         name: Yup.string('Nome obrigatório')
    //             .required('Nome obrigatório')
    //             .test('isValidNomeCompleto', 'Deve possuir nome e sobrenome', nomeCompletoValidator),
    //     });
    //     try {
    //         schema.validate(FormData);
    //         return true;
    //     } catch (err) {
    //         setStatus({
    //             type: 'error',
    //             mengagem: err.errors,
    //         }
    //         );
    //         return false;
    //     }
    // }
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
    };
return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="sign-up-container">
            <input
                type="text"
                placeholder="Nome..."
                value={formData.name}
                onChange={(event) =>
                    setFormData({ ...formData, name: event.target.value })
                }
            />
            
            <input
                type="text"
                placeholder="Email..."
                value={formData.email}
                onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
                }
            />
            <input
                {...register("password")}
                type="text"
                placeholder="Password..."
                value={formData.password}
                onChange={(event) =>
                    setFormData({ ...formData, password: event.target.value })
                }
            />
            <p>{errors.password?.message}</p>
            <br />
            <input
                {...register("password")}
                type="text"
                placeholder="Confirm Password..."
                value={formData.confirmPassword}
                onChange={(event) =>
                    setFormData({ ...formData, confirmPassword: event.target.value })
                }
            />
            <p>{errors.password?.message}</p>
            <br />
            <button type="submit">Sign in</button>

        </div>
    </form>
    );
}

export default SignUpInfo;
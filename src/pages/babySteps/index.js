import { useState } from "react";
import { ButtonLogin, ButtonsDiv, Cadastro, MainContainer, Output, InputEmail } from './styles';
export default function Form() {

    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) => {
        const { name, value} = e.target;
        setFormValues({...formValues, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.formEntries(formData);

    };
    console.log('*** formValues', formValues);

    return (
        // <form onSubmit={handleSubmit}>
        //     <input type="text" name="email" placeholder="email" onChange={handleInputChange}></input>
        //     <button type="submit">Enviar</button>
        // </form>
        <Cadastro>
            <InputEmail type="text" name="nome" placeholder="nome" onChange={handleInputChange} value={formValues.name || ''}></InputEmail>
            <InputEmail type="text" name="email" placeholder="email" onChange={handleInputChange} value={formValues.email || ''}></InputEmail>
            <select name="curso" onChange={handleInputChange} value={formValues.curso || ''} >
                <option value="">Sistemas de Informação</option>
                <option value="">Direito</option>

            </select>
            <ButtonsDiv>
                <InputEmail type="radio" name="exp " onChange={handleInputChange} value={formValues.email || 'true'}></InputEmail>Possui Experiência Profissional

            </ButtonsDiv>
        </Cadastro>
    )
}
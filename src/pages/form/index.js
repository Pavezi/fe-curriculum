import React, { useState, Link } from "react";
import SignUpInfo from "../../components/SingUpInfo";
import OtherInfo from "../../components/OtherInfo";
import PersonalInfo from "../../components/PeronsalInfo";
import FormUserDetails from "../../components/FormUserDetails";
import { Container, Header, ButtonLogin, MainTitle, ContainerInfos, Progressbar, } from "./styles"

function Form() {
    const [step, setStep] = useState(1)
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        other: "",
    });

    // Proceed to next step
    const nextStep = () => {
        // console.log(step + 'next');
        // setStep(step + 1);
        if (page === FormTitles.length - 1) {
            alert("FORM SUBMITTED");
            console.log(formData);
        } else {
            setPage((currPage) => currPage + 1);
        }
    };

    // Go back to prev step
    const prevStep = () => {
        // console.log(step);
        // setStep(step - 1);
        setPage((currPage) => currPage - 1);
    };

    const FormTitles = ["Sign Up", "Personal Info", "Other"];

    const PageDisplay = () => {
        if (page === 0) {
            return <FormUserDetails formData={formData} setFormData={setFormData} nextStep={nextStep}
             />;
        } else if (page === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData} nextStep={nextStep}
                prevStep={prevStep} />;
        } else {
            return <OtherInfo formData={formData} setFormData={setFormData}nextStep={nextStep} prevStep={prevStep}/>;
        }
    };

    return (<Container>
        <Header>
            <MainTitle>
                Base de currículos AMF

            </MainTitle>
            <div className="header">
                <h1>{FormTitles[page]}</h1>
            </div>
        </Header>
        <Progressbar>
            <div
                style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
            ></div>

        </Progressbar>
        <ContainerInfos>{PageDisplay()}
                    <ButtonLogin
                        disabled={page == 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1);
                        }}
                    >
                        Prev
                    </ButtonLogin>
                    <ButtonLogin
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                                alert("FORM SUBMITTED");
                                console.log(formData);
                            } else {
                                setPage((currPage) => currPage + 1);
                            }
                        }}
                    >
                        {page === FormTitles.length - 1 ? "Submit" : "Next"}
                    </ButtonLogin>
        </ContainerInfos>
    </Container>

    );
}

export default Form;
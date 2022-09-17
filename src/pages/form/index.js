import React, { useState, Link } from "react";
import SignUpInfo from "../../components/SingUpInfo";
import OtherInfo from "../../components/OtherInfo";
import PersonalInfo from "../../components/PeronsalInfo";
import FormUserDetails from "../../components/FormUserDetails";
import { Container, Header, ButtonLogin, MainTitle, ContainerInfos, Progressbar, } from "./styles"

function Form() {
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
    const FormTitles = ["Sign Up", "Personal Info", "Other"];

    const PageDisplay = () => {
        if (page === 0) {
            return <FormUserDetails formData={formData} setFormData={setFormData} page={setPage}
            />;
        } else if (page === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData} page={setPage}
            />;
        } else {
            return <OtherInfo formData={formData} setFormData={setFormData} page={setPage}/>;
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
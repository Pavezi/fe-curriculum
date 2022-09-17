import "./index.css";
import React, { useState } from "react";
import SignUpInfo from "../../components/SingUpInfo";
import OtherInfo from "../../components/OtherInfo";
import PersonalInfo from "../../components/PeronsalInfo";
import FormUserDetails from "../../components/FormUserDetails";
import nomeCompletoValidator from '../../schemas/nomeCompleto.validator';

function CSSForm() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        name: "",
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
            return <SignUpInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />;
        } else {
            return <OtherInfo formData={formData} setFormData={setFormData} />;
        }
    };
   
    return (
        <div className="form">
            <div className="progressbar">
                <div
                    style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
                ></div>
            </div>
            <div className="form-container">
                <div className="header">
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className="body">{PageDisplay()}</div>
                <div className="footer">
                    <button
                        disabled={page == 0}
                        onClick={() => {
                            setPage((currPage) => currPage - 1);
                        }}
                    >
                        Prev
                    </button>
                    <button
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
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CSSForm;
import { Route, Routes } from "react-router-dom";
import "./styles.js";
import { Cadastro, MainContainer, Output } from "./styles.js";

const Steps = () => {
    return (
        <Cadastro>
            <MainContainer>
                <Output>
                    <Routes>
                        <Route exact path="/cad/1">
                            1
                        </Route>
                        <Route exact path="/cad/2">
                            2
                        </Route>
                        <Route exact path="/cad/3">
                            3
                        </Route>
                        <Route exact path="/cad/4">
                            4
                        </Route>
                    </Routes>
                </Output>
            </MainContainer>
        </Cadastro>
    );
};

export default Steps;
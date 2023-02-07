import React from "react";
import RoutesApp from "./Routes/config";
import GlobalStyle from "./styles/global";

const App = () => {
    return (
        <>
            <React.StrictMode>
                <RoutesApp />
                <GlobalStyle />
            </React.StrictMode>
        </>
    );
};

export default App;

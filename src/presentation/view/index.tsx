import "core-js/stable";
import "regenerator-runtime/runtime"
import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@material-ui/core";

import { App } from "@presentation/view/app";

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline />
        <App />
    </React.StrictMode>,
    document.getElementById("app")
);

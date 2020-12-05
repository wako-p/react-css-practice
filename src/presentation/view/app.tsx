import React from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";

type AppProps = {
}

export const App = (props: AppProps) => {
    return (
        <MemoryRouter>
            <Switch>
                <Route exact path="/" />
            </Switch>
        </MemoryRouter>
    );

};

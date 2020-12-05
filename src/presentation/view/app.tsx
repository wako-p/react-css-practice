import React, { useState } from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import { NavBar } from "src/presentation/view/components/presentational/organisms/nav-bar";
import { Home } from "src/presentation/view/components/presentational/pages/home";
import { About } from "src/presentation/view/components/presentational/pages/about";

type AppProps = {
}

export const App = (props: AppProps) => {

    const [ message, setMessage ] = useState("Hello React!!");
    const classes = useStyles();

    const handleTestPromiseButtonClick = () => {
        const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
        (async () => {

            for (let i = 3; i > 0; i--) {
                await wait(1000);
                setMessage(`${i}`);
            }

            await wait(1000);
            setMessage("React, completely understood!!");
        })();
    };

    const handleTestActiveXButtonClick = () => {
        const wsh = new ActiveXObject("WScript.Shell");
        wsh.Run("notepad");
    };

    return (
        <MemoryRouter>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </MemoryRouter>
    );

};

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            "& > *": {
                margin: theme.spacing(1),
            },
        },
}));

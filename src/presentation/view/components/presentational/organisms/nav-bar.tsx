import React, { useState } from "react";
import { AppBar } from "@material-ui/core";

import { NavItems } from "../molecules/nav-items";
import { NavItem } from "../atoms/nav-item";

export const NavBar = () => {

    const [ selected, setSelected ] = useState(0);

    const handleTabChange = (event: React.ChangeEvent<{}>, newTabNumber: number) => {
        setSelected(newTabNumber);
    };

    return (
        <AppBar position="static">
            <NavItems
                value={selected}
                onChange={handleTabChange}
            >
                <NavItem label="Home" to="/" />
                <NavItem label="About" to="/about" />
            </NavItems>
        </AppBar>
    );
}

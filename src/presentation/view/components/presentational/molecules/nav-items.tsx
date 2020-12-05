import { Tabs, Toolbar } from "@material-ui/core";
import React from "react";

type NavItemsProps = {
    value: number;
    onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
    children?: React.ReactNode;
};

export const NavItems = (props: NavItemsProps) => {
    return (
        <Toolbar variant="dense">
            <Tabs
                value={props.value}
                onChange={props.onChange}
                TabIndicatorProps={{ style: { backgroundColor: "#fff" }}}
            >
                {props.children}
            </Tabs>
        </Toolbar>
    );
};

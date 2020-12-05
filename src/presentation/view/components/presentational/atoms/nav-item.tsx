import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "@material-ui/core";

type NavItemProps = {
    label: string;
    to: string;
};

export const NavItem = (props: NavItemProps) => {
    const { label, to, ...other } = props;
    return (
        <Tab label={label} to={to} component={Link} {...other} />
    );
};

import React from "react";
import styled from "styled-components";
import { Box } from "@material-ui/core";
import { ScatterChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Scatter } from "recharts";

const data1 = [
    { pos: 0x4000, detection: 14050 },
    { pos: 0x4010, detection: 15100 },
    { pos: 0x4020, detection: 16000 },
    { pos: 0x4030, detection: 15200 },
    { pos: 0x4040, detection: 14100 },
];

export const Home = () => {
    return (
        <React.Fragment>
            <Title>
                This is Home page.
            </Title>
            <ScatterChart
                width={600}
                height={300}
            >
                <XAxis type="number" dataKey={"pos"} name="pos" domain={['dataMin - 10', 'dataMax + 10']} />
                <YAxis type="number" dataKey={"detection"} name="detection" domain={['dataMin - 100', 'dataMax + 100']} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Scatter name="mitu" data={data1} fill="#8884d8" line shape="circle" />
            </ScatterChart>
        </React.Fragment>
    );
};

const Title = styled.h1`
`;

const Container = styled(Box)`
    display: flex;
    flex-flow: row nowrap;
    align-items: stretch;
    background-color: red;
    height: 100vh;
`;

const Result = styled(Box)`
    flex: 1 1 100vw;
    background-color: blueviolet;
`;

const Config = styled(Box)`
    flex: 0 0 300px;
    /* border: solid #999 1px; */
    /* background-color: #eee; */
    background-color: greenyellow;
`;

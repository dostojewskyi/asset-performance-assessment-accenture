import React, { useState }  from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {Navbar} from "../../components/navbar";
import {Bottombar} from "../../components/bottombar";
import {SubmitItems} from "../../components/submission/submitsurvey";
import SelectComponent from "../../components/assessment/selectsurvey";

const options = ['1', '2', '3', '4', '5', '6', '7'];
const variants = ['A']

const QA: React.FC = () => {
    return (
        <div>
            <SelectComponent options={options} variants={['B']} />
        </div>
    );
};

const SelectA: React.FC = () => {
    return (
        <div>
            <SelectComponent options={options} variants={['A']} />
        </div>
    );
};

const SelectB: React.FC = () => {
    return (
        <div>
            <SelectComponent options={options} variants={['B']} />
        </div>
    );
};

const SelectC: React.FC = () => {
    return (
        <div>
            <SelectComponent options={options} variants={['C']} />
        </div>
    );
};

const SelectD: React.FC = () => {
    return (
        <div>
            <SelectComponent options={options} variants={['D']} />
        </div>
    );
};

const SelectE: React.FC = () => {
    return (
        <div>
            <SelectComponent options={options} variants={['E']} />
        </div>
    );
};

const PageContainer = styled.div`
    ${tw`
        flex
        flex-col
        items-start
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

const Divider = styled.div`
  width: auto;
  hr {
    width: auto;
    height: auto;
  }
`;

export function AssessmentPage() {
    return <PageContainer>
        <Navbar />
        <br/>
        <br/>
        <SelectA />
        <br/>
        <br/>
        <SelectB />
        <br/>
        <br/>
        <SelectC />
        <br/>
        <br/>
        <SelectD />
        <br/>
        <br/>
        <SelectE />
        <br/>
        <br/>
        <SubmitItems />
        <Bottombar />
    </PageContainer>;
}

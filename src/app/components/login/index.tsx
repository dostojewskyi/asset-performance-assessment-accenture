import React, {useState} from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import Loginitems from "./loginitems";

const LogInContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    max-w-screen-xl
    place-content-end
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-center
  `};
`;

export function Logbar() {
    return (
        <LogInContainer>
            <Loginitems onSubmit={useState} />
        </LogInContainer>
    )
}
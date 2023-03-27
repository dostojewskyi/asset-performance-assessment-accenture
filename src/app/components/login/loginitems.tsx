import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const RowContainer = styled.ul`
    ${tw`
    list-none
    grid-rows-4
    col-span-2
    mx-auto
    `};
`;

const LogItem = styled.li`
  ${tw`
    font-bold
    text-xl
    md:text-base
    text-black
    mr-1
    md:mr-5
    transition
    duration-300
    ease-in-out
    `};
`;

const LogAction = styled.li`
  ${tw`
    text-xs
    md:text-base
    text-black
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-gray-700
    hover:font-bold
    `};
`;

export function LogItems() {
    return <RowContainer>
        <br/>
        <br/>
        <a>Welcome. Please Login or Register.</a>
        <LogItem>
            <a>Tenant: |___________|</a>
        </LogItem>
        <LogItem>
            <a>Email: |___________|</a>
        </LogItem>
        <LogItem>
            <a>Password: |___________|</a>
        </LogItem>
        <LogAction>
            <a href='#'>LogIn</a>
        </LogAction>
        <LogAction>
            <a href='#'>Register</a>
        </LogAction>
        <br/>
        <br/>
        <br/>
        <br/>
    </RowContainer>
}
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

const SubmitAction = styled.li`
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

export function SubmitItems() {
    return <RowContainer>
        <SubmitAction>
            <a href='/Result'>Submit Assessment</a>
        </SubmitAction>
        <br/>
        <br/>
        <br/>
        <br/>
    </RowContainer>
}
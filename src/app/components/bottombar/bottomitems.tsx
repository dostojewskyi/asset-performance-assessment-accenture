import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ListContainer = styled.ul`
  ${tw`
    flex
    justify-end
    w-full
    list-none
    bg-purple-800
    `};
`;

const BottomItem = styled.li`
  ${tw`
    text-xs
    text-white
    md:text-base
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-purple-200
    `};
`;

export function BottomItems() {
    return <ListContainer>
        <BottomItem>
            <a href='https://www.accenture.com/us-en/about/industry-x-index' target="_blank">Accenture IX</a>
        </BottomItem>
        <BottomItem>
            <a href='#'>Digital Manufacturing</a>
        </BottomItem>
        <BottomItem>
            <a href='#'>Imprint</a>
        </BottomItem>
        <BottomItem>
            <a href='#'>Privacy notice</a>
        </BottomItem>
    </ListContainer>
}
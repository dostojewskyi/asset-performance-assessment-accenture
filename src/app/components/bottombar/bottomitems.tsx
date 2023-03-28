import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const ListContainer = styled.ul`
  ${tw`
    flex
    justify-end
    w-full
    list-none
    bg-black
    `};
`;

const BottomItem = styled.li`
  ${tw`
    text-sm
    text-white
    md:text-base
    mr-1
    md:mr-5
    cursor-pointer
    transition
    duration-300
    ease-in-out
    hover:text-purple-200
    space-x-4
    `};
`;

export function BottomItems() {
    return <ListContainer>
        <BottomItem>
            <a href='https://www.accenture.com/us-en/about/industry-x-index' target="_blank">Accenture IX</a>
        </BottomItem>
        <BottomItem>
            <a href='https://www.accenture.com'>Digital Manufacturing</a>
        </BottomItem>
        <BottomItem>
            <a href='https://www.accenture.com'>Imprint</a>
        </BottomItem>
        <BottomItem>
            <a href='https://www.accenture.com'>Privacy notice</a>
        </BottomItem>
    </ListContainer>
}
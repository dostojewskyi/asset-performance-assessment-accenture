import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../responsive";
import menuStyles from "./menuStyles";

const ListContainer = styled.ul`
    ${tw`
    flex
    list-none
    `};
`;

const NavItem = styled.li`
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
  `};
`;

export function NavItems() {

    const  isMobile = useMediaQuery({ maxWidth: SCREENS.sm })

    if(isMobile)
        return (
            <Menu Styles={menuStyles}>
                <ListContainer>
                    <NavItem>
                        <a href='/HomePage'>Home</a>
                    </NavItem>
                    <NavItem>
                        <a href='/AssessmentPage'>Assessment</a>
                    </NavItem>
                    <NavItem>
                        <a href='#'>Result</a>
                    </NavItem>
                    <NavItem>
                        <a href='#'>Training</a>
                    </NavItem>
                </ListContainer>
            </Menu>
        );

    return <ListContainer>
        <NavItem>
            <a href='/'>Home</a>
        </NavItem>
        <NavItem>
            <a href='/Assessment'>Assessment</a>
        </NavItem>
        <NavItem>
            <a href='/Result'>Result</a>
        </NavItem>
        <NavItem>
            <a href='/Training'>Training</a>
        </NavItem>
    </ListContainer>
}
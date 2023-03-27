import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {Navbar} from "../../components/navbar";
import {Bottombar} from "../../components/bottombar";

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

export function TrainingPage() {
    return <PageContainer>
        <Navbar />
        <Divider />
        <Bottombar />
    </PageContainer>;
}

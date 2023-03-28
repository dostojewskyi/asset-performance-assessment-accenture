import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {Navbar} from "../../components/navbar";
import BgImg from "../../../assets/BgHomePage.png";
import {Logbar} from "../../components/login";
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

const Image = styled.div`
  width: auto;
  ${tw`h-auto max-w-screen-xl`};
  img {
    width: auto;
    height: 100%;
  }
`;

const Divider = styled.div`
  width: auto;
  hr {
    width: auto;
    height: auto;
  }
`;

export function HomePage() {
    return <PageContainer>
        <Navbar />
        <Image>
            <img src={BgImg} alt=''/>
        </Image>
        <br/>
        <br/>
        <Logbar />
        <br/>
        <br/>
        <Divider />
        <Bottombar />
    </PageContainer>;
}

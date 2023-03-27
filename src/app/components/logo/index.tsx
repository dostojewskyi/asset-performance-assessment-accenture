import React from "react";
import AcnIx from "../../../assets/2023-03-25 01_56_07-Acc_Industry_X_SvcMrk_Black_Purple_RGB.png"
import styled from "styled-components";
import tw from "twin.macro"

const LogoContainer = styled.div`
    ${tw`
        flex-initial
        items-start
    `};
`;

const Image = styled.div`
    width: auto;
    ${tw`h-6 md:h-9 max-w-lg`};
    img {
      width: auto;
      height: 100%;
    }
`;

export function Logo() {
    return <LogoContainer>
        <Image>
            <img src={AcnIx} alt='Accenture Industry X'/>
        </Image>
    </LogoContainer>
}

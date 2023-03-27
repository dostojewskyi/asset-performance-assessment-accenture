import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {Navbar} from "../../components/navbar";
import {Bottombar} from "../../components/bottombar";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

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

// getter
const A = localStorage.getItem('A');
const B = localStorage.getItem('B');
const C = localStorage.getItem('C');
const D = localStorage.getItem('D');
const E = localStorage.getItem('E');

const Chart = () => {

    const data = [
        { name: 'Skill A', x: A },
        { name: 'Skill B', x: B },
        { name: 'Skill C', x: C },
        { name: 'Skill D', x: D },
        { name: 'Skill E', x: E },
    ];

    return (
        <RadarChart height={500} width={500}
                    outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis />
            <Radar dataKey="x" stroke="purple"
                   fill="purple" fillOpacity={0.5} />
        </RadarChart>
    );
}

export function ResultPage() {
    return <PageContainer>
        <Navbar />
        <Chart />
        <a className="w-2/3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
        </a>
        <Divider />
        <Bottombar />
    </PageContainer>;
}

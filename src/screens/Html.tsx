import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import VerticalNavBar from "../components/VerticalNavBar";

//Styled Components
const HtmlContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(auto);
`;

const HtmlTitle = styled.h1`
    color: darkblue;
    text-shadow: 0px 0px 8px #943288;
    text-align: center;
    font-size: 4rem;
    padding-top: 1rem;
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 1rem;
    max-width: 100%;
    height: calc(auto);
`;


export default function Html() {
    const {t} = useTranslation();
    //Data
    const navItems = [
        {label: t('html_basics'), link: ""},
    ]

    return (
        <HtmlContainer>
            <div>
                <HtmlTitle>
                    {t('html_title')}
                </HtmlTitle>
            </div>

            <BodyContainer>
                <VerticalNavBar items={navItems}/>
            </BodyContainer>
        </HtmlContainer>
    );
}
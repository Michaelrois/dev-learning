import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 2rem;
    background-image: url("/images/html_background.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const Description = styled.p`
    width: 60%;
    margin: 0 auto;
    color: darkblue;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 1.5px 1.5px 2px #943288;
`;

export const DefaultHtml: React.FC = () => {
    const {t} = useTranslation();

    return (
        <Container>
            <Description>{t('default_html_description')}</Description>
        </Container>
    );
};
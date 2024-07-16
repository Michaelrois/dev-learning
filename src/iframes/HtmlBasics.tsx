import React from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";

const Title = styled.h1`
    color: darkblue;
    text-shadow: 2px 2px 3px #943288;
    text-align: center;
    font-size: 2.5rem;
`;

export default function HtmlBasics() {
    const {t} = useTranslation();

    return (
        <div>
            <Title>{t('html_basics')}</Title>
        </div>
    );
};
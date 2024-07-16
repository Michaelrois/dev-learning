import React from 'react';
import styled from 'styled-components';
import {useTranslation} from "react-i18next";

const FooterElement = styled.div`
    text-align: center;
    padding-top: 1.5rem;
    font-size: 0.8rem;
    color: darkblue;
    text-shadow: 1px 1px 2px #943288;
    font-style: italic;
`;

export default function Footer() {
    const {t} = useTranslation();
    return (
        <>
            <FooterElement>
                {t('footer_information')}
            </FooterElement>
        </>
    )
};
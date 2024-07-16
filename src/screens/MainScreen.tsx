import React from 'react';
import {Amplify} from "aws-amplify";
import awsConfig from "../amplifyconfiguration.json";
import {useTranslation} from 'react-i18next';
import '../i18n';
import styled from "styled-components";

Amplify.configure(awsConfig);

const HomeTitle = styled.h1`
    color: darkblue;
    text-shadow: 1px 1px 2px #943288;
    text-align: center;
    font-size: 2.5rem;
    padding-top: 1.5rem;
`;

export default function MainScreen() {
    const {t} = useTranslation();
    return (
        <div>
            <HomeTitle>
                {t('home_title')}
            </HomeTitle>
        </div>
    );
}
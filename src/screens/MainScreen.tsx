import React from 'react';
import {Amplify} from "aws-amplify";
import awsConfig from "../amplifyconfiguration.json";
import {useTranslation} from 'react-i18next';
import styled from "styled-components";
import HorizontalNavBar from "../components/HorizontalNavBar";
import Footer from "../components/Footer";

Amplify.configure(awsConfig);

const HomeTitle = styled.h1`
    color: darkblue;
    text-shadow: 1px 1px 2px #943288;
    text-align: center;
    font-size: 2.5rem;
    padding-top: 2rem;
`;

const BodyText = styled.p`
    width: 50%;
    margin: 0 auto;
    color: darkblue;
    text-shadow: 1px 1px 2px #943288;
    text-align: start;
    font-size: 1.5rem;
    padding-top: 4rem;
`;


export const MainScreen: React.FC = () => {
    const {t} = useTranslation();
    return (
        <>
            <HorizontalNavBar/>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '85vh',
                    paddingTop: '8rem',

                }}
            >
                <HomeTitle>
                    {t('home_title')}
                </HomeTitle>

                <BodyText>
                    <img className="quotes" src='/images/LeftQuotes.svg' alt="left quotes" title="left quotes"/>
                    {t('body_text')}
                    <img className="quotes" src='/images/RightQuotes.svg' alt="right quotes" title="right quotes"/>
                </BodyText>
            </div>
            <Footer/>
        </>
    );
};
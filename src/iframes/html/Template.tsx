import React from 'react';
import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {IframeNavBar} from "../../components/IframeNavBar";

//Styled Components
const Title = styled.h1`
    color: darkblue;
    text-shadow: 2px 2px 3px #943288;
    text-align: center;
    font-size: 2.5rem;
`;

const SubTitle = styled.h2`
    color: darkblue;
    text-shadow: 1px 1px 3px #943288;
    text-align: start;
    text-decoration: underline;
    font-size: 1.5rem;
    padding: 40px 0 0 70px;
`;

const TextContainer = styled.div`
    width: 60%;
    margin: 0 auto;
    font-size: 1rem;
    color: darkblue;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const ExampleTitle = styled.h3`
    color: darkblue;
    text-shadow: 1px 1px 3px #943288;
    text-decoration: underline;
    font-size: 1.5rem;
`;

const ExampleContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    top: -45px;
    left: 25px;
    color: darkblue;
`;

const ExampleSubTitle = styled.h4`
    color: darkblue;
    text-shadow: 1px 1px 3px #943288;
    font-size: 1.2rem;
`;

const ExampleCode = styled.p`
    color: darkblue;
    font-size: 1rem;
    font-weight: bold;
    position: relative;
    top: 15px;
    left: 15px;
`;

const ResultContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    top: -80px;
    left: 25px;
    color: darkblue;
`;

const ExampleResult = styled.p`
    color: darkblue;
    font-size: 1rem;
    font-weight: bold;
    position: relative;
    top: 0;
    left: 15px;
`;

const Section = styled.section`
    width: 60%;
    height: 130px;
    border-bottom: 3px solid darkblue;
    margin-bottom: 30px;
`;

export const Template = () => {
    const {t} = useTranslation();
    const navItems = [
        {label: t(''), link: ''}
    ]

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Principal Title */}
            <Title>{t('')}</Title>

            {/*Iframe Navigation Bar */}
            <IframeNavBar items={navItems} />

            {/*First section - */}
            <section>
                <SubTitle id=''>{t('')}</SubTitle>
                <TextContainer>
                    <p>{t('')}</p>
                    <ExampleTitle>{t('example')}</ExampleTitle>
                    <Container>
                        <Section>
                            {/* Example Code */}
                            <ExampleContainer>
                                <ExampleSubTitle> : </ExampleSubTitle>
                                <ExampleCode>&lt;h1&gt;{t('')}&lt;/h1&gt;</ExampleCode>
                            </ExampleContainer>
                            {/* Result Example */}
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult
                                    style={{top: '-6px'}}

                                >
                                    {/* Result Code */}
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                    </Container>
                </TextContainer>
            </section>
        </div>
    );
};
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
    height: 100px;
    border-bottom: 3px solid darkblue;
    margin-bottom: 30px;
`;

export const Tables = () => {
    const {t} = useTranslation();
    const navItems = [
        {label: t('html_tag_table'), link: '#tagTable'},
        {label: 'Caption', link: '#caption'},
        {label: 'Thead', link: '#thead'},
        {label: 'Tbody', link: '#tbody'},
        {label: 'Tfoot', link: '#tfoot'},
        {label: 'Tr', link: '#tr'},
        {label: 'Td', link: '#td'},
    ]

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Principal Title */}
            <Title>{t('html_tables_title')}</Title>

            {/*Iframe Navigation Bar */}
            <IframeNavBar items={navItems}/>

            {/* First section - The 'table' tag */}
            <section>
                <SubTitle id='tagTable'>{t('html_tag_table_subtitle')}</SubTitle>
                <TextContainer>
                    <p>{t('html_tag_table_description')}</p>
                    <ExampleTitle>{t('example')}</ExampleTitle>
                    <Container>
                        <Section>
                            {/* Example Code */}
                            <ExampleContainer>
                                <ExampleSubTitle>Table : </ExampleSubTitle>
                                <ExampleCode>&lt;table&gt;{t('test')}&lt;/table&gt;</ExampleCode>
                            </ExampleContainer>
                            {/* Result Example */}
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult
                                    style={{top: '5px'}}

                                >
                                    <table
                                        style={{
                                            width: '30%',
                                            border: '1px solid black',
                                        }}
                                    >{t('test')}</table>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                    </Container>
                </TextContainer>
            </section>
            {/* Second section - The 'caption' tag */}
            <section>
                <SubTitle id='caption'>{t('html_caption_subtitle')}</SubTitle>
                <TextContainer>
                    <p>{t('html_caption_description')}</p>
                    <ExampleTitle>{t('example')}</ExampleTitle>
                    <Container>
                        <Section>
                            {/* Example Code */}
                            <ExampleContainer>
                                <ExampleSubTitle>Caption : </ExampleSubTitle>
                                <ExampleCode>&lt;table&gt;&lt;caption&gt;{t('test')}&lt;/caption&gt;&lt;/table&gt;</ExampleCode>
                            </ExampleContainer>
                            {/* Result Example */}
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult
                                    style={{top: '5px'}}
                                >
                                    <table
                                        style={{
                                            width: '30%',
                                            border: '1px solid black',
                                        }}
                                    >
                                        <caption>
                                            {t('title')}
                                        </caption>
                                        {t('test')}
                                    </table>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                    </Container>
                </TextContainer>
            </section>
            {/* Third section - The 'thead' tag */}
            <section>
                <SubTitle id='thead'>{t('html_thead_subtitle')}</SubTitle>
                <TextContainer>
                    <p>{t('html_thead_description')}</p>
                    <ExampleTitle>{t('example')}</ExampleTitle>
                    <Container>
                        <Section>
                            {/* Example Code */}
                            <ExampleContainer>
                                <ExampleSubTitle>Thead : </ExampleSubTitle>
                                <ExampleCode>&lt;table&gt;&lt;thead&gt;{t('html_thead_example')}&lt;/thead&gt;&lt;/table&gt;</ExampleCode>
                            </ExampleContainer>
                            {/* Result Example */}
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult
                                    style={{top: '5px'}}

                                >
                                    <table
                                        style={{
                                            width: '100%',
                                            border: '1px solid black',
                                            borderCollapse: 'collapse',
                                        }}
                                    >
                                        <thead
                                            style={{
                                                border: '1px solid black',
                                                borderCollapse: 'collapse',
                                            }}
                                        >
                                        {t('html_thead_example')}
                                        </thead>
                                        {t('test')}
                                    </table>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                    </Container>
                </TextContainer>
            </section>
            {/* Fourth section - The 'tbody' tag */}
            <section>
                <SubTitle id='tbody'>{t('html_tbody_subtitle')}</SubTitle>
                <TextContainer>
                    <p>{t('html_tbody_description')}</p>
                    <ExampleTitle>{t('example')}</ExampleTitle>
                    <Container>
                        <Section>
                            {/* Example Code */}
                            <ExampleContainer>
                                <ExampleSubTitle>Tbody : </ExampleSubTitle>
                                <ExampleCode>&lt;table&gt;&lt;tbody&gt;{t('html_tbody_example')}&lt;/body&gt;&lt;/table&gt;</ExampleCode>
                            </ExampleContainer>
                            {/* Result Example */}
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult
                                    style={{top: '5px'}}

                                >
                                    <table
                                        style={{
                                            width: '100%',
                                            border: '1px solid black',
                                            borderCollapse: 'collapse',
                                        }}
                                    >
                                        <thead
                                            style={{
                                                border: '1px solid black',
                                                borderCollapse: 'collapse',
                                            }}
                                        >
                                        {t('html_thead_example')}
                                        </thead>
                                        <tbody
                                            style={{
                                                border: '1px solid black',
                                                borderCollapse: 'collapse',
                                            }}
                                        >
                                        {t('html_tbody_example')}
                                        </tbody>
                                    </table>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                    </Container>
                </TextContainer>
            </section>
            {/* Fifth section - The 'tfoot' tag */}
            <section>
                <SubTitle id='tfoot'>{t('html_tfoot_subtitle')}</SubTitle>
                <TextContainer>
                    <p>{t('html_tfoot_description')}</p>
                    <ExampleTitle>{t('example')}</ExampleTitle>
                    <Container>
                        <Section>
                            {/* Example Code */}
                            <ExampleContainer>
                                <ExampleSubTitle>Tfoot : </ExampleSubTitle>
                                <ExampleCode>&lt;table&gt;&lt;tfoot&gt;{t('html_tfoot_example')}&lt;/body&gt;&lt;/table&gt;</ExampleCode>
                            </ExampleContainer>
                            {/* Result Example */}
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult
                                    style={{top: '5px'}}

                                >
                                    <table
                                        style={{
                                            width: '100%',
                                            border: '1px solid black',
                                            borderCollapse: 'collapse',
                                        }}
                                    >
                                        <tbody
                                            style={{
                                                border: '1px solid black',
                                                borderCollapse: 'collapse',
                                            }}
                                        >
                                        {t('html_tbody_example')}
                                        </tbody>
                                        <tfoot
                                            style={{
                                                border: '1px solid black',
                                                borderCollapse: 'collapse',
                                            }}
                                        >
                                        {t('html_tfoot_example')}
                                        </tfoot>
                                    </table>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                    </Container>
                </TextContainer>
            </section>
            {/* Sixth section - The 'tr' tag */}
            <section>
                <SubTitle id='tr'>{t('html_tr_subtitle')}</SubTitle>
                <TextContainer>
                    <p>{t('html_tr_description')}</p>
                    <ExampleTitle>{t('example')}</ExampleTitle>
                    <Container>
                        <Section>
                            {/* Example Code */}
                            <ExampleContainer>
                                <ExampleSubTitle>Tr : </ExampleSubTitle>
                                <ExampleCode>&lt;table&gt;&lt;tr&gt;{t('html_tr_example')}&lt;/tr&gt;&lt;/table&gt;</ExampleCode>
                            </ExampleContainer>
                            {/* Result Example */}
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult
                                    style={{top: '5px'}}

                                >
                                    <table
                                        style={{
                                            width: '100%',
                                            border: '1px solid black',
                                            borderCollapse: 'collapse',
                                        }}
                                    >
                                        <tbody>
                                        <tr
                                            style={{
                                                border: '1px solid black',
                                                borderCollapse: 'collapse',
                                            }}
                                        >
                                            {t('html_tr_example')}
                                        </tr>
                                        <tr
                                            style={{
                                                border: '1px solid black',
                                                borderCollapse: 'collapse',
                                            }}
                                        >
                                            {t('html_tr_example')}
                                        </tr>
                                        </tbody>

                                    </table>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                    </Container>
                </TextContainer>
            </section>
            {/* Seventh section - The 'td' tag */}
            <section>
                <SubTitle id='td'>{t('html_td_subtitle')}</SubTitle>
                <TextContainer>
                    <p>{t('html_td_description')}</p>
                    <ExampleTitle>{t('example')}</ExampleTitle>
                    <Container>
                        <Section>
                            {/* Example Code */}
                            <ExampleContainer>
                                <ExampleSubTitle>Td : </ExampleSubTitle>
                                <ExampleCode>&lt;table&gt;&lt;td&gt;{t('html_td_example')}&lt;/td&gt;&lt;/table&gt;</ExampleCode>
                            </ExampleContainer>
                            {/* Result Example */}
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult
                                    style={{top: '5px'}}

                                >
                                    <table
                                        style={{
                                            width: '100%',
                                            border: '1px solid black',
                                            borderCollapse: 'collapse',
                                        }}
                                    >
                                        <tbody>
                                        <tr
                                            style={{
                                                border: '1px solid black',
                                                borderCollapse: 'collapse',
                                            }}
                                        >
                                            <td
                                                style={{
                                                    border: '1px solid black',
                                                    borderCollapse: 'collapse',
                                                }}
                                            >
                                                {t('html_td_example')}
                                            </td>
                                            <td>
                                                {t('html_td_example')}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                    </Container>
                </TextContainer>
            </section>
        </div>
    );
};
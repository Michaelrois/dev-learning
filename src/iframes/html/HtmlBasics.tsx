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
    top: 0px;
    left: 15px;
`;

const Section = styled.section`
    width: 60%;
    height: 100px;
    border-bottom: 3px solid darkblue;
    margin-bottom: 30px;
`;

export const HtmlBasics: React.FC = () => {
    const {t} = useTranslation();

    const navItems = [
        {label: t('html_basics_title'), link: "/HtmlBasics", target: "iframe_content"},
    ]

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {/* Principal Title */}
            <Title>{t('html_basics')}</Title>

            {/* Iframe navigation bar */}
            <IframeNavBar items={navItems} />

            {/*First section - The title*/}
            <section>
                <SubTitle>{t('html_the_title')}</SubTitle>
                <TextContainer>
                    <p>{t('html_the_title_text')}</p>
                    <ExampleTitle>{t('example')}</ExampleTitle>
                    <Container>
                        <Section>
                            {/* Example Code */}
                            <ExampleContainer>
                                <ExampleSubTitle>H1 : </ExampleSubTitle>
                                <ExampleCode>&lt;h1&gt;{t('h1_text')}&lt;/h1&gt;</ExampleCode>
                            </ExampleContainer>
                            {/* Result Example */}
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult
                                    style={{top: '-6px'}}

                                >
                                    <h1>{t('h1_text')}</h1>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                        <Section>
                            <ExampleContainer>
                                <ExampleSubTitle>H2 : </ExampleSubTitle>
                                <ExampleCode>&lt;h2&gt;{t('h2_text')}&lt;/h1&gt;</ExampleCode>
                            </ExampleContainer>
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult
                                    style={{top: '-6px'}}
                                >
                                    <h1>{t('h2_text')}</h1>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                        <Section>
                            <ExampleContainer>
                                <ExampleSubTitle>H3 : </ExampleSubTitle>
                                <ExampleCode>&lt;h3&gt;{t('h3_text')}&lt;/h1&gt;</ExampleCode>
                            </ExampleContainer>
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult
                                    style={{top: '-6px'}}
                                >
                                    <h1>{t('h3_text')}</h1>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                        <Section>
                            <ExampleContainer>
                                <ExampleSubTitle>H4 : </ExampleSubTitle>
                                <ExampleCode>&lt;h4&gt;{t('h4_text')}&lt;/h1&gt;</ExampleCode>
                            </ExampleContainer>
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult
                                    style={{top: '-6px'}}
                                >
                                    <h1>{t('h4_text')}</h1>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                        <Section>
                            <ExampleContainer>
                                <ExampleSubTitle>H5 : </ExampleSubTitle>
                                <ExampleCode>&lt;h5&gt;{t('h5_text')}&lt;/h1&gt;</ExampleCode>
                            </ExampleContainer>
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult
                                    style={{top: '-6px'}}
                                >
                                    <h1>{t('h5_text')}</h1>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                        <Section>
                            <ExampleContainer>
                                <ExampleSubTitle>H6 : </ExampleSubTitle>
                                <ExampleCode>&lt;h6&gt;{t('h6_text')}&lt;/h1&gt;</ExampleCode>
                            </ExampleContainer>
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult
                                    style={{top: '-6px'}}
                                >
                                    <h1>{t('h6_text')}</h1>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                    </Container>
                </TextContainer>
            </section>
            {/* Second section - The paragraphs*/}
            <section>
                <SubTitle>{t('html_the_paragraphs')}</SubTitle>
                <TextContainer>
                    <p>{t('html_the_paragraphs_text')}</p>
                    <ExampleTitle>{t('example')}</ExampleTitle>
                    <Container>
                        <Section>
                            <ExampleContainer>
                                <ExampleSubTitle>P : </ExampleSubTitle>
                                <ExampleCode>&lt;p&gt;{t('html_p_example')}&lt;/p&gt;</ExampleCode>
                            </ExampleContainer>
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult>
                                    <p>{t('html_p_example')}</p>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                    </Container>
                </TextContainer>
            </section>
            {/* Third section - The text properties tags*/}
            <section>
                <SubTitle>{t('html_the_text_properties')}</SubTitle>
                <TextContainer>
                    <p>{t('html_the_text_properties_text')}</p>
                    <ExampleTitle>{t('example')}</ExampleTitle>
                    <Container>
                        {/* Lorem ipsum  section */}
                        <Section>
                            <ExampleContainer>
                                <ExampleSubTitle>Lorem ipsum :</ExampleSubTitle>
                                <ExampleCode>p&gt;lorem</ExampleCode>
                            </ExampleContainer>
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult>
                                    <p>Lorem ipsum dolor sit amet adipisicing elit.</p>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                        {/* Em section */}
                        <Section>
                            <ExampleContainer>
                                <ExampleSubTitle>Em : </ExampleSubTitle>
                                <ExampleCode>&lt;p&gt;&lt;em&gt;{t('html_em_example_part1')}&lt;/em&gt; {t('html_em_example_part2')}&lt;/p&gt;</ExampleCode>
                            </ExampleContainer>
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult>
                                    <p><em>{t('html_em_example_part1')}</em> {t('html_em_example_part2')}</p>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                        {/* I section */}
                        <Section>
                            <ExampleContainer>
                                <ExampleSubTitle>I : </ExampleSubTitle>
                                <ExampleCode>&lt;p&gt;&lt;i&gt;{t('html_i_example_part1')}&lt;/i&gt; {t('html_i_example_part2')}&lt;/p&gt;</ExampleCode>
                            </ExampleContainer>
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult>
                                    <p><i>{t('html_i_example_part1')}</i> {t('html_i_example_part2')}</p>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                        {/* Br section */}
                        <Section>
                            <ExampleContainer>
                                <ExampleSubTitle>Br : </ExampleSubTitle>
                                <ExampleCode>&lt;p&gt;{t('html_br_example_part1')}&lt;br&gt;{t('html_br_example_part2')}&lt;/p&gt;</ExampleCode>
                            </ExampleContainer>
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult>
                                    <p>{t('html_br_example_part1')}<br/>{t('html_br_example_part2')}</p>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                    </Container>
                </TextContainer>
            </section>
            {/* Fourth section - The link element */}
            <section>
                <SubTitle>{t('html_the_link_element')}</SubTitle>
                <TextContainer>
                    <p>{t('html_the_link_element_text')}</p>
                    <ExampleTitle>{t('example')}</ExampleTitle>
                    <Container>
                        {/* Link to a website section */}
                        <Section>
                            <ExampleContainer>
                                <ExampleSubTitle>{t('to_website')}</ExampleSubTitle>
                                <ExampleCode>&lt;a href="https://www.google.com"&gt;Google&lt;/a&gt;</ExampleCode>
                            </ExampleContainer>
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult
                                    style={{top: '13px'}}
                                >
                                    <a href="https://www.google.com">Google</a>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                        {/* Link to another page section */}
                        <Section>
                            <ExampleContainer>
                                <ExampleSubTitle>{t('to_web_page')}</ExampleSubTitle>
                                <ExampleCode>&lt;a href="/Page"&gt;Page&lt;/a&gt;</ExampleCode>
                            </ExampleContainer>
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult
                                    style={{top: '13px'}}
                                >
                                    <a href="/Page">Page</a>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                        <Section>
                            <ExampleContainer>
                                <ExampleSubTitle>{t('html_the_link_#_title')}</ExampleSubTitle>
                                <ExampleCode>&lt;a href="#" title="{t('go_top')}"&gt;{t('go_top')}&lt;/a&gt;</ExampleCode>
                            </ExampleContainer>
                            <ResultContainer>
                                <ExampleSubTitle>{t('result_example')}</ExampleSubTitle>
                                <ExampleResult
                                    style={{top: '13px'}}
                                >
                                    <a href="#" title="Go to top">Go to top</a>
                                </ExampleResult>
                            </ResultContainer>
                        </Section>
                    </Container>
                </TextContainer>
            </section>
        </div>
    );
};
import React from 'react';
import styled from "styled-components";
import {useTranslation} from "react-i18next";
import VerticalNavBar from "../components/VerticalNavBar";
import HorizontalNavBar from "../components/HorizontalNavBar";
import Footer from "../components/Footer";


//Styled Components
const HtmlContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 90vh;
    overflow: hidden;
`;

const HtmlTitle = styled.h1`
    color: darkblue;
    text-shadow: 2px 2px 3px #943288;
    text-align: center;
    font-size: 4rem;
`;

const BodyContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-top: 1rem;
    max-width: 100%;
    overflow: hidden;
`;

const Iframe = styled.iframe`
    width: 85%;
    overflow-y: scroll;
    border: none;
`;


export default function Html() {
    const {t} = useTranslation();
    //Data
    const navItems = [
        {label: t('html_basics'), link: "/HtmlBasics", target: "iframe_content"},
        {label: t('html_forms'), link: "", target: "iframe_content"},
        {label: t('flex_elements'), link: "", target: "iframe_content"},
        {label: t('html_responsive'), link: "", target: "iframe_content"},
        {label: t('iframe'), link: "", target: "iframe_content"},
        {label: t('html_symbols'), link: "", target: "iframe_content"},
        {label: t('html_emojis'), link: "", target: "iframe_content"},
        {label: t('html_favicon'), link: "", target: "iframe_content"},
        {label: t('html_media'), link: "", target: "iframe_content"},
        {label: t('html_audio'), link: "", target: "iframe_content"},
        {label: t('html_video'), link: "", target: "iframe_content"},
        {label: t('html_plugins'), link: "", target: "iframe_content"},
    ]

    return (
        <div style={{height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden'}}>
            <HorizontalNavBar/>
            <HtmlContainer>
                <div>
                    <HtmlTitle>
                        {t('html_title')}
                    </HtmlTitle>
                </div>

                <BodyContainer>
                    <VerticalNavBar items={navItems}/>
                    <Iframe
                        name="iframe_content"
                    ></Iframe>
                </BodyContainer>
            </HtmlContainer>
            <Footer/>
        </div>
    );
};
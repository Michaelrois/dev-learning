import React from 'react';
import '../index.css'
import styled from "styled-components";
import {signOut} from "aws-amplify/auth";
import {useTranslation} from 'react-i18next';

const SignOutButton = styled.button`
    color: white;
    border: none;
    cursor: pointer;
`;

const HorizontalNavBar = () => {
    const {t} = useTranslation();

    const handleSignOut = async () => {
        try {
            await signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    };

    const items = [
        {label: t('home'), link: "/"},
        {label: "HTML", link: "/Html"},
        {label: "CSS", link: ""},
        {label: "Javascript", link: ""},
        {label: "Typescript", link: ""},
        {label: "REACT", link: ""},
        {label: "VUE", link: ""},
        {label: "C#", link: ""},
        {label: t('help'), link: ""},
    ];
    return (
        <div className="horizontal-nav">
            {items.map((item, index) => (
                <a
                    key={index}
                    href={item.link}
                    className="nav-item"
                >
                    {item.label}
                </a>
            ))}
            <button
                className="nav-item"
                onClick={handleSignOut}
                style={{
                    border: 'none',
                    backgroundColor: 'transparent',
                }}
            >
                {t('sign_out')}
            </button>
        </div>
    );
};

export default HorizontalNavBar;
import React from 'react';
import {useTranslation} from "react-i18next";

export const Page: React.FC = () => {
    const {t} = useTranslation();

    return (
        <div>
            <h1
                style={{
                    color: 'darkblue',
                    textShadow: '1px 1px 3px #943288',
                    textAlign: 'center',
                    fontSize: '5rem'
                }}
            >
                Page
            </h1>
            <a
                href="/html/HtmlBasics"
                style={{
                    color: 'darkblue',
                    fontSize: '2rem',
                    textAlign: 'center',
                    paddingTop: '2rem',
            }}
            >
                {t('return')}
            </a>
        </div>
    )
}
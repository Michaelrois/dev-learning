import React from 'react';
import '../index.css'
import {useTranslation} from 'react-i18next';
//import '../i18n';

const HorizontalNavBar = () => {
    const {t} = useTranslation();

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
        </div>
    );
};

export default HorizontalNavBar;
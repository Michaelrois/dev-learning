import React from 'react';
import styled from "styled-components";
import "../index.css";

//Styled Components
const NavBarContainer = styled.div`
    width: 70%;
    margin: 0 auto;
    text-align: center;
    
`;

interface NavItems {
    label: string;
    link: string;
}

interface HorizontalNavBarProps {
    items: NavItems[];
}


export const IframeNavBar: React.FC<HorizontalNavBarProps> = ({ items }) => {

    return (
        <NavBarContainer className="double-border">
            {items.map((item, index) => (
                <a
                    key={index}
                    href={item.link}
                    className="nav-iframe"
                >
                    {item.label}
                </a>
            ))}
        </NavBarContainer>
    );
}
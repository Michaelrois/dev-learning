import React from 'react';
import styled from "styled-components";

//Styled Components
const NavBarContainer = styled.div`
    width: 70%;
    margin: 0 auto;
`;

interface NavItem {
    label: string;
    link: string;
}

interface HorizontalNavBarProps {
    items: NavItem[];
}


export const IframeNavBar: React.FC<HorizontalNavBarProps> = ({ items }) => {

    return (
        <NavBarContainer>
            {items.map((item, index) => (
                <a
                    key={index}
                    href={item.link}
                    className="nav-item"
                    style={{color: 'darkblue'}}
                >
                    {item.label}
                </a>
            ))}
        </NavBarContainer>
    );
}
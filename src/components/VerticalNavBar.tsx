import React from "react";
import '../index.css'

interface NavItem {
    label: string;
    link: string;
    target: string;
}

interface HorizontalNavBarProps {
    items: NavItem[];
}

const VerticalNavBar: React.FC<HorizontalNavBarProps> = ({ items }) => {
    return (
        <div className="vertical-nav">
            {items.map((item, index) => (
                <a key={index} href={item.link} target={item.target} className="vertical-nav-item">
                    {item.label}
                </a>
            ))}
        </div>
    );
};

export default VerticalNavBar;
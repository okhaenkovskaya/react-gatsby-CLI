import React from 'react';
import { Link as GatsbyLink } from "gatsby";

interface LinkProps {
    children: React.ReactNode;
    to: string;
    activeClassName?: string;
}

const Link = ({children, to, activeClassName}: LinkProps) => {
    const internal = /^\/(?!\/)/.test(to);

    if (internal) {
        return (
            <GatsbyLink
                to={to}
                activeClassName={activeClassName}
            >
                {children}
            </GatsbyLink>
        )
    }
    return (
        <a href={to}>
            {children}
        </a>
    )
};

export default Link;

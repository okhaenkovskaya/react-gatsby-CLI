import React, {ReactNode} from 'react';
import {useSiteMetadata} from "../../hooks/use-site-metadate";

interface SEOProps {
    title?: string;
    description?: string;
    pathname?: string;
    children?: ReactNode;
}

const getSEO = ({title,description,pathname}: SEOProps) => {
 const {
     title: defaultTitle,
     description: defaultDescription,
     siteUrl,
     image,
 } = useSiteMetadata();

 return {
     title: title || defaultTitle,
     description: description || defaultDescription,
     image: `${siteUrl}${image}`,
     url: `${siteUrl}${pathname || ``}`
 }
}

export const SEO = ({title, description, pathname, children}: SEOProps) => {
    const seo = getSEO({
        title,
        description,
        pathname
    });
    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            {children}
        </>
    )
}

import * as React from "react";
import { PageProps } from "gatsby";

import {Layout} from "../layouts";
import Link from "../components/Link/Link";
import {SEO} from "../components/SEO/SEO";
import Title from "../components/Title/Title";
import Container from "../components/Container/Container";



const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Container width="300px">
        <Title level={1}>Page 500 :(</Title>

        <Link to="/">Go home</Link>.
      </Container>
    </Layout>
  )
}

export default NotFoundPage;

export const Head = () => <SEO title='TEST Page Not Fount' />;

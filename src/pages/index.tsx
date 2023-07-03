import * as React from "react";
import {StaticImage} from "gatsby-plugin-image";

import {Layout} from "../layouts";
import {SEO} from "../components/SEO/SEO";
import Title from "../components/Title/Title";
import Container from "../components/Container/Container";
import Text from "../components/Text/Text";
import Link from "../components/Link/Link";
import Button from "../components/Button/Button";
import Row from "../components/Row/Row";
import Column from "../components/Column/Column";
import Hero from "../components/Intro/Intro";


type Props = {}

const IndexPage = (props: Props) => {

  return (
    <Layout>

        <Container>
            <Container width='1000px' justify='center'>
                <Title level={1} margin='30px 0'>
                    Home page
                </Title>

                <Title level={2} color={"#598547"} margin='30px 0'>
                    Sub Title Page
                </Title>
            </Container>
            <Hero image='https://loremflickr.com/640/360'  height='70vh'>
                <StaticImage src='https://loremflickr.com/640/360' alt="A dinosaur"
                             placeholder="blurred"
                             layout="fixed"
                             width={1920}
                             height={1500} />
                <Container width='800px'>
                    <Title margin='50px 0 30px' level={3} color={"#ff0ff0"}>
                        Hero Title
                    </Title>
                    <Text margin='0 0 15px' size={20} >
                        Amet, consequatur dignissimos, dolorem et, facere fuga id incidunt ipsam ipsum laborum molestias necessitatibus nihil pariatur placeat quia quis recusandae rem vero!
                    </Text>
                    <Button color='light'>Button</Button>
                </Container>
            </Hero>
            <Text margin='0 0 15px' align='center' size={30} >
                Lorem <Link to='/404'>ipsum dolor sit amet</Link>, consectetur adipisicing elit. Amet, consequatur dignissimos, dolorem et, facere fuga id incidunt ipsam ipsum laborum molestias necessitatibus nihil pariatur placeat quia quis recusandae rem vero!
            </Text>
            <Text margin='0 0 15px' size={12}>
                Lorem ipsum dolor sit amet, <Link to='https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/'>GatsbyLink</Link>. Amet, consequatur dignissimos, dolorem et, facere fuga id incidunt ipsam ipsum laborum molestias necessitatibus nihil pariatur placeat quia quis recusandae rem vero!
            </Text>
            <Row>
                <Column width='40%' padding='0 30px'>
                    <Text margin='0 0 15px' size={14}>
                        Lorem ipsum dolor sit amet, <Link to='https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/'>GatsbyLink</Link>. Amet, consequatur dignissimos, dolorem et, facere fuga id incidunt ipsam ipsum laborum molestias necessitatibus nihil pariatur placeat quia quis recusandae rem vero!
                    </Text>
                </Column>
                <Column width='20%' padding='0 30px'>
                    <Text margin='0 0 15px' size={14}>
                        Lorem ipsum dolor sit amet, <Link to='https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/'>GatsbyLink</Link>. Amet, consequatur dignissimos, dolorem et, facere fuga id incidunt ipsam ipsum laborum molestias necessitatibus nihil pariatur placeat quia quis recusandae rem vero!
                    </Text>
                </Column>
                <Column width='40%' padding='0 30px'>
                    <Text margin='0 0 15px' size={16}>
                        Lorem ipsum dolor sit amet, <Link to='https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/'>GatsbyLink</Link>. Amet, consequatur dignissimos, dolorem et, facere fuga id incidunt ipsam ipsum laborum molestias necessitatibus nihil pariatur placeat quia quis recusandae rem vero!
                    </Text>
                </Column>
            </Row>
            <Button onClick={() => console.log('11 click')} color='light'>Button</Button>

            <Button onClick={() => console.log('22 click')} color='dark'>Button Text</Button>
        </Container>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <SEO title='TEST Home Page' description='my first gatsby' />;
import React from 'react';
import Container from "../Container/Container";
import Text from "../Text/Text";
import Button from "../Button/Button";

const Footer = () => {
    return (
        <Container width='800px'>
            <Text size={12} align="center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda consectetur et exercitationem facilis, fugiat ipsa molestiae mollitia necessitatibus officiis perferendis quis quo recusandae sit velit. Eveniet ipsam nam voluptatem. <br/>
                <Button>Button</Button>
            </Text>
            <Text size={14} align="center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda consectetur et exercitationem facilis, fugiat ipsa molestiae mollitia necessitatibus officiis perferendis quis quo recusandae sit velit. Eveniet ipsam nam voluptatem.
            </Text>
            <Text size={16} align="center">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda consectetur et exercitationem facilis, fugiat ipsa molestiae mollitia necessitatibus officiis perferendis quis quo recusandae sit velit. Eveniet ipsam nam voluptatem.
            </Text>
        </Container>
    );
};

export default Footer;

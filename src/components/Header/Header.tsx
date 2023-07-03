import React from 'react';
import Container from "../Container/Container";
import Link from "../Link/Link";

const Header = () => {
    return (
        <Container display='flex' justify='space-between'>
            <div className="">LOGO</div>

            <nav>
                <Link to="/collection">Collection</Link>
                <Link to="/product">Product</Link>
            </nav>
        </Container>
    );
};

export default Header;

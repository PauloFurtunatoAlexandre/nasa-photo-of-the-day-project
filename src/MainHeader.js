import React from "react";
import styled from "styled-components";

const Header = styled.div`
    display: flex;
    justify-content: center;
    background-color: #39719E;
    color: #fff;
    padding: 12px 0 40px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const Image = styled.img`
    width: 120px;
    position: absolute;
    top: 50px;
    @media (max-width: 768px) {
        width: 30vw;
        margin: 30px 0 0;
    }
`;

const Paragraph = styled.p`
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    text-transform: uppercase;

    @media (max-width: 768px) {
        margin-top: 36px;
    }
`;

const MainHeader = () => {
    return(
        <Header>
            <Image src="https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg" alt="Nasa Logo" />
            <Paragraph>Photo of the day - Lambda Project</Paragraph>
        </Header>
    );
}

export default MainHeader;
import React from "react";
import styled from "styled-components";

const FooterComp = styled.div`
    background-color: #39719E;
    color: #fff;
    text-align: center;
    padding: 40px 0;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const Footer = () => {
    return(
        <FooterComp className="nasa--footer">
            <span>Completed by <strong>Paulo Alexandre</strong></span>
            <br />
            <span>For more information click <a href="https://www.nasa.gov/"> Here</a></span>
        </FooterComp>
    );
}

export default Footer;
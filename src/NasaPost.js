import React from "react";
import styled, { keyframes } from "styled-components";

const Post = styled.div`
    margin: 20px 2%;
    // border: 2px solid #eee;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    padding: 40px;

    &hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
`;

const Url = styled.img`
    width: 100%;
`;

const Header = styled.h2`
    font-family: Montserrat, sans-serif;
    font-weight: 700;
    font-size: 1.5rem;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const Span = styled.span`
    font-family: Quicksand, sans-serif;
    font-weight: 300;
    font-size: 0.8rem;
    margin-bottom: 40px;

    @media (max-width: 768px) {
        font-size: 0.6rem;
    }
`;

const Paragraph = styled.div`
    font-family: Quicksand, sans-serif,
    font-weight: 400;
    font-size: 1rem;
    margin-top: 40px;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

const Animation = keyframes`
    from {
        opacity: 0;
        color: #39719E;
    }
    
    to { 
        opacity: 1;
        color: #39719E;
    }
`;

const Loading = styled.h3`
    margin: 60px auto;
    text-align: center;
    animation: ${Animation} 0.2s easy-in infinite;
`;

const NasaPost = (props) => {
    const { apods } = props;

    if (!apods.url) {
        return <Loading>Loading...</Loading>;
    } else {
        return(
            <Post>
                <Header>
                <h2>{apods.title}</h2>
                </Header>
                <Url src={apods.url} alt="Nasa image of the day" />
                    <Span>{apods.copyright}</Span>
                <Paragraph>{apods.explanation}</Paragraph>
                <Span>{apods.date}</Span>
            </Post>
        );
    }
}

export default NasaPost;

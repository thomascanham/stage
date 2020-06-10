import React from 'react';
import styled from 'styled-components';

const Footing = styled.footer`
    width: 100vw;
    height: 300px;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f2f2f2;
    background: #586B7A;

    h3 {
        margin: 0;
    }
`;

const Footer = () => (
    <Footing>
        <div className="footer-content">
            <h3>PPBACKEND.NETLIFY.APP</h3>
            <p>Used as a dojo</p>
        </div>

    </Footing>
)

export default Footer;
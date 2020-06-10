import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';

const ContactForm = styled.form`
    label, input {
        display: block;
    }

    fieldset {
        border: 0;
        display: inline-block;
        margin: 1rem;
    }
`;

function handleSubmit(event) {
    event.preventDefault();
    console.log(event.currentTarget);
    event.currentTarget.reset();
}

const Contact = () => (
    <Layout>
        <SEO title="Contact US"></SEO>

        <h2>Why not get in touch</h2>

        <ContactForm onSubmit={handleSubmit} netlify>
            <fieldset>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="Enter your first name" />
            </fieldset>

            <fieldset>
                <label htmlFor="lastName">Surname Name</label>
                <input type="text" id="lastName" placeholder="Enter your last name" />
            </fieldset>

            <button type="submit">Send</button>
        </ContactForm>
    </Layout>
)

export default Contact;
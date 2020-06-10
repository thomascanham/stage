import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';

const ContactForm = styled.form`
    label, input {
        display: block;
    }

    input {
        padding: .5rem;
    }

    fieldset {
        border: 0;
        display: inline-block;
        margin: 1rem;
    }

    button {
        border: 0;
        padding: .5rem;
        background-color: #f56000;
        color: #f2f2f2;
        text-align: center;
        padding: .6rem 2rem;
    }
`;

//handle the form
function handleSubmit(event) {
    event.preventDefault();
    console.log(event.currentTarget);
    event.currentTarget.reset();
}

const Contact = () => (
    <Layout>
        <SEO title="Contact US"></SEO>

        <h2>Why not get in touch</h2>

        <ContactForm onSubmit={handleSubmit} name="Contact Form" data-netlify="true">
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
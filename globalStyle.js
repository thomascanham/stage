import styled from 'styled-components';

const Global = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    * {
        font-family: 'Roboto', sans-serif !important;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight: 700;
        letter-spacing: 0.08em;
    }

    p {
        line-height: 170%;
    }
`;

export default Global
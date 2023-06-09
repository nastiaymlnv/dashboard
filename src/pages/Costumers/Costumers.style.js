import styled, {css} from "styled-components";

const FontProp = css`
    font-family: 'Poppins';
    letter-spacing: -0.01em;
`;

export const Container = styled.article`
    background: #FFFFFF;
    box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
    border-radius: 30px;
    padding: 30px 40px 40px 38px;
`;

export const PageNameContainer = styled.section`
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TitleContainer = styled.article`

`;

export const Title = styled.p`
    ${FontProp};
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    color: #000000;
    margin-bottom: 7px;
`;

export const TitleStatus = styled.p`
    ${FontProp};
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #16C098;
`;

export const A = styled.article`

`;


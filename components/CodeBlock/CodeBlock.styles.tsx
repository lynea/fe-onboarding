import styled from 'styled-components';

export const StyledCodeBlock = styled.div`
    width: 100%;
    border-radius: 3px;
    background: #282a36;
    font-size: 1.4rem;
    overflow: hidden;
    position: relative;

    .copy-button {
        color: white;
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        cursor: pointer;
    }
`;

import styled from 'styled-components'; 


export const StyledMainContainer = styled.div`
    display:flex; 
    align-items:center;
`



export const StyledSidePanelContainer = styled.aside`
    flex: 0; 
    @media only screen and (min-width: 600px) {
        height:100vh;
        flex:1;
        background:red;
    };`
export const StyledTopMenuContainer = styled.menu`
    height: 4rem; 
    width:100%; 
    background: blue;
    margin:0;
`
export const StyledContentContainer = styled.section`
    flex:1; 
    @media only screen and (min-width: 600px) {
        flex:4
    };
`

import React, {FunctionComponent} from "react";
import { StyledFullWidthContainer} from './MainLayout.styles'; 

const FullWidthLayout:FunctionComponent = ({children}) => 
        <StyledFullWidthContainer>
            {children}
        </StyledFullWidthContainer>

export default FullWidthLayout; 
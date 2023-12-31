import { Container } from "@mui/material";
import { StepProvider } from "../context/steps";

function UI({children}) {

    return ( 
      <StepProvider>
        <Container
        maxWidth='xxl'
        sx={{
            background:'radial-gradient(circle, rgba(17,64,116,1) 0%, rgba(10,37,66,1) 85%)',
            width: '100%',
            height: 'auto',
            minHeight:'100vh',
            '@media (max-width: 730px)':{
            paddingTop:'20px',
            paddingBottom:'20px',
            }
          }}
        >
        {children}
        </Container>
      </StepProvider>
     );
}

export {UI};
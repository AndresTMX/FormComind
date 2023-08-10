import React, { useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";

function Redirect({ message, tempRedirect, url }) {

  useEffect(() => {    
    const redireccionTimer = setTimeout(() => {
      window.location.href = url;
    }, tempRedirect); 
    
    return () => {
      clearTimeout(redireccionTimer);
    };
  }, []);


  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        gap:'20px'
      }}
    >
      <Box>
        <Typography variant="h6" fontWeight={600}>
          {message}
        </Typography>
      </Box>
      <Box>
      <Typography variant="subtitle" fontWeight={500}>
          Será redirigido a nuestra página principal en 3 segundos
        </Typography>
      </Box>
    </Container>
  );
}

export  { Redirect }

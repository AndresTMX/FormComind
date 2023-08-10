import { Container, Box, Button } from "@mui/material";
function Dudes() {

    return ( 
        <Container 
        sx={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            color:'white',
            gap:'10px',
            marginTop:'20px'
        }}
        >

                <Box>
                    <h4 style={{margin:'0px'}}>¿Tienes dudas?</h4>
                </Box>
                <Button
                href="https://api.whatsapp.com/send/?phone=5219212575455&text=%C2%A1Hola%21%2C+Tienda+sobre+pedido+COMIND%2C+requiero+informaci%C3%B3n.&type=phone_number&app_absent=0"
                variant='contained'
                sx={{backgroundColor:'orange'}}
                >
                    <strong>CONTACTANOS</strong>
                </Button>
                <Box>
                    <h4 style={{margin:'0px'}}>¡Seguro podemos asesorarte!</h4>
                </Box>
        </Container>
     );
}

export {Dudes};
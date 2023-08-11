import { useState } from "react";
import { Container, Box, Button, Select, MenuItem, FormControl, Typography, InputLabel, Paper, Slide } from "@mui/material";
import { actionTypes } from "../../../reducers/reduce.form";

function FormStepOne({data, setData, dispatch, mockSteps}) {

    const industrialOptions = [
        {type:'Vapor'},
        {type:'Alimentos'},
        {type:'Químicos'},
        {type:'Petróleo'},
        {type:'Metálica'},
        {type:'Varios usos'},
    ]

    const hidrulicaptions = [
        {type:'Baja presión'},
        {type:'Media presión'},
        {type:'Alta  presión'},
        {type:'Extrema presión'},
        {type:'Especiales'},
    ]

    const [view, setView] = useState(true);

    const updateData = (e) => {
        e.preventDefault();

        if(data.type != "Autotanques y Tolvas"){

          setView(false)
          setTimeout(() => {
            dispatch({ type: actionTypes.setStep, payload: 2 });
            dispatch({
              type: actionTypes.setOne,
              payload: { ...mockSteps[0], current: false },
            });
            dispatch({
              type: actionTypes.setTwo,
              payload: { ...mockSteps[1], current: true },
            });
            
          },500)  
          
        }else{

          setView(false)
          setTimeout(() => {
            dispatch({ type: actionTypes.setStep, payload: 3 });
            dispatch({
              type: actionTypes.setOne,
              payload: { ...mockSteps[0], current: false },
            });
            dispatch({
              type: actionTypes.setThre,
              payload: { ...mockSteps[2], current: true },
            });
            
          },500)  

        }

    }

    return (
     <Slide  direction={view? "left": "right"} in={view} timeout={500} mountOnEnter unmountOnExit>
         <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "30px",
          gap: "30px",
          width:'100%',
          '@media (max-width: 730px)':{
            marginTop:'15px'
          }
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            width:'100%',
            justifyContent:'center',
            '@media (max-width: 730px)':{
              flexDirection:'column',
              alignItems:'center',
            }
          }}
        >
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              padding: "4px",
              width: "40px",
              height: "40px",
              justifyContent: "center",
              background: "orange",
              borderRadius: "100%",
              color: "#114074",
              '@media (max-width: 730px)':{
                display:'none'
              }
            }}
          >
            1
          </Typography>
          <Typography 
          variant="h4"
          sx={{ 
            color: "white", 
            '@media (max-width: 730px)':{
            fontSize:'1.2rem'
          } }} >
            El servicio que requieres es
          </Typography>
        </Box>

        <form onSubmit={updateData}>
          <Paper
            elevation={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              width: "50%",
              margin: "auto",
              padding: "30px",
              borderRadius: "4px",
              '@media (max-width: 730px)':{
                width:'95%'
              }
            }}
          >
            <FormControl fullWidth>
              <InputLabel>Selecciona la opción más adecuada</InputLabel>
              <Select
                required
                label="Selecciona la opción más adecuada"
                value={data.type}
                onChange={(e) => setData({...data, type: e.target.value})}
              >
                <MenuItem value="industrial">Industrial</MenuItem>
                <MenuItem value="hidraulica">Hidráulica</MenuItem>
                <MenuItem value="Metalica">Metálica</MenuItem>
                <MenuItem value="Autotanques y Tolvas">Autotanques y Tolvas</MenuItem>

              </Select>
            </FormControl>

            <Button type="submit" variant="contained">
              Siguiente
            </Button>
          </Paper>
        </form>
      </Container>
     </Slide>
    );
}

export {FormStepOne};
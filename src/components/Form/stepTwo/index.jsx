import { useState } from "react";
import { Container, Box, Button, Select, MenuItem, FormControl, Typography, InputLabel, Paper, Slide, InputBase, TextField, InputAdornment, IconButton, OutlinedInput, FormHelperText } from "@mui/material";
import {TbTemperatureCelsius, TbTemperatureFahrenheit} from 'react-icons/tb'
import { actionTypes } from "../../../reducers/reduce.form";

function FormStepTwo({data, setData, dispatch, mockSteps}) {

    const [view, setView] = useState(true);

    const addTemp = (unid) => {
        setData({...data, unidTemp: unid})
    }

    const addUnidExtend = (unid) => {
        setData({...data, unidExtend: unid})
    }

    const preview = () => {
        setView(false)
        setTimeout(() => {
            dispatch({ type: actionTypes.setStep, payload: 1 });
            dispatch({
              type: actionTypes.setOne,
              payload: { ...mockSteps[0], current: true },
            });
            dispatch({
              type: actionTypes.setTwo,
              payload: { ...mockSteps[1], current: false },
            });
            
          },500)

    }

    const nextView = (e) => {
        e.preventDefault()
        setView(false)
        setTimeout(() => {
            dispatch({ type: actionTypes.setStep, payload: 3 });
            dispatch({
              type: actionTypes.setOne,
              payload: { ...mockSteps[0], current: false },
            });

            dispatch({
              type: actionTypes.setTwo,
              payload: { ...mockSteps[1], current: false },
            });

            dispatch({
                type: actionTypes.setThre,
                payload: { ...mockSteps[2], current: true },
              });
            
          },500)
    }

    return (
      <Slide
        direction={view? "left": "right"}
        in={view}
        timeout={500}
        mountOnEnter
        unmountOnExit
      >
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
              justifyContent: "center",
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
              2
            </Typography>
            <Typography 
             sx={{ 
              color: "white", 
              '@media (max-width: 730px)':{
              fontSize:'1.2rem',
              textAlign:'center'
            } }}
              variant="h4">
              ¿Qué especificaciones requiere la manguera?
            </Typography>
          </Box>

          <form onSubmit={nextView}>
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
              <Box
                sx={{ display: "flex", gap: "15px", flexDirection: "column" }}
              >
                <FormControl fullWidth>
                  <TextField
                    required
                    error={data.typeFluid === ""}
                    helperText={data.typeFluid === ""? "Requerido*": ""}
                    label="Tipo de fluido a conducir"
                    variant="outlined"
                    value={data.typeFluid}
                    onChange={(e) => setData({...data, typeFluid: e.target.value})}
                  />
                </FormControl>

                <FormControl fullWidth>
                  <InputLabel
                    error={data.temp === ""}
                    sx={{'@media (max-width: 730px)':{
                    fontSize:'15px',
                    }}}>
                      Temperatura</InputLabel>
                  <OutlinedInput
                    required
                    error={data.temp === ""}
                    label="Temperatura"
                    value={data.temp}
                    onChange={(e) => setData({...data, temp: e.target.value})}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                        onClick={() => addTemp('Celcius')}
                        color={data.unidTemp == "Celcius"? "primary": "disabled" }
                        >
                            <TbTemperatureCelsius/>
                        </IconButton>
                        <IconButton
                        onClick={() => addTemp('Fahrenheit')}
                         color={data.unidTemp != "Celcius"? "primary": "disabled" }
                        >
                            <TbTemperatureFahrenheit/>
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                    {data.temp === "" && (<FormHelperText error >Requerido*</FormHelperText>)}
                </FormControl>

                <FormControl fullWidth>
                  <TextField
                  error={data.pressure === ''}
                  required 
                  helperText={data.pressure === ""? "Requerido*": ""}
                  value={data.pressure}
                  onChange={(e) => setData({...data, pressure:e.target.value})}
                  label="Presión en PSI"
                  variant="outlined" />
                </FormControl>
              </Box>

              <Box
                sx={{ display: "flex", gap: "15px", flexDirection: "column" }}
              >
                <FormControl fullWidth>
                  <TextField
                    error={data.length === ''}
                    required
                    helperText={data.length === ""? "Requerido*": ""}
                   value={data.length}
                   onChange={(e) => setData({...data, length:e.target.value})}
                  label="Longitud"
                  variant="outlined" />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel
                     sx={{'@media (max-width: 730px)':{
                      fontSize:'15px',
                      }}}>
                      Diametro interior</InputLabel>
                  <OutlinedInput
                   value={data.diameterInt}
                   onChange={(e) => setData({...data, diameterInt:e.target.value})}
                  label="Diametro interior"
                  variant="outlined" />
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel 
                    sx={{'@media (max-width: 730px)':{
                   fontSize:'15px',
                   }}}>
                    Diametro exterior</InputLabel>
                  <OutlinedInput
                   value={data.diameterExt}
                   onChange={(e) => setData({...data, diameterExt:e.target.value})}
                  label="Diametro exterior" 
                  variant="outlined"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                      onClick={() => addUnidExtend('pulg')}
                      color={data.unidExtend == "pulg"? "primary": "disabled" }
                      >
                          <Typography variant="subtitle1">pulg</Typography>
                      </IconButton>
                      <IconButton
                      onClick={() => addUnidExtend('mm')}
                       color={data.unidExtend != "pulg"? "primary": "disabled" }
                      >
                          <Typography variant="subtitle1">mm</Typography>
                      </IconButton>
                    </InputAdornment>
                  }
                  />
                </FormControl>
              </Box>

              <Box
                
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Button variant="outlined" onClick={preview}>
                  Regresar
                </Button>
                <Button variant="contained" type="submit">Siguiente</Button>
              </Box>
            </Paper>
          </form>
        </Container>
      </Slide>
    );
}

export {FormStepTwo};
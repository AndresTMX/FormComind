import { useState } from "react";
import { Container, Box, Button, FormControl, Typography, InputLabel, Paper, Slide, TextField, Select, MenuItem, CircularProgress, Stack, Modal, FormHelperText } from "@mui/material";
import { actionTypes } from "../../../reducers/reduce.form";
import axios from "axios";

function FormStepFour({data, setData, dispatch, mockSteps}) {

    const [view, setView] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

     const preview = () => {
        setView(false);
        setTimeout(() => {
          dispatch({ type: actionTypes.setStep, payload: 3 });
    
          dispatch({
            type: actionTypes.setThre,
            payload: { ...mockSteps[2], current: true },
          });

          dispatch({
            type: actionTypes.setFour,
            payload: { ...mockSteps[3], current: false },
          });


        }, 500);
    };

    const statesMexico = [
      "Aguascalientes",
      "Baja California",
      "Baja California Sur",
      "Campeche",
      "Chiapas",
      "Chihuahua",
      "Coahuila",
      "Colima",
      "Durango",
      "Guanajuato",
      "Guerrero",
      "Hidalgo",
      "Jalisco",
      "México",
      "Michoacán",
      "Morelos",
      "Nayarit",
      "Nuevo León",
      "Oaxaca",
      "Puebla",
      "Querétaro",
      "Quintana Roo",
      "San Luis Potosí",
      "Sinaloa",
      "Sonora",
      "Tabasco",
      "Tamaulipas",
      "Tlaxcala",
      "Veracruz",
      "Yucatán",
      "Zacatecas",
    ];
    
    const nextView = async (e) => {
        e.preventDefault();

        setError(false)
        setLoading(true)

        const formData = new FormData();
        for (const key in data) {
          formData.append(key, data[key]);
        }

        try {
          
          const response = await axios.post('https://sendform-comind.onrender.com/send-email', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': 'https://sendform-comind.onrender.com/',
              }
            });

            if (response.status == 200) {
              setLoading(false)
              setTimeout(() => {
                dispatch({ type: actionTypes.setStep, payload: 5 });
  
                dispatch({
                  type: actionTypes.setThre,
                  payload: { ...mockSteps[3], current: false },
                });
              }, 700);
            } else {
              setLoading(false)
              setError(true)
            }

          console.log(response)
        } catch (error) {
          setError(error)
          setLoading(false);
        }
    };


    return (
      <Slide
        direction={view ? "left" : "right"}
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
            width: "100%",
            "@media (max-width: 730px)": {
              marginTop: "15px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              justifyContent: "center",
              "@media (max-width: 730px)": {
                flexDirection: "column",
                alignItems: "center",
              },
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
                "@media (max-width: 730px)": {
                  display: "none",
                },
              }}
            >
              4
            </Typography>
            <Typography
              sx={{
                color: "white",
                maxWidth: "480px",
                "@media (max-width: 730px)": {
                  fontSize: "1.2rem",
                  textAlign: "center",
                },
              }}
              variant="h4"
            >
              Compartenos tu información para darte seguimiento
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
                "@media (max-width: 730px)": {
                  width: "95%",
                },
              }}
            >
              <Box
                sx={{ display: "flex", gap: "10px", flexDirection: "column" }}
              >
                <FormControl fullWidth>
                  <TextField
                    required
                    error={data.name === ""}
                    helperText={data.name === ""? "Requerido*": ""}
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    label="Nombre completo"
                    variant="outlined"
                  />
                </FormControl>

                <FormControl fullWidth>
                  <TextField
                    required
                    error={data.cell === ""}
                    helperText={data.cell === ""? "Requerido*": ""}
                    value={data.cell}
                    onChange={(e) => setData({ ...data, cell: e.target.value })}
                    label="Telefono"
                    variant="outlined"
                  />
                </FormControl>

                <FormControl fullWidth>
                  <TextField
                    required
                    error={data.email === ""}
                    helperText={data.email === ""? "Requerido*": ""}
                    type="email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                    label="Correo electrónico"
                    variant="outlined"
                  />
                </FormControl>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "row",
                }}
              >
                <FormControl 
                error={data.country === ""}
                fullWidth>
                  <InputLabel>País</InputLabel>
                  <Select
                    required
                    value={data.country}
                    onChange={(e) =>
                      setData({ ...data, country: e.target.value })
                    }
                    label="País"
                    variant="outlined"
                  >
                    <MenuItem value="México">México</MenuItem>
                    <MenuItem value="Otros">Otros</MenuItem>
                  </Select>
                  {data.country === "" && (<FormHelperText>Requerido*</FormHelperText>)}
                </FormControl>

                <FormControl 
                fullWidth
                error={data.state === ""}
                >
                  {data.country === "México" && (
                    <>
                     <InputLabel>Estado</InputLabel>
                    <Select
                    MenuProps={{
                      PaperProps: {
                        style: {
                          maxHeight: 200,
                        },
                      },
                    }}
                    required
                    value={data.state}
                    onChange={(e) =>
                      setData({ ...data, state: e.target.value })
                    }
                    label="Estado"
                    variant="outlined"
                  >
                    {statesMexico.map((item) => (
                      <MenuItem key={item} value={item}>
                        {item}
                      </MenuItem>
                    ))}
                  </Select>
                  {data.state === "" && (<FormHelperText>Requerido*</FormHelperText>)}
                    </> )
                  }

                  {data.country != "México" && (
                     <TextField
                     required
                     error={data.state ===""}
                     value={data.state}
                     label="Estado"
                     helperText={data.state === ""? "Requerido*": ""}
                     onChange={(e) => setData({ ...data, state: e.target.value })}
                     variant="outlined"
                   />
                  )}
                </FormControl>

                <FormControl 
                fullWidth>
                  <TextField
                    required
                    error={data.city === ""}
                    helperText={data.city === ""? "Requerido*": ""}
                    value={data.city}
                    onChange={(e) => setData({ ...data, city: e.target.value })}
                    label="Ciudad"
                    variant="outlined"
                  />
                </FormControl>
              </Box>

              <Box
                sx={{ display: "flex", gap: "10px", flexDirection: "column" }}
              >
                <FormControl fullWidth>
                  <TextField
                    value={data.notes}
                    onChange={(e) =>
                      setData({ ...data, notes: e.target.value })
                    }
                    label="Notas adicionales"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </FormControl>
              </Box>

              <Box
                sx={{ display: "flex", gap: "10px", flexDirection: "column" }}
              ></Box>

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
                <Button variant="contained" type="submit">
                  Enviar
                </Button>
              </Box>
            </Paper>

            {loading === true && (
              <Modal
                open={loading}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "fixed",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: "2",
                }}
              >
                <Stack spacing={2} direction="row">
                  <CircularProgress />
                </Stack>
              </Modal>
            )}

            {loading === false && error && (
               <Modal
               open={error}
               sx={{
                 display: "flex",
                 flexDirection: "column",
                 position: "fixed",
                 justifyContent: "center",
                 alignItems: "center",
                 zIndex: "2",
               }}
             >
              <Paper 
              elevation={4}
              sx={{
                display:'flex',
                padding:'20px',
                flexDirection:'column',
                gap:'15px'
              }}
              >
                <Typography 
                variant="subtitle">
                Upps, algo ha salido mal
                </Typography>
                <Button 
                variant="contained"
                onClick={nextView} 
                >Intenta de nuevo
                </Button>
              </Paper>
             </Modal>
            )}

          </form>
        </Container>
      </Slide>
    );
}

export {FormStepFour};
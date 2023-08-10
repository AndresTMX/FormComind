import { useState } from "react";
import {
  Container,
  Box,
  Button,
  FormControl,
  Typography,
  Paper,
  Slide,
  TextField,
  Card,
  CardContent,
  CardMedia,
  InputLabel
} from "@mui/material";
import { actionTypes } from "../../../reducers/reduce.form";
import { AiFillPicture } from "react-icons/ai";

function FormStepThre({ data, setData, dispatch, mockSteps }) {
  const [view, setView] = useState(true);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setData({...data, previewImage: imageUrl, image:file })
    }
  };

  const preview = () => {
    setView(false);
    setTimeout(() => {
      dispatch({ type: actionTypes.setStep, payload: 2 });
      
      dispatch({
        type: actionTypes.setTwo,
        payload: { ...mockSteps[1], current: true },
      });

      dispatch({
        type: actionTypes.setThre,
        payload: { ...mockSteps[2], current: false },
      });
    }, 500);
  };

  const nextView = (e) => {
    e.preventDefault();
    setView(false)
    setTimeout(() => {
      dispatch({ type: actionTypes.setStep, payload: 4 });
      
      dispatch({
        type: actionTypes.setThre,
        payload: { ...mockSteps[2], current: false },
      });

      dispatch({
        type: actionTypes.setFour,
        payload: { ...mockSteps[3], current: true },
      });


    }, 500);
  };

  return (
    <Slide direction={view? "left": "right"} in={view} timeout={500} mountOnEnter unmountOnExit>
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
            3
          </Typography>
          <Typography 
           sx={{ 
            color: "white", 
            '@media (max-width: 730px)':{
            fontSize:'1.2rem',
            textAlign:'center'
          } }}
          variant="h4">
            ¿Qué conexiones requieres en el ensamble?
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
                sx={{ display: "flex", gap: "10px", flexDirection: "column" }}
              >
                <FormControl
                fullWidth>
                  <TextField
                  required
                   value={data.description}
                   onChange={(e) => setData({...data, description:e.target.value})}
                  label="Ingresa los modelos / describe las conexiones"
                  multiline
                  rows={8}
                  variant="outlined" />
                </FormControl>
              </Box>


            <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }}>
              <Card>
                <CardContent>
                  <Typography variant="h6">Adjunta una imagen</Typography>
                  <input
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    id="image-input"
                    onChange={handleImageChange}
                  />
                  <label htmlFor="image-input">
                    <Button
                      variant="contained"
                      component="span"
                      startIcon={<AiFillPicture />}
                    >
                      subir
                    </Button>
                  </label>
                  {data.image && (
                    <>
                      <CardMedia
                        component="img"
                        alt="Selected"
                        height="200"
                        image={data.previewImage}
                      />
                      <Typography variant="body2">Selected Image</Typography>
                    </>
                  )}
                </CardContent>
              </Card>
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
              <Button variant="contained" type="submit" >
                Siguiente
              </Button>
            </Box>
          </Paper>
        </form>
      </Container>
    </Slide>
  );
}

export { FormStepThre };

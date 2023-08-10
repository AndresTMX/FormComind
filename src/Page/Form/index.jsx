import { useState, useContext } from 'react'
import { StepContext } from '../../context/steps'
import { Box, Typography } from '@mui/material'
import { CounterStep } from '../../components/CounterStep'
import { FormStepOne } from '../../components/Form/stepOne'
import { FormStepTwo } from '../../components/Form/stepTwo'
import { FormStepThre } from '../../components/Form/stepThre'
import { FormStepFour } from '../../components/Form/stepFour'
import {Redirect} from '../../components/Redirect'
import { Dudes } from '../../components/Dudes'

function Form() {

    const [state, dispatch] = useContext(StepContext)
    const {currentStep, stepOne, stepTwo, stepThre, stepFour} = state;
  
    const mockSteps = [stepOne, stepTwo, stepThre, stepFour];

    const [data, setData] = useState({
        type:'industrial',
        proposed:'',
        typeFluid:'',
        temp:'',
        unidTemp:'Celcius',
        pressure:'',
        length:'',
        unidExtend:'pulg',
        diameterInt:'',
        diameterExt:'',
        description:'',
        previewImage:'',
        image:'',
        name:'',
        cell:'',
        email:'',
        city:'',
        state:'',
        country:'',
        notes:'',
    })

  return (
    <>

      <Box
        sx={{
          display:'flex',
          height: "150px",
          width: "100%",
          "@media (max-width: 720px)": {
           justifyContent:'center',
           alignItems:'center',
          },
        }}
      >
        <Box sx={{display:'flex', width:'160px', height:'150px'}}>
        <img src="/logo-white.svg" alt="logo" />
        </Box>
      </Box>

      <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            alignItems: "center",
            marginBottom: "50px",
            "@media (max-width: 730px)": {
              marginBottom: "10px",
            },
          }}
        >
          <Typography
            sx={{
              "@media (max-width: 730px)": {
                fontSize: "2rem",
              },
            }}
            variant="h3"
            fontWeight="700"
          >
            Haz tu pedido
          </Typography>
          <Typography
            sx={{
              "@media (max-width: 730px)": {
                fontSize: "1.2rem",
                textAlign: "center",
              },
            }}
            variant="h5"
            fontWeight="600"
          >
            de ensambles de mangueras y conexiones
          </Typography>
      </Box>
     
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          overflow: "hidden",
          "@media (max-width: 730px)": {
            gap: "10px",
          },
        }}
      >
        <CounterStep steps={mockSteps} />

        {currentStep === 1 && (
          <FormStepOne
            data={data}
            setData={setData}
            dispatch={dispatch}
            mockSteps={mockSteps}
          />
        )}

        {currentStep === 2 && (
          <FormStepTwo
            data={data}
            setData={setData}
            dispatch={dispatch}
            mockSteps={mockSteps}
          />
        )}

        {currentStep === 3 && (
          <FormStepThre
            data={data}
            setData={setData}
            dispatch={dispatch}
            mockSteps={mockSteps}
          />
        )}

        {currentStep === 4 && (
          <FormStepFour
            data={data}
            setData={setData}
            dispatch={dispatch}
            mockSteps={mockSteps}
          />
        )}

        {currentStep == 5 && (
          <Redirect
            message={
              "Gracias por enviar su solicitud, lo atenderemos  en breve"
            }
            tempRedirect={3000}
            url={"https://comimsa.net"}
          />
        )}
      </Box>

      <Dudes/>
    </>
  );
}

export { Form };

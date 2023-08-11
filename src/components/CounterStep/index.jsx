import { Box} from "@mui/material";
import '../../styles/index.css';

function Step({ step, num, status }) {
  return (
    <div className={status? 'counterStep_step active' : 'counterStep_step_responsive'}
    >
      <span
        style={{
          display: "flex",
          justifyContent:'center',
          backgroundColor: status?'orange': 'rgb(135, 150, 169)',
          borderRadius: "100%",
          padding: "5px",
          width:"30px",
          height:'30px',
          fontWeight:status?'600': '500',
        }}
      >
        {num}
      </span>
      <span 
      style={{ 
        color: status?'orange': 'rgb(135, 150, 169)'
      }}>{step}</span>
    </div>
  );
}

function CounterStep({steps}) {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "30px",
        justifyContent: "center",
        margin: "auto",
        marginTop:'20px',
        marginButton:'20px'
      }}
    >
      {steps.map((item) => (
        <Step key={item.step} step={item.step} num={item.num} status={item.current}/>
      ))}
    </Box>
  );
}

export { CounterStep };

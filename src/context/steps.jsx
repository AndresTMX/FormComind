import { createContext, useReducer } from "react";
import { initialState, reducer } from "../reducers/reduce.form";

const StepContext = createContext();

function StepProvider({children}) {

    const [state, dispatch] = useReducer(reducer, initialState)
    
    return ( 
        <StepContext.Provider value={[state, dispatch]}>
            {children}
        </StepContext.Provider>
     );
}



export {StepProvider, StepContext}
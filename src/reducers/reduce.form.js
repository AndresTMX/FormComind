
const initialState = {
    currentStep:1,
    stepOne:{
        step: "Manguera",
        num: "1",
        current: true,
    },
    stepTwo:{
        step: "Especificaciones",
        num: "2",
        current: false,
    },
    stepThre:{
        step: "Conexiones",
        num: "3",
        current: false,
    },
    stepFour:{
        step: "Haz tu pedido",
        num: "4",
        current: false,
    }

};

const actionTypes = {
    setStep:'SET_STEP',
    setOne:'SET_ONE',
    setTwo:'SET_TWO',
    setThre:'SET_THRE',
    setFour:'SET_FOUR',
}

const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type];
    } else {
        return state;
    }
}

const reducerObject = (state, payload) => ({
 
    [actionTypes.setStep]:{
        ...state,
        currentStep: payload
    },
    [actionTypes.setOne]:{
        ...state,
        stepOne:payload
    },
    [actionTypes.setTwo]:{
        ...state,
        stepTwo:payload
    },
    [actionTypes.setThre]:{
        ...state,
        stepThre:payload
    },
    [actionTypes.setFour]:{
        ...state,
        stepFour:payload
    },
});

export { initialState, reducer, actionTypes }
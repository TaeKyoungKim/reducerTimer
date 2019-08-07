import combineReducers from 'react'


//Actions 
const START_TIMER = "START_TIMER"
const RESTART_TIMER = "RESTART_TIMER"
const ADD_SECOND ="ADD_SECOND"

//Actions Making
const startTimer =()=>{
    return {
        type: START_TIMER
    }
}

const restartTimer =()=>{
    return {
        type: RESTART_TIMER
    }
}

const addSecond =()=>{
    return {
        type: ADD_SECOND
    }
}

//reducer

const TIMER_DURATION = 1500;

const initialState ={
    isplaying : false,
    elapseTime : 0,
    timerDuration :TIMER_DURATION
};

const reducer = (state =initialState, action)=>{
    switch(action.type){
        case START_TIMER :
            return applyStartTimer(state , action)
        
        case RESTART_TIMER:
            return applyRestartTimer(state, action)

        case ADD_SECOND :
            return applyAddSecond(state , action)
    }
}


const applyStartTimer= (state, action)=>{
    return {
        ...state,
        isplaying : true
    }
}

const applyRestartTimer= (state, action)=>{
    return {
        ...state,
        isplaying : false
    }
}

const applyAddSecond = (state, action)=>{

    const {elapseTime} = state;
    if(elapseTime <TIMER_DURATION)
         return {
        ...state,
        elapseTime : elapseTime + 1
    }
    else{
        return {
            ...state,
            isplaying : false
        }
    }
}



const actionCreators =  {
    startTimer,
restartTimer,
addSecond
}

export {actionCreators};

export default reducer;
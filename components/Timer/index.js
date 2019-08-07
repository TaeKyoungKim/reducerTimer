import {connect} from 'react-redux'
import {StyleSheet} from 'react-native'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../reducer'
import Presenter from './presenter'

const mapStateToProps = (state)=>{
    const {isplaying , elapseTime , timerDuration} = state;
    return {
        isplaying,
        elapseTime,
        timerDuration
    }
}

const mapDispatchProps =(dispatch)=>{
    return {
        startTime : bindActionCreators(actionCreators.startTimer , dispatch),
        restartTime :  bindActionCreators(actionCreators.restartTimer ,dispatch),
        addSecond :  bindActionCreators(actionCreators.addSecond ,dispatch)
    }
}
export default connect(mapStateToProps , mapDispatchProps)(Presenter);


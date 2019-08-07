import React , {Component} from 'react'
import {View, StyleSheet , Text, StatusBar ,TouchableOpacity} from 'react-native'
import {FontAwesome} from '@expo/vector-icons'

const formatTime= (time)=>{
    let minutes = Math.floor(time/60);
    time -= minutes * 60
    let seconds = parseInt(time % 60,10)
    return `${minutes <10 ? `0${minutes}` : minutes } : ${seconds <10 ? `0${seconds}` : seconds }`
}


export default class Presenter extends Component {
    componentWillReceiveProps(nextProps) {
        const currentProps = this.props;
        if (!currentProps.isplaying && nextProps.isplaying) {
            const timerInterval = setInterval(() => {
                currentProps.addSecond();
            }, 1000);
            this.setState({
                interval: timerInterval
            });
        } else if (currentProps.isplaying && !nextProps.isplaying) {
            clearInterval(this.state.interval);
        }
    }
    render(){
        const {isplaying , elapseTime , timerDuration , startTimer , restartTimer} = this.props
        
        return (
            <View style={styles.container}>
                <StatusBar barStyle = "light-content"/>
                <View style={styles.upper}>
                    <Text style={styles.time}>{formatTime(timerDuration-elapseTime)}</Text>
                </View>

                <View style={styles.lower}>
                    {!isplaying && (<TouchableOpacity  onPress={()=>{startTimer}}> 
                    <FontAwesome name={'play-circle'} size ={50}
                    />
                    </TouchableOpacity>)}

                    {isplaying && (<TouchableOpacity  onPress={()=>{restartTimer}}> 
                    <FontAwesome name={'stop-circle'} size ={50}
                    />
                    </TouchableOpacity>)}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CE0B24"
    },
    lower: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        paddingLeft: 25,
        paddingRight: 25
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: "100"
    }
 });
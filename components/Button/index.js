import React, {Component} from 'react';
import {TouchableOpacity} from 'expo';
import {FontAwesome} from '@expo/vector-icons'



const Button =({iconName, onPress})=> {
    return (
        <TouchableOpacity onPress={onPress}>
            <FontAwesome name={iconName} size={80} color="white"/>
        </TouchableOpacity>
    )
}

export default Button;
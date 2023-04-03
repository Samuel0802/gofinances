import React from "react";
import {Container} from './styles'
import { TextInput } from "react-native";


type Props = TextInput;


export function Input({...rest}: any){
    return(
    <Container {...rest} />

    );
}
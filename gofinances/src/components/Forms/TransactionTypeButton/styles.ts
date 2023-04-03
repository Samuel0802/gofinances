import styled, {css} from "styled-components/native";
import {Feather} from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";
import {RectButton} from "react-native-gesture-handler";

interface IconProps{
    type: 'up' | 'down';

}

interface ContainerProps{
    isActive: boolean;
    type: 'up' | 'down';
    
}
//export const Button = styled()``;

export const Container = styled(RectButton)<ContainerProps>`
width: 48%;
flex-direction: row;
align-items: center;
border-radius: 5px;
border-width: ${({isActive}) => isActive ? 0 : 1.5}px; //verificação pra tirar as borda após o click
border-style: solid;
border-color:${({theme}) => theme.colors.text} ;
padding: 16px;
justify-content: center;

${({ isActive, type}) => isActive && type === 'up' && css`
background-color: ${({theme}) => theme.colors.success_light};  //condição color após clicar no botton
` };

${({ isActive, type}) => isActive && type === 'down' && css`
background-color: ${({theme}) => theme.colors.attention_light};
` };
`;

export const Button = styled(RectButton)``;

export const Title = styled.Text`
font-size: ${RFValue(14)}px;
font-family: ${({theme}) => theme.fonts.regular};
`;

export const Icon = styled(Feather)<IconProps>`
font-size: ${RFValue(24)}px;
margin-right: 12;
color: ${({theme, type}) => 
type == 'up' ? theme.colors.success : theme.colors.attention}; //if ternario

`;
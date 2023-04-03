//Tela aonde que as cores serão chamada do global

import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue} from 'react-native-responsive-fontsize'; //importação do react-native-responsive-fontsize
import { getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import {DataListaProps} from '.';
import {BorderlessButton} from "react-native-gesture-handler";

export const Container = styled.View`

        flex: 1;
        background-color: ${({ theme }) => theme.colors.background};
`;

export const Header =styled.View`

width: 100%;
height: ${RFPercentage(42)}px;
justify-content: center;
align-items: flex-start;
flex-direction: row;
background-color: ${({theme}) => theme.colors.primary};

`;

export const UserWrapper = styled.View`
width: 100%;
padding: 0 24px;
flex-direction: row;
justify-content: space-between;
align-items: center;
margin-top: ${getStatusBarHeight() + RFValue(28)}px;

`;

 export const UserInfo = styled.View`
 
 flex-direction: row;
 align-items: center;
 
 `;

//importação da biblioteca react-native-responsive-fontsize
 export const Photo = styled.Image`  
 width: ${RFValue(48)}px;
 height: ${RFValue(48)}px;
 border-radius: 10px;
 `;

 export const User = styled.View`
 margin-left: 17px;
 
 `;

 export const UserGreeting = styled.Text`
 color: ${({ theme}) => theme.colors.shape};
 font-size: ${RFValue(18)}px;
 font-family: ${({theme}) => theme.fonts.regular};
 `;

 export const UserName = styled.Text`
 font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.bold};
 `;

 export const Icon = styled(Feather)`
 color: ${({theme}) => theme.colors.secondary};
 font-size: ${RFValue(24)}px;

 `;

 export const LogoutButton = styled(BorderlessButton)``;

export const HighlightCards = styled.ScrollView`

width: 100%;
position: absolute;
margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
flex: 1;
padding: 0 24px;
margin-top:  ${RFPercentage(12)}px;
`;


export const Title = styled.Text`
font-size: ${RFValue(24)}px;
font-family: ${({theme}) => theme.fonts.regular};
margin-bottom: 16px;
`;

export const TransactionList = styled(
        FlatList as new (
                props:FlatListProps<DataListaProps>
        ) => FlatList<DataListaProps>
        ).attrs({
        showsVerticalScrollIndicator:false, //remover barra lateral do app
        contentContainerStyle:{//utilizando css no index
         paddingBottom: getBottomSpace()
        }
})``;
 

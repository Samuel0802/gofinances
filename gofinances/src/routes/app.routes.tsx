import React from "react";
import { Platform } from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components"; //importanto o styled components
import {MaterialIcons} from "@expo/vector-icons";


const {Navigator, Screen} = createBottomTabNavigator();
import { Dashboard } from "../pages/Dashboard"; //são as roda do Navigator
import { Register } from "../pages/Register";

export function AppRoutes(){
const theme = useTheme();//importanto o styled components 

    return(
  <Navigator screenOptions={{
    headerShown: false, //remover o cabeçalho da rota em cima do app
    tabBarActiveTintColor: theme.colors.secondary, //cor do Navigator  qunado for clicada
    tabBarInactiveTintColor:  theme.colors.text,//cor do Navigator quando não for clicada
    tabBarLabelPosition: 'beside-icon', //colocar os icon ao lado do nome
    tabBarStyle: {
        height: 80, //Aumentar o tamanho da barra
        paddingVertical: Platform.OS === 'ios' ? 20 : 0,
    }

  }}> 
    <Screen 
     name="Listagem"
     component={Dashboard}
     options={{
        tabBarIcon: (({size, color}) =>
         <MaterialIcons 
          name="format-list-bulleted"
        size={size}
        color={color}
         />
        )
     }}
    />

<Screen 
     name="Cadastrar"
     component={Register}
     options={{
        tabBarIcon: (({size, color}) =>
         <MaterialIcons 
          name="attach-money"
        size={size}
        color={color}
         />
        )
     }}
    />

<Screen 
     name="Resumo"
     component={Register}
     options={{
        tabBarIcon: (({size, color}) =>
         <MaterialIcons 
          name="pie-chart"
        size={size}
        color={color}
         />
        )
     }}
    />
  </Navigator>
    );
}

import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import { BorderlessButton} from 'react-native-gesture-handler';



//import a baixo é pra chamar a fonte
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './src/routes/app.routes'; //Criando rotas dinamicas 



export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) { //Enquanto as fontes não serem carregada dá uma segurada até carregar!
    return <AppLoading />
  }

  return (

    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  )
}


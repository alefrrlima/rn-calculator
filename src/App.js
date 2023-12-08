import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components';

import { Text } from 'react-native';
import Calculator from './components/Calculator';

import theme from './styles/theme';

export default function () {
   const [fontsLoader] = useFonts({
      'Roboto-Bold': require('../assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
      'Roboto-Medium': require('../assets/fonts/Roboto-Medium.ttf'),
      'Roboto-Regular': require('../assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Thin': require('../assets/fonts/Roboto-Thin.ttf'),
      'RobotoMono-Bold': require('../assets/fonts/RobotoMono-Bold.ttf'),
      'RobotoMono-Light': require('../assets/fonts/RobotoMono-Light.ttf'),
      'RobotoMono-Medium': require('../assets/fonts/RobotoMono-Medium.ttf'),
      'RobotoMono-Regular': require('../assets/fonts/RobotoMono-Regular.ttf'),
      'RobotoMono-Thin': require('../assets/fonts/RobotoMono-Thin.ttf'),
   });

   if (!fontsLoader) {
      return <Text>Loading...</Text>;
   }

   return (
      <>
         <StatusBar />
         <ThemeProvider theme={theme}>
            <Calculator />
         </ThemeProvider>
      </>
   );
}

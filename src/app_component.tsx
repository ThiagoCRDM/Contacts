import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';



export const AppComponent: React.FC = () => {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}
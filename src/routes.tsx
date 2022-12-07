import { createStackNavigator } from '@react-navigation/stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import {Home} from './pages/home/ home_page'
import {Signin} from './pages/signin/login'
import {Signup} from './pages/signup/signup'

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home:  undefined;
};

export type NavProps = NativeStackScreenProps<RootStackParamList, 'Login'>

const Stack = createStackNavigator<RootStackParamList>();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      defaultScreenOptions={{ headerShown: false }}
      initialRouteName={"Login"}
    >
      <Stack.Screen name="Login" component={Signin} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Signup} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default Routes;
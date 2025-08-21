import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './foundation/theme/theme';
import MainStack from './navigations/MainStack';
import { Provider } from 'react-redux';
import store from './redux/Storage';
import Splash from './screens/Splash';
import { useNetworkStatus } from './hooks/common/useNetworkStatus';
import Toast from 'react-native-simple-toast';
import { getToken } from './utils/Storage';

const App = () => {
  const isConnected = useNetworkStatus();

  useEffect(() => {
    if (!isConnected) {
      Toast.show('Please check internet connection!', Toast.SHORT, Toast.BOTTOM);
    }
  }, [isConnected]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </Provider>
  );
};

export default App;

export function MyApp() {
  const [initialRouteName, setInitialRouteName] = useState('');
  // const dispatch = useDispatch();

  useEffect(() => {
    initializeAppData();
  }, []);

  const initializeAppData = async () => {
    const token = await getToken();
    try {
      if (token) {
        // const response = await getProfile();
        // dispatch(setToken(response.data));
      }
      setInitialRouteName( token ? 'Home' : 'Landing');
    } catch (error) {
      console.error('Error initializing app data:', error);
    } finally {
      // SplashScreen hide
    }
  };

  return (
    <>
      {initialRouteName === '' ? (
        <Splash />
      ) : (
        <>
          <StatusBar />
          <MainStack route={initialRouteName} />
        </>
      )}
    </>
  );
}

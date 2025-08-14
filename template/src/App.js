import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import Text from './components/common/Text';
import { ThemeProvider } from '@shopify/restyle';
import { theme } from './foundation/theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <StatusBar />
        <View>
          <Text variant={'heading1'} style={{ marginVertical: 7, marginHorizontal: 10 }}>
            Template
          </Text>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

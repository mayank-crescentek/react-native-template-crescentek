import { StyleSheet, View } from 'react-native';
import React from 'react';

// imports components, assets etc
import Text from '../../components/common/Text';

export default function Landing() {
  return (
    <View style={styles.container}>
      <Text variant={'heading1'}>Landing Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

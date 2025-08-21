import AsyncStorage from '@react-native-async-storage/async-storage';

const authKey = 'token';

export async function getToken() {
  const authToken = await AsyncStorage.getItem(authKey);
  return authToken;
}

export async function loginUser(authToken) {
  try {
    await AsyncStorage.setItem(authKey, authToken);
  } catch (error) {
    // An error occured here. It should do something
  }
}

export async function logoutUser() {
  try {
    await AsyncStorage.removeItem(authKey);
  } catch (error) {
    // An error occured here. It should do something
  }
}

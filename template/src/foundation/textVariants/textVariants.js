import { Platform } from 'react-native';

export const boldFontFamily = Platform.OS === 'ios' ? 'Poppins' : 'Poppins-SemiBold';
export const mediumFontFamily = Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Medium';
export const regularFontFamily = Platform.OS === 'ios' ? 'Poppins' : 'Poppins-Regular';

export const textVariants = {
  heading: {
    fontFamily: boldFontFamily,
    fontWeight: '900',
    fontSize: 22,
    lineHeight: 40,
    letterSpacing: 0.3,
    color: 'black',
  },
  heading1: {
    fontFamily: boldFontFamily,
    fontWeight: '900',
    fontSize: 18,
    lineHeight: 40,
    letterSpacing: 0.3,
    color: 'red',
  },
  body: {
    fontFamily: mediumFontFamily,
    fontWeight: '500',
    fontSize: 16,
    color: 'black',
  },
};

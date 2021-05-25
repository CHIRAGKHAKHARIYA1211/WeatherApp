import {moderateScale} from './Matrics';

const type = {
  bold: 'Roboto-Bold',
  light: 'Roboto-Light',
  medium: 'Roboto-Medium',
  regular: 'Roboto-Regular',
  thin: 'Roboto-Thin',
};

const size = {
  h1: moderateScale(38),
  h2: moderateScale(34),
  h3: moderateScale(30),
  h4: moderateScale(28),
  h5: moderateScale(24),
  h6: moderateScale(19),
  h20: moderateScale(20),
  input: moderateScale(18),
  regular: moderateScale(17),
  medium: moderateScale(14),
  shmedium: moderateScale(13),
  small: moderateScale(13),
  sminy: moderateScale(12),
  tiny: moderateScale(11),
  label: moderateScale(16),
};

const style = {
  h1: {
    fontFamily: type.regular,
    fontSize: size.h1,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.regular,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.regular,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.regular,
    fontSize: size.h6,
  },
  h20: {
    fontFamily: type.regular,
    fontSize: size.h20,
  },
  normal: {
    fontFamily: type.regular,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.regular,
    fontSize: size.medium,
  },
  label: {
    fontFamily: type.regular,
    fontSize: size.label,
  },
};

export default {
  type,
  size,
  style,
};

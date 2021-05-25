import {TextInput, Text} from 'react-native';
TextInput.defaultProps = TextInput.defaultProps || {};
TextInput.defaultProps.allowFontScaling = true;
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = true;
Text.defaultProps.maxFontSizeMultiplier = 1.1;

const strings = {
  appName: 'WeatherApp',
  humidity: 'Humidity',
  windSpeed: 'Wind Speed',
  maxTemp: 'Max. Temp',
  minTemp: 'Min. Temp',
};
export default strings;

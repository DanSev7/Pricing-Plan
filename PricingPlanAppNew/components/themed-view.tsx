import { View as DefaultView } from 'react-native';
import { useThemeColor } from './Themed';

export type ThemedViewProps = DefaultView['props'] & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView(props: ThemedViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
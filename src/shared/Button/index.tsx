import React from 'react';
import {Text, Pressable, StyleProp, TextStyle} from 'react-native';
import CircularLoader from '../Loader/CircularLoader';

interface IButton {
  buttonStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: (params?: any) => void | Promise<void>;
  onBlur?: () => void;
  title?: string;
  Icon?: React.ReactNode | null;
  loading?: boolean;
  disabled?: boolean;
  disabledStyles?: StyleProp<TextStyle>;
}

const RNButton = ({
  buttonStyle = {width: '100%', marginBottom: 20},
  textStyle,
  onPress,
  onBlur,
  title = 'Shop Now',
  Icon = null,
  loading = false,
  disabled = false,
  disabledStyles,
}: IButton): JSX.Element => {
  return (
    <Pressable
      style={[buttonStyle, disabled === true && disabledStyles]}
      onPress={onPress}
      onBlur={onBlur}
      disabled={disabled}>
      {loading ? (
        <CircularLoader />
      ) : (
        <>
          {Icon}
          <Text style={textStyle}>{title}</Text>
        </>
      )}
    </Pressable>
  );
};

export default RNButton;

// <Button mode="outlined" textColor='black'
//             style={{ }}
//             contentStyle={{ textAlign: 'center' }}
//             onPress={onPress}>
//             {title}
//         </Button>

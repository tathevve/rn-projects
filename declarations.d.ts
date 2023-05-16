declare module '*.png';
declare module '*.jpg' {
  import {ImageSourcePropType} from 'react-native';

  const content: ImageSourcePropType;

  export default content;
}
declare module '*.jpeg';

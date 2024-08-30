declare module 'react-native-vector-icons/AntDesign' {
    import { IconProps } from 'react-native-vector-icons/Icon';
    import * as React from 'react';
    
    export default class AntDesign extends React.Component<IconProps> {}
  }
  
  declare module 'react-native-vector-icons/FontAwesome' {
    import { IconProps } from 'react-native-vector-icons/Icon';
    import * as React from 'react';
    
    export default class FontAwesome extends React.Component<IconProps> {}
  }
  
  declare module 'react-native-vector-icons/MaterialIcons' {
    import { IconProps } from 'react-native-vector-icons/Icon';
    import * as React from 'react';
    
    export default class MaterialIcons extends React.Component<IconProps> {}
  }
  
  // Repeat for other icon sets...
  
  declare module 'react-native-vector-icons/Icon' {
    import * as React from 'react';
    import { TextStyle, ViewStyle, ImageStyle } from 'react-native';
  
    export interface IconProps {
      name: string;
      size?: number;
      color?: string;
      style?: TextStyle | ViewStyle | ImageStyle;
    }
  
    export default class Icon extends React.Component<IconProps> {}
  }
  
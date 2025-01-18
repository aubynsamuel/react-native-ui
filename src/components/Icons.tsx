import React from 'react';
import {AntDesign} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import {Ionicons} from '@expo/vector-icons';
import {Feather} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import {Entypo} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {SimpleLineIcons} from '@expo/vector-icons';
import {Octicons} from '@expo/vector-icons';
import {Foundation} from '@expo/vector-icons';
import {EvilIcons} from '@expo/vector-icons';
import {StyleProp, ViewStyle} from 'react-native';

export const Icons = {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
};

export interface IconProps {
  type: any;
  name: string;
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

const Icon = ({type, name, color, size = 24, style}: IconProps) => {
  const fontSize = 24;
  const Tag = type;
  return (
    <>
      {type && name && (
        <Tag name={name} size={size || fontSize} color={color} style={style} />
      )}
    </>
  );
};

export default Icon;

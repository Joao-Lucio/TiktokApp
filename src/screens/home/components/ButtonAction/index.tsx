import { Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from './styles';
import { ButtonActionProps } from './models';
import { colors } from '../../../../theme';
import { Activity } from 'react';

function formatNumber(number?: number): string {
  if (!number) return '0';
  if (number >= 1000) {
    return `${number / 1000}k`;
  }
  return number.toString();
}

export const ButtonAction = ({
  iconName,
  number,
  onPress,
  isSelected,
}: ButtonActionProps) => {
  return (
    <TouchableOpacity className={styles.action} onPress={() => onPress?.()}>
      <Ionicons
        name={iconName}
        size={35}
        color={isSelected ? colors.liked : colors.foreground}
      />
      <Activity mode={number ? 'visible' : 'hidden'}>
        <Text className={styles.actionText}>{formatNumber(number)}</Text>
      </Activity>
    </TouchableOpacity>
  );
};

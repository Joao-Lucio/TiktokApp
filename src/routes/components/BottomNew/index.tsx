import { View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { styles } from './styles';
import { ButtonNewProps } from './models';
import { colors } from '../../../theme';

export function ButtonNew({ size }: ButtonNewProps) {
  return (
    <View className={styles.container}>
      <View className={styles.inner}>
        <Entypo name="plus" size={size} color={colors.onSurface} />
      </View>
    </View>
  );
}

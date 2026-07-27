import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export const HeaderHome = () => {
  return (
    <View className={styles.labels}>
      <TouchableOpacity>
        <Text className={`${styles.labelText} ${styles.followingLabel}`}>
          Seguindo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text className={`${styles.labelText} ${styles.forYouLabel}`}>
          Para você
        </Text>
        <View className={styles.indicator} />
      </TouchableOpacity>
    </View>
  );
};

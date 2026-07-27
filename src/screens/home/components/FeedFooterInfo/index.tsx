import { Text, View } from 'react-native';
import { styles } from './styles';
import { FeedFooterInfoProps } from './models';

export const FeedFooterInfo = ({ name, description }: FeedFooterInfoProps) => {
  return (
    <View className={styles.info} pointerEvents="none">
      <Text className={styles.name}>{name}</Text>
      <Text className={styles.description} numberOfLines={2}>
        {description}
      </Text>
    </View>
  );
};

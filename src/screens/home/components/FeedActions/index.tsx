import { View } from 'react-native';
import { styles } from './styles';
import { FeedActionsProps } from './models';
import { ButtonAction } from '../ButtonAction';

export const FeedActions = ({
  likes,
  comments,
  liked,
  likeButton,
}: FeedActionsProps) => {
  return (
    <View className={styles.actions}>
      <ButtonAction
        iconName="heart"
        number={likes}
        onPress={likeButton}
        isSelected={liked}
      />
      <ButtonAction iconName="chatbubble-ellipses" number={comments} />
      <ButtonAction iconName="bookmark" />
    </View>
  );
};

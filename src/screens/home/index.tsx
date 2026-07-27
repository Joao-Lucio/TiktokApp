import { View, FlatList } from 'react-native';
import { useState } from 'react';
import { heightScreen } from '../../utils/screenSize';
import { feedItems } from '../../constants/data';
import { FeedProps } from '../../models/Feed';
import { styles } from './styles';
import { FeedItem } from './components/FeedItem';
import { HeaderHome } from './components/Header';

export function Home() {
  const [showItem, setShowItem] = useState<FeedProps | undefined>();

  return (
    <View className={styles.container}>
      <HeaderHome />

      <FlatList
        data={feedItems}
        renderItem={({ item }) => (
          <FeedItem data={item} currentVisibleItem={showItem} />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        snapToInterval={heightScreen}
        snapToAlignment="start"
        disableIntervalMomentum
        decelerationRate="fast"
        scrollEventThrottle={16}
        onViewableItemsChanged={({ viewableItems }) => {
          const visibleItem = viewableItems[0];

          if (visibleItem?.index != null) {
            setShowItem(feedItems[visibleItem.index]);
          }
        }}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 80,
        }}
      />
    </View>
  );
}

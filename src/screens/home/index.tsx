import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
  FlatList,
  Dimensions,
} from 'react-native';
import { FeedItem } from '../../components/FeedItem';
import { useState } from 'react';

const feedItems = [
  {
    id: '1',
    url: 'https://i.imgur.com/Cnz1CPK.mp4',
    name: '@sujeitoprogramador',
    description: 'Criando o ShotDev do Zero com RN.',
    likes: 2102,
    comments: 145,
  },
  {
    id: '2',
    url: 'https://i.imgur.com/E0tK2bY.mp4',
    name: '@henriquesilva',
    description:
      'Fala turma, estou aprendendo React Native com sujeito programador.',
    likes: 890,
    comments: 89,
  },
  {
    id: '3',
    url: 'https://i.imgur.com/mPFvFyX.mp4',
    name: '@sujeitoprogramador',
    description: 'Aprendendo a trabalhar com Drag and Drop no React Native.',
    likes: 112,
    comments: 13,
  },
];

const { height: heightScreen } = Dimensions.get('screen');

export function Home() {
  const [showItem, setShowItem] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <TouchableOpacity>
          <Text style={[styles.labelText, { color: '#DDD' }]}>Seguindo</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.labelText, { color: '#FFF' }]}>Para você</Text>
          <View style={styles.indicator}></View>
        </TouchableOpacity>
      </View>

      <FlatList
        data={feedItems}
        renderItem={({ item }) => (
          <FeedItem data={item} currentVisibleItem={showItem} />
        )}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        onViewableItemsChanged={({ viewableItems }) => {
          if (viewableItems.length > 0) {
            setShowItem(feedItems[viewableItems[0].index ?? 0]);
          }
        }}
        snapToAlignment="center"
        snapToInterval={heightScreen}
        scrollEventThrottle={20}
        decelerationRate={'fast'}
        viewabilityConfig={{
          waitForInteraction: false,
          viewAreaCoveragePercentThreshold: 100,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  labels: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    position: 'absolute',
    top: 6,
    left: 0,
    right: 0,
    marginTop:
      Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 55,
    zIndex: 99,
  },
  labelText: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 2,
  },
  indicator: {
    width: 32,
    height: 2,
    alignSelf: 'center',
    marginTop: 4,
    backgroundColor: '#FFF',
  },
});

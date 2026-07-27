import { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Video, { ResizeMode } from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FeedProps } from '../../models/Feed';
import { heightScreen } from '../../utils/screenSize';
interface FeedItemProps {
  data: FeedProps;
  currentVisibleItem?: FeedProps;
}

export function FeedItem({ data, currentVisibleItem }: FeedItemProps) {
  const [paused, setPaused] = useState(false);
  const [liked, setLiked] = useState(false);

  function togglePlayback() {
    setPaused(currentPaused => !currentPaused);
  }

  function likeButton() {
    setLiked(isLiked => !isLiked);
  }

  function formatNumber(number: number): string {
    if (number >= 1000) {
      return `${number / 1000}k`;
    }
    return number.toString();
  }

  useEffect(() => {
    if (currentVisibleItem?.id === data.id) {
      setPaused(false);
      return;
    }
    setPaused(true);
  }, [currentVisibleItem]);

  return (
    <View>
      <View style={[styles.info, { bottom: 100 }]}>
        <Text style={styles.name}>{data.name}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {data.description}
        </Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={likeButton}>
          <Ionicons name="heart" size={35} color={liked ? '#DC143C' : '#FFF'} />
          <Text style={styles.actionText}>{formatNumber(data.likes)}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="chatbubble-ellipses" size={35} color="#FFF" />
          <Text style={styles.actionText}>{formatNumber(data.comments)}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name="bookmark" size={35} color="#FFF" />
        </TouchableOpacity>
      </View>
      <Video
        source={{ uri: data.url }}
        style={{ width: '100%', height: heightScreen }}
        pointerEvents="none"
        resizeMode={ResizeMode.CONTAIN}
        paused={paused}
        repeat
        muted={false}
        onLoad={() => {
          console.log('Vídeo carregado');
        }}
        onLoadStart={() => {
          console.log('Carregando vídeo');
        }}
        onBuffer={({ isBuffering }) => {
          console.log('Buffer:', isBuffering);
        }}
        onError={error => {
          console.log(
            'Erro ao carregar vídeo:',
            JSON.stringify(error, null, 2),
          );
        }}
        onPlaybackStateChanged={event => {
          console.log('Status:', event);
        }}
      />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel={paused ? 'Reproduzir vídeo' : 'Pausar vídeo'}
        onPress={togglePlayback}
        style={styles.touchArea}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    position: 'absolute',
    zIndex: 99,
    left: 8,
    padding: 8,
  },
  name: {
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 4,
    textShadowColor: 'rgba(0,0,0,0.60)',
    textShadowOffset: { width: -1, height: 1.4 },
    textShadowRadius: 8,
  },
  description: {
    color: '#FFF',
    marginRight: 34,
    textShadowColor: 'rgba(0,0,0,0.20)',
    textShadowOffset: { width: -1, height: 1.4 },
    textShadowRadius: 8,
  },
  actions: {
    position: 'absolute',
    zIndex: 99,
    right: 10,
    bottom: Platform.OS === 'android' ? 120 : 170,
    gap: 8,
  },
  actionText: {
    textAlign: 'center',
    fontSize: 13,
    color: '#FFF',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,0.20)',
    textShadowOffset: { width: -1, height: 1.4 },
    textShadowRadius: 8,
  },
  touchArea: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
});

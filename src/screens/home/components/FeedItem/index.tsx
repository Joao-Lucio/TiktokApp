import { Pressable, View } from 'react-native';
import Video, { ResizeMode } from 'react-native-video';
import { styles } from './styles';
import { FeedItemProps } from './models';
import { useFeedItemViewModel } from './viewModel';
import { FeedFooterInfo } from '../FeedFooterInfo';
import { FeedActions } from '../FeedActions';
import { heightScreen } from '../../../../utils/screenSize';

export function FeedItem(props: FeedItemProps) {
  const { data } = props;

  const { paused, liked, togglePlayback, likeButton } =
    useFeedItemViewModel(props);

  return (
    <View className={styles.container} style={{ height: heightScreen }}>
      <FeedFooterInfo name={data.name} description={data.description} />
      <FeedActions
        likeButton={likeButton}
        likes={data.likes}
        comments={data.comments}
        liked={liked}
      />
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
        className={styles.touchArea}
      />
    </View>
  );
}

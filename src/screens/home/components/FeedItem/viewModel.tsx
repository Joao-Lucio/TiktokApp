import { useEffect, useState } from 'react';
import { FeedItemProps } from './models';

export const useFeedItemViewModel = ({
  data,
  currentVisibleItem,
}: FeedItemProps) => {
  const [paused, setPaused] = useState(false);
  const [liked, setLiked] = useState(false);

  function togglePlayback() {
    setPaused(currentPaused => !currentPaused);
  }

  function likeButton() {
    setLiked(isLiked => !isLiked);
  }

  useEffect(() => {
    if (currentVisibleItem?.id === data.id) {
      setPaused(false);
      return;
    }
    setPaused(true);
  }, [currentVisibleItem, data.id]);

  return {
    paused,
    liked,
    togglePlayback,
    likeButton,
  };
};

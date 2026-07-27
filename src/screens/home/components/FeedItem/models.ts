import { FeedProps } from '../../../../models/Feed';

export interface FeedItemProps {
  data: FeedProps;
  currentVisibleItem?: FeedProps;
}

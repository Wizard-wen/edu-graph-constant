/**
 *
 */
import { PublicEntityEnum } from '../constant/public/common.constant';

export type CommentResponseType = {
  id: string;
  userId?: string;
  entityType: PublicEntityEnum;
  entityId: string
  content: string;
  parentId?: string;
  hasPicture?: boolean;
  pictureKeyList: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type CommentTreeNodeType = ({
  key: string;
  title: string;
  name: string;
  children?: CommentTreeNodeType[];
} & CommentResponseType);

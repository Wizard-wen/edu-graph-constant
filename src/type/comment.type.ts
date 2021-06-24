/**
 *
 */
import { PublicEntityEnum } from '../constant/public/common.constant';

export type CommentModelType = {
  id: string;
  userId?: string;
  entityId: string
  content: string;
  parentId?: string;
  hasPicture?: boolean;
  pictureKeyList: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type CommentResponseType = {
  id: string;
  userId?: string;
  entityType: PublicEntityEnum;
  entityId: string
  content: string;
  parentId?: string;
  hasPicture?: boolean;
  pictureKeyList?: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type CommentTreeNodeType = ({
  key: string;
  title: string;
  name: string;
  children?: CommentTreeNodeType[];
} & CommentResponseType);


export type CommentCreateRequestType = {
  entityType: PublicEntityEnum;
  entityId: string;
  content: string;
  parentId?: string;
  hasPicture?: string;
  pictureKeyList?: string[];
};

export type CommentRemoveRequestType = {
  id: string;
  entityType: PublicEntityEnum;
  entityId: string;
};

export type CommentPageListRequestType = {
  pageSize: number;
  pageIndex: number;
  entityType?: PublicEntityEnum;
  order?: { [key: string]: number };
};


/**
 * @author wizard.song
 * @date 2021/06/26 23:15
 */

import {
  CommentEntityType,
} from '../constant/public/entity.constant';

export type CommentModelType = {
  id: string;
  entityId: string;
  entityType: string;
  userId?: string;
  content: string;
  parentId?: string;
  rootCommentId? : string;
  hasPicture?: boolean;
  pictureKeyList: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type CommentResponseType = CommentModelType;

export type CommentTreeBaseType = CommentModelType;

export type CommentTreeNodeType = ({
  key: string;
  title: string;
  name: string;
  children?: CommentTreeNodeType[];
} & CommentTreeBaseType);


export type CommentCreateRequestType = {
  entityType: CommentEntityType;
  entityId: string;
  content: string;
  parentId?: string;
  hasPicture?: string;
  pictureKeyList?: string[];
};

export type CommentRemoveRequestType = {
  id: string;
  entityType: CommentEntityType;
  entityId: string;
};

export type CommentPageListRequestType = {
  pageSize: number;
  pageIndex: number;
  entityType?: CommentEntityType;
  order?: { [key: string]: number };
};


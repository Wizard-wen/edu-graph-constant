/**
 * @author wizard.song
 * @date 2021/07/12 23:47
 */

import { AccountEnum } from "..";
import { TagEntityType } from '../constant/public/entity.constant';

export type EntityTagModelType = {
  id: string;
  entityId: string;
  entityType: TagEntityType;
  userId: string;
  tagId: string;
  createdAt: Date;
  updatedAt: Date;
}

export type EntityTagResponseType = EntityTagModelType & {
  tagName: string;
};

export type TagModelType = {
  id: string;
  name: string;
  accountId: string;
  accountType: AccountEnum;
  domainId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type TagResponseType = TagModelType;

export type TagBindRequestType = {
  tagId: string;
  entityId: string;
  entityType: TagEntityType;
}

export type TagCreateRequestType = {
  name: string;
  domainId?: string;
}

export type TagCancelBindRequestType = TagBindRequestType;

export type TagPageListRequestType = {
  domainId?: string;
  name?: string;
  isOwnTag?: boolean;
  pageIndex: number;
  pageSize: number;
};

export type TagPageListResponseType = {
  total: number;
  list: TagResponseType[];
};

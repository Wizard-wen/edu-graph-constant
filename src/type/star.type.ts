/**
 * @author wizard.song
 * @date 2021/07/12 23:10
 */

import { StarEntityType } from "../constant/public/entity.constant";

export type StarModelType = {
  id: string;
  entityId: string;
  entityType: StarEntityType;
  count: number;
  createdAt: Date;
  updatedAt: Date;
}

export type StarResponseType = StarModelType;

export type StarDetailModelType = {
  id: string;
  entityId: string;
  entityType: StarEntityType;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
export type StarDetailResponseType = StarDetailModelType;

export type StarCreateRequestType = {
  entityId: string;
  entityType: StarEntityType;
}

export type StarCancelRequestType = StarCreateRequestType;

export type MyStarPageListRequestType = {
  pageIndex: number;
  pageSize: number;
  entityType?: StarEntityType;
};

export type MyStarPageListResponseType = {
  total: number;
  list: StarResponseType[];
};

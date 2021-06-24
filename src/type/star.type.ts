import { PublicEntityEnum } from "..";

export type StarResponseType = {
  id: string;
  entityId: string;
  entityType: PublicEntityEnum;
  count: number;
  createdAt: Date;
  updatedAt: Date;
}

export type StarCreateRequestType = {
  entityId: string;
  entityType: PublicEntityEnum;
}

export type StarCancelRequestType = StarCreateRequestType;

export type MyStarPageListRequestType = {
  pageIndex: number;
  pageSize: number;
  entityType?: PublicEntityEnum;
};

export type MyStarPageListResponseType = {
  total: number;
  list: StarResponseType[];
};

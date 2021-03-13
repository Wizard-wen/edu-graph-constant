/**
 * @author wizard.song
 * @date 2021/02/20 22:00
 */

import { StorageType } from '../../constant/storage';

export type QiniuCallbackRequestType = {
  key: string;
  hash: string;
  fsize: number;
  bucket: string;
  mimeType: string;
  userId: string;
  name: string;
  storageType: StorageType;
};

export type QiniuUploadTokenDataType = {
  uploadToken: string;
  fileKey: string;
};

export type UploadTokenRequestType = {
  userId?: string;
  name: string;
  storageType?: StorageType;
};

export type CustomQiniuPutPolicyOptionsType = {
  scope: string;
  expires: number;
  saveKey: string;
  callbackUrl: string;
  callbackBodyType: string;
  callbackBody: string;
};

export type StorageResponseType = {
  id: string;
  key: string;
  userId: string;
  size: number;
  storageType: StorageType;
  name: string;
  mimeType: string;
  createdAt: Date;
  updatedAt: Date;
};

export type StoragePageListResponseType = {
  list: StorageResponseType[];
  total: number;
};

export type StorageResponseTypeUpdateRequestType = {
  id: string;
  name?: string;
};

export type StoragePageListFilterRequestType = {
  pageIndex: number;
  pageSize: number;
  storageType: StorageType;
  order: { [key: string]: number } | {};
};

export type QiniuFileStatType = {
  deleted: boolean;
  hash?: string;
  fsize?: number;
  mimeType?: string;
  putTime?: number;
  type?: number;
};

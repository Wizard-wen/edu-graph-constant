/**
 * @author wizard.song
 * @date 2021/02/20 22:00
 */

import { AccountEnum, FileEnum } from "../index";

export type QiniuCallbackRequestType = {
  key: string;
  hash: string;
  fsize: number;
  bucket: string;
  mimeType: string;
  accountId: string;
  accountType: AccountEnum;
  name: string;
  fileType: FileEnum;
};

export type QiniuUploadTokenDataType = {
  uploadToken: string;
  fileKey: string;
};

export type UploadTokenRequestType = {
  accountId: string;
  accountType: AccountEnum;
  name: string;
  fileType?: FileEnum;
};

export type CustomQiniuPutPolicyOptionsType = {
  scope: string;
  expires: number;
  saveKey: string;
  callbackUrl: string;
  callbackBodyType: string;
  callbackBody: string;
};

export type FileResponseType = {
  id: string;
  key: string;
  accountId: string;
  accountType: AccountEnum;
  size: number;
  type: FileEnum;
  name: string;
  mimeType: string;
  createdAt: Date;
  updatedAt: Date;
};

export type FilePageListResponseType = {
  list: FileResponseType[];
  total: number;
};

export type FileResponseTypeUpdateRequestType = {
  id: string;
  name?: string;
};

export type FilePageListFilterRequestType = {
  pageIndex: number;
  pageSize: number;
  fileType?: FileEnum;
  accountType?: AccountEnum;
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

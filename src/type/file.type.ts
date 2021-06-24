/**
 * @author wizard.song
 * @date 2021/02/20 22:00
 */

import { AccountEnum, FileEnum } from "../index";

// 七牛回调系统接口的入参
export type QiniuCallbackRequestType = {
  key: string;
  hash: string;
  fsize: number;
  bucket: string;
  mimeType: string;
  accountId: string;
  accountType: AccountEnum;
  name: string;
  type: FileEnum;
};

export type QiniuUploadingCredentialResponseType = {
  uploadToken: string;
  key: string;
};

export type QiniuUploadingCredentialRequestType = {
  name: string;
  type?: FileEnum;
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
  size: number;
  type: FileEnum;
  name: string;
  mimeType: string;
  createdAt: Date;
  updatedAt: Date;
  accountId?: string;
  accountType?: AccountEnum;
};

export type FilePageListResponseType = {
  list: FileResponseType[];
  total: number;
};

export type FileUpdateRequestType = {
  key: string;
  name?: string;
};

export type FilePageListFilterRequestType = {
  pageIndex: number;
  pageSize: number;
  type?: FileEnum;
  order?: { [key: string]: number };
};

export type QiniuFileStatType = {
  deleted: boolean;
  hash?: string;
  fsize?: number;
  mimeType?: string;
  putTime?: number;
  type?: number;
};

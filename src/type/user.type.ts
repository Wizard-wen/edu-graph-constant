/**
 * @author wizard.song
 * @date 2021/07/12 23:37
 */

import { UserEnum } from "..";

export type UserModelType = {
  type: UserEnum;
  organizationId?: string;
  name: string;
  phone?: string;
  password: string;
  email?: string;
  isForbidden?: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type UserResponseType = UserModelType;

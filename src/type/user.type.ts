/**
 *
 */
import { UserEnum } from "..";

export type UserResponseType = {
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

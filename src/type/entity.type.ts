/**
 * @author wizard.song
 * @date 2021/07/12: 23:45
 */

import { PublicEntityType } from "..";

export type EntityModelType = {
  id: string;
  name: string;
  entityItemId: string;
  entityType: PublicEntityType
  createdAt: Date;
  updatedAt: Date;
}
export type EntityResponseType = EntityModelType;

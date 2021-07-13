/**
 * @author wizard.song
 * @date 2021/05/29 11:38
 */

import { SectionEntityType } from "../../dist/constant/public/common.constant";

export type SectionModelType = {
  id: string;
  key: string;
  name: string;
  title: string;
  repositoryId: string;
  parentId?: string;
}

export type SectionResponseType = SectionModelType;

export type SectionCreateRequestType = {
  name: string;
  repositoryId: string;
  parentId?: string;
}

export type SectionTreeRequestType = {
  repositoryId: string;
}

export type SectionTreeNodeType = ({
  children?: SectionTreeNodeType[];
} & SectionResponseType)

export type SectionEntityResponseType = {
  id: string;
  title: string;
  name: string;
  key: string;
  sectionId?: string;
  parentId?: string;
  entityId?: string;
  entityType?: SectionEntityType;
  createdAt: Date;
  updatedAt: Date;
}

export type SectionEntityTreeNodeType = (SectionEntityResponseType & {
  children?: SectionEntityTreeNodeType[];
})

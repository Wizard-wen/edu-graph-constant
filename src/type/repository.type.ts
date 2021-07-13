/**
 * @author wizard.song
 * @date 2021/05/29 11:38
 */

import { RepositoryEnum } from '../constant/module/account.constant';
import { KnowledgeResponseType } from './knowledge.type';
import { KnowledgeEdgeResponseType } from './knowledge.edge.type';

export type RepositoryModelType = {
  id: string;
  name: string;
  type: RepositoryEnum;
  // admin调用时才展示userId
  userId?: string;
  createdAt: Date;
  updatedAt: Date;
  description?: string;
}

export type RepositoryResponseType = RepositoryModelType & {
  // entity表中的id
  entityId: string;
};

export type RepositoryListRequestFilterType = {
  name: string;
  type: RepositoryEnum;
  // admin调用时才展示userId
  userId?: string;
};

export type RepositoryOperationResponseType = {
  knowledgeList: KnowledgeResponseType[];
  inEdges: KnowledgeEdgeResponseType[];
  outEdges: KnowledgeEdgeResponseType[];
}

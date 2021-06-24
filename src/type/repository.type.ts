/**
 * @author wizard.song
 * @date 2021/05/29 11:38
 */

import { RepositoryEnum } from '../constant/module/account.constant';
import { KnowledgeResponseType, KnowledgeEdgeResponseType } from './knowledge.type';

export type RepositoryResponseType = {
  id: string;
  name: string;
  type: RepositoryEnum;
  // admin调用时才展示userId
  userId?: string;
  createdAt: Date;
  updatedAt: Date;
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

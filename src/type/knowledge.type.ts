/**
 * @author wizard.song
 * @date 2020/09/23 27:07
 */

export type KnowledgeResponseType = {
  id: string;
  name: string;
  knowledgeBaseTypeId: string;
  createdAt: Date;
  updatedAt: Date;
  // admin调用时才展示userId
  userId?: string;
  domainId?: string;
  isCertificated?: boolean;
  description?: string;
  knowledgeLevelId?: string;
};

export type KnowledgePageListResponseType = {
  list: KnowledgeResponseType[];
  total: number;
};

export type KnowledgeBaseTypeResponseType = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type KnowledgeBaseTypePageListResponseType = {
  list: KnowledgeBaseTypeResponseType[];
  total: number;
};

export type KnowledgeEdgeResponseType = {
  id: string;
  originKnowledgeId: string;
  targetKnowledgeId: string;
  knowledgeId: string;
  createdAt: Date;
  updatedAt: Date;
  // admin调用时才展示userId
  userId?: string;
  weight?: number;
  description?: string;
  isCertificated?: boolean;
}

export type KnowledgeEdgePageListResponseType = {
  list: KnowledgeEdgeResponseType[];
  total: number;
}

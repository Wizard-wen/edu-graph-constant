/**
 * @author wizard.song
 * @date 2021/07/11 22:19
 */

export type KnowledgeEdgeModelType = {
  id: string;
  originKnowledgeEntityId: string;
  targetKnowledgeEntityId: string;
  edgeRepositoryId: string;
  knowledgeEntityId: string;
  createdAt: Date;
  updatedAt: Date;
  // admin调用时才展示userId
  userId?: string;
  weight?: number;
  description?: string;
  isCertificated?: boolean;
}
export type KnowledgeEdgeResponseType = KnowledgeEdgeModelType;
export type KnowledgeEdgePageListResponseType = {
  list: KnowledgeEdgeResponseType[];
  total: number;
}

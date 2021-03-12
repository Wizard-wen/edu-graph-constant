/**
 * @author wizard.song
 * @date 2020/09/23 27:07
 */

export type KnowledgeResponseType = {
  name: string;
  knowledgeBaseTypeId: string;
  id?: string;
  preKnowledgeIdList?: string[];
  extendKnowledgeIdList?: string[];
  sectionId?: string;
  domainId?: string;
};

export type KnowledgePageListType = {
  pageList: KnowledgeResponseType[],
  total: number
};

export type KnowledgeBaseTypeResponseType = {
  name: string;
  key: string;
  id?: string;
};

export type KnowledgeBaseTypePageListType = {
  pageList: KnowledgeBaseTypeResponseType[],
  total: number
};

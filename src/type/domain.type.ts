/**
 *
 */

export type DomainResponseType = {
  id: string;
  name: string;
  isCertificated: boolean;
  description?: string;
  parentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type DomainTreeNodeResponseType = DomainResponseType & {
  // tree字段
  title: string;
  key: string;
  children?: DomainTreeNodeResponseType[];
};

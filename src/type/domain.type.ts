/**
 * @author wizard.song
 * @date 2021/07/12 23:24
 */

export type DomainModelType = {
  id: string;
  name: string;
  isCertificated: boolean;
  description?: string;
  parentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type DomainResponseType = DomainModelType;

export type DomainTreeNodeResponseType = DomainResponseType & {
  // tree字段
  title: string;
  key: string;
  children?: DomainTreeNodeResponseType[];
};

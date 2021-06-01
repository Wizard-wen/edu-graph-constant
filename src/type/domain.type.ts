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

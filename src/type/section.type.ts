/**
 * @author wizard.song
 * @date 2021/05/29 11:38
 */

export type SectionResponseType = {
  id: string;
  key: string;
  name: string;
  title: string;
  repositoryId: string;
  parentId?: string;
}

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

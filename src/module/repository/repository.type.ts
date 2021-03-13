/**
 *
 */

import { RepositoryType } from '../../constant/account';

export type RepositoryResponseType = {
  id: string;
  name: string;
  type: RepositoryType
};

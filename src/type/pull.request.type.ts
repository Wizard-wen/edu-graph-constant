/**
 * @author wizard.song
 * @date 2021/04/30 21:52
 */

import {
  PullRequestStatusEnum,
} from '..';
import { PullRequestLogType } from './log.type';
import {
  PullRequestEntityType
} from '..';

export type PullRequestModelType = {
  id: string;
  entityId: string;
  entityType: PullRequestEntityType,
  status: PullRequestStatusEnum,
  createdAt: Date;
  updatedAt?: Date;
  mergedAt?: Date;
  recordList?: PullRequestLogType[]
}

export type PullRequestResponseType = PullRequestModelType;

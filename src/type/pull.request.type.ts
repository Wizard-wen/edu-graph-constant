/**
 * @author wizard.song
 * @date 2021/04/30 21:52
 */

import {
  PullRequestStatusEnum,
} from '../constant/module/pull.request.constant';
import { PullRequestLogType } from './log.type';
import { PublicEntityEnum } from '../constant/public/common.constant';

export type PullRequestResponseType = {
  id: string;
  entityId: string;
  pullRequestEntityType: PublicEntityEnum,
  status: PullRequestStatusEnum,
  createdAt: Date;
  updatedAt?: Date;
  mergedAt?: Date;
  recordList?: PullRequestLogType[]
}

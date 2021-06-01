/**
 * @author songxiwen
 * @date 2021/04/30 21:54
 */

import { PullRequestOperatorEnum, PullRequestStatusEnum } from '../constant/module/pull.request.constant';

export type PullRequestLogType = {
  operatorType: PullRequestOperatorEnum;
  operatorId: string;
  action: PullRequestStatusEnum;
  message: string;
};

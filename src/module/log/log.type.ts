import { PullRequestOperatorType, PullRequestStatus } from '../../constant/pull.request';

export type PullRequestLog = {
  operatorType: PullRequestOperatorType;
  operatorId: string;
  action: PullRequestStatus;
  message: string;
};

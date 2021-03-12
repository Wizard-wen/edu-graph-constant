import { PullRequestOperatorType, PullRequestStatus } from '../../constant';

export type PullRequestLog = {
  operatorType: PullRequestOperatorType;
  operatorId: string;
  action: PullRequestStatus;
  message: string;
};

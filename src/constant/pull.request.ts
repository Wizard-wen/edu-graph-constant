/**
 *
 */

export enum PullRequestEntityType {
  Domain = 'domain',
  Knowledge = 'knowledge'
}

export enum PullRequestStatus {
  Pending = 'pending',
  Merged = 'merged',
  Failed = 'failed',
  Closed = 'closed'
}

export enum PullRequestOperatorType {
  User = 'user',
  Admin = 'admin'
}

/**
 * @author wizard
 * @date 2020/12/30 22:24
 */

export enum DatabaseEnum {
  // account
  User = 'User',
  Admin = 'Admin',
  Organization = 'Organization',
  MailCode = 'MailCode',
  // auth
  AdminToken = 'AdminToken',
  Token = 'Token',
  AdminRole = 'AdminRole',
  AdminPageRouteAuth = 'AdminPageRouteAuth',
  AdminPageOperationAuth = 'AdminPageOperationAuth',
  AdminAPIAuth = 'AdminAPIAuth',
  // file
  RichText = 'RichText',
  File = 'File',
  // domain
  Domain = 'Domain',
  // knowledge
  KnowledgeGraphEdge = 'KnowledgeGraphEdge',
  KnowledgeBaseType = 'KnowledgeBaseType',
  Knowledge = 'Knowledge',
  // level
  Level = 'Level',
  LevelBaseType = 'LevelBaseType',
  // section
  Section = 'Section',
  SectionEntity = 'SectionEntity',
  SectionArticle = 'SectionArticle',
  // exercise
  Exercise = 'Exercise',
  // repository
  Repository = 'Repository',
  RepositoryEntity = 'RepositoryEntity',
  // csp report
  CSPReport = 'CSPReport',
  // comment
  Comment = 'Comment',
  // pull request
  PullRequest = 'PullRequest',
  // point
  Point = 'Point',
  PointDetail = 'PointDetail',
  // history
  FootPrintRecord = 'FootPrintRecord',
  SearchRecord = 'SearchRecord',
  // tag
  Tag = 'Tag',
  EntityTag = 'EntityTag',
  // log
  Log = 'Log',
  // star
  Star = 'Star',
  StarDetail = 'StarDetail',
  // entity
  Entity = 'Entity'
}

/**
 *
 */

export type ArticleModelType = {
  id: string;
  userId: string;
  content: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}
export type ArticleResponseType = ArticleModelType;

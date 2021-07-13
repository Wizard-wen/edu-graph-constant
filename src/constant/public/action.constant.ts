/**
 * @author wizard.song
 * @date
 * @description 总结所有的侵入型操作，为后续做回退 & 经验值系统做准备
 */

export enum RepositoryActionEnum {
  // repository
  CreateRepository = '',
  RemoveRepository = '',

  // knowledge edge
  BindKnowledgeEdge = '',
  UnbindKnowledgeEdge = '',

  // knowledge
  CreateKnowledge = '',
  // 删除某一个知识点，只有所有人才能执行这个操作
  // 同时删除作者创建知识点时建立的绑定关系
  // 但是不会删除其他用户在自己的仓库中建立的绑定关系
  RemoveKnowledge = '',
  // 解绑某一个知识点
  // 解绑知识点后，应当同时删除知识点在section下的绑定关系
  UnbindKnowledgeFromRepository = '',

  // section
  // 创建section同时创建article
  CreateSection = '',
  // 删除section
  // 同时删除section下的article
  // 同时递归删除section下的子级section
  // 同时被删除section及子级section的exercise & knowledge关联关系
  RemoveSection = '',
  // 若repositoryEntity表中没有这个关联关系，要创建关联
  BindKnowledgeToSection = '',
  // 若repositoryEntity表中没有这个关联关系，要创建关联
  BindExerciseToSection = '',
  // 解绑时不必删除repositoryEntity表中的关联关系
  UnBindKnowledgeToSection = '',
  // 解绑时不必删除repositoryEntity表中的关联关系
  UnBindExerciseToSection = '',

  // exercise

  // tag
  BindTag = '',
  UnbindTag = '',

  // star
  Star = '',
  UnStar = '',

  // pull request
  CreatePullRequest = '',
  ChangeFailedIntoPending = '',
  ClosePullRequest = '',
}

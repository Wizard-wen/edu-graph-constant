/**
 * @author wizard.song
 * @date 2021/07/12 22:56
 */

export type ExerciseModelType = {
  id: string;
  name: string;
  content: string;
  answer?: string;
  isCertificated?: boolean;
  answerInstep?: string[];
  knowledgeList?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type ExerciseResponseType = ExerciseModelType;

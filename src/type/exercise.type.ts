/**
 *
 */

export type ExerciseResponseType = {
  id: string;
  name: string;
  content: string;
  answer?: string;
  isCertificated?: boolean;
  answerInstep?: string[];
  knowledgeList?: string[];
}

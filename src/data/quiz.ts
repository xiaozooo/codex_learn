import { allCommands } from "./content";

export type QuizQuestion = {
  id: string;
  prompt: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

function rotateOptions(correctOption: string, distractors: string[], seed: number) {
  const options = [correctOption, ...distractors];
  let correctAnswer = seed % options.length;

  while (correctAnswer > 0) {
    options.unshift(options.pop() as string);
    correctAnswer -= 1;
  }

  return { options, correctAnswer: seed % options.length };
}

function commandDistractors(index: number) {
  const pool = allCommands.filter((_, currentIndex) => currentIndex !== index);
  return [pool[index % pool.length], pool[(index + 7) % pool.length], pool[(index + 13) % pool.length]];
}

function createPromptForCommand(index: number) {
  const command = allCommands[index];
  const distractors = commandDistractors(index);
  const commandQuestion = rotateOptions(
    command.title,
    distractors.map((item) => item.title),
    index,
  );
  const descriptionQuestion = rotateOptions(
    command.description.trim(),
    distractors.map((item) => item.description.trim()),
    index + 1,
  );
  const scenarioQuestion = rotateOptions(
    command.title,
    distractors.map((item) => item.title),
    index + 2,
  );

  return [
    {
      id: `${command.id}-usage`,
      prompt: `以下哪个指令用于${command.description.trim()}？`,
      options: commandQuestion.options,
      correctAnswer: commandQuestion.correctAnswer,
      explanation: `${command.title} 的作用是：${command.description.trim()}`,
    },
    {
      id: `${command.id}-meaning`,
      prompt: `关于 \`${command.title}\`，哪项描述是正确的？`,
      options: descriptionQuestion.options,
      correctAnswer: descriptionQuestion.correctAnswer,
      explanation: `${command.title} 属于「${command.sectionTitle}」，作用是：${command.description.trim()}`,
    },
    {
      id: `${command.id}-scenario`,
      prompt: `如果你想${command.description.trim()}，最合适的命令是哪个？`,
      options: scenarioQuestion.options,
      correctAnswer: scenarioQuestion.correctAnswer,
      explanation: `遇到这个场景时，应优先使用 ${command.title}。`,
    },
  ];
}

export const quizQuestions: QuizQuestion[] = allCommands
  .flatMap((_, index) => createPromptForCommand(index))
  .slice(0, 100);

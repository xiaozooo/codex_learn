export type QuizQuestion = {
  id: string;
  prompt: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    prompt: "开始动手前，最稳妥的第一步是什么？",
    options: ["先看仓库结构和现有代码", "直接修改页面", "先写部署脚本", "先提交 PR"],
    correctAnswer: 0,
    explanation: "先理解当前环境，才能避免错误假设和无效修改。",
  },
  {
    id: "q2",
    prompt: "下面哪种需求表达最利于 Codex 正确执行？",
    options: [
      "帮我优化一下",
      "把首页改好看",
      "把首页首屏改成突出测验入口，保留 3 个学习模块",
      "随便改改就行",
    ],
    correctAnswer: 2,
    explanation: "目标越可验证，执行偏差越小。",
  },
  {
    id: "q3",
    prompt: "为什么要在修改前先说明部署方式？",
    options: [
      "只是为了写 README",
      "因为部署会影响路由、构建路径和工作流配置",
      "为了减少页面样式工作",
      "其实不用提前说明",
    ],
    correctAnswer: 1,
    explanation: "像 GitHub Pages 这种静态托管，会直接影响路由和资源 base 配置。",
  },
  {
    id: "q4",
    prompt: "TDD 的核心顺序是什么？",
    options: ["先写实现再补测试", "先写失败测试，再写最少实现", "先重构再考虑测试", "先写文档再测试"],
    correctAnswer: 1,
    explanation: "先看到正确失败，才能证明测试真能覆盖目标行为。",
  },
  {
    id: "q5",
    prompt: "针对纯静态 GitHub Pages 站点，哪种路由策略最稳妥？",
    options: ["HashRouter", "依赖服务端重写的 BrowserRouter", "不使用任何路由", "动态服务端路由"],
    correctAnswer: 0,
    explanation: "HashRouter 不依赖服务器回退规则，兼容性最好。",
  },
  {
    id: "q6",
    prompt: "哪种做法更符合高效协作？",
    options: ["把所有文案硬编码进组件", "把内容和题库拆成独立数据文件", "把所有逻辑写在一个大组件里", "只做视觉不做结构"],
    correctAnswer: 1,
    explanation: "内容和展示解耦后，后续维护和扩展都更轻松。",
  },
  {
    id: "q7",
    prompt: "完成改动后，哪项说法是正确的？",
    options: ["只要代码看起来没问题就行", "至少重新运行测试和构建，再汇报结果", "让用户自己验证", "只截图不验证"],
    correctAnswer: 1,
    explanation: "没有新鲜验证证据，就不能宣称任务完成。",
  },
  {
    id: "q8",
    prompt: "对 Codex 学习站首版 MVP 来说，以下哪项最应该暂缓？",
    options: ["3 个学习模块", "统一小测验", "GitHub Actions 自动部署", "账号系统与云端进度同步"],
    correctAnswer: 3,
    explanation: "账号和云同步明显超出首版 MVP 的必要范围。",
  },
];

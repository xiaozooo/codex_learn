export type LearningItem = {
  title: string;
  description: string;
  example?: string;
};

export type LearningSection = {
  id: string;
  title: string;
  summary: string;
  items: LearningItem[];
};

export const learningSections: LearningSection[] = [
  {
    id: "commands",
    title: "快捷命令",
    summary: "先抓住定位、阅读、验证这三类高频命令，建立最短反馈回路。",
    items: [
      {
        title: "快速搜索文件",
        description: "优先用快速搜索命令定位入口文件、配置和目标组件，避免凭感觉翻目录。",
        example: "常见动作：先找 package.json、路由入口、测试文件，再决定修改范围。",
      },
      {
        title: "聚焦读取上下文",
        description: "只读和问题直接相关的文件片段，先理解边界，再决定是否继续展开。",
        example: "先看组件接口和调用点，不要一上来把整仓代码读一遍。",
      },
      {
        title: "先验证再宣称完成",
        description: "每次修改后都跑最小可证明命令，例如测试、构建或预览，而不是靠主观判断。",
        example: "页面改动至少验证单测和生产构建，避免“应该没问题”。",
      },
    ],
  },
  {
    id: "tips",
    title: "使用技巧",
    summary: "高质量输入决定结果质量，重点是把任务边界、约束和验收标准说清楚。",
    items: [
      {
        title: "把目标说成可验收结果",
        description: "不要只说“改一下首页”，要说明想达到什么效果、有哪些保留项和不能动的部分。",
        example: "更好的说法：首屏强调测验入口，保留原有三段式学习结构。",
      },
      {
        title: "把限制条件前置",
        description: "技术栈、部署方式、语言、是否需要测试和文档，都应该尽早明确。",
        example: "像“必须能推 GitHub 并用 Actions 自动部署”就是典型关键约束。",
      },
      {
        title: "让 Codex 先看环境",
        description: "复杂任务先让它检查仓库结构、依赖和现有实现，通常比直接给方案更稳。",
        example: "先探索再写代码，能减少误判路径和重复返工。",
      },
    ],
  },
  {
    id: "workflow",
    title: "实战流程",
    summary: "按固定流程推进：理解需求、查环境、写测试、做最小改动、验证输出。",
    items: [
      {
        title: "收敛任务范围",
        description: "把需求拆成页面结构、交互逻辑、工程配置和部署四个部分，逐步落实。",
        example: "先定 MVP，再补细节，避免一开始把需求做成课程平台。",
      },
      {
        title: "先红后绿",
        description: "先写失败测试证明需求，再实现最少代码让测试通过，最后再整理结构。",
        example: "新功能先验证失败原因正确，再开始写生产代码。",
      },
      {
        title: "交付前完整验证",
        description: "至少重新执行测试和构建；如果是站点项目，还要确认部署配置、路径和说明文档都完整。",
        example: "把运行命令、构建结果和部署入口写进 README，降低接手成本。",
      },
    ],
  },
];

export type LearningItem = {
  id: string;
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
    id: "top-level-commands",
    title: "顶层命令",
    summary: "直接来自 `codex --help` 的主命令，用来切换不同工作模式。",
    items: [
      { id: "exec", title: "codex exec", description: "以非交互方式执行一次 Codex 任务，适合脚本或 CI。 " },
      { id: "review", title: "codex review", description: "以非交互方式运行代码审查流程。 " },
      { id: "login", title: "codex login", description: "管理登录流程与鉴权状态。 " },
      { id: "logout", title: "codex logout", description: "移除本地保存的认证凭据。 " },
      { id: "mcp", title: "codex mcp", description: "管理外部 MCP 服务器配置。 " },
      { id: "mcp-server", title: "codex mcp-server", description: "把 Codex 作为 MCP stdio 服务器启动。 " },
      { id: "app-server", title: "codex app-server", description: "启动实验性的应用服务或相关工具链。 " },
      { id: "completion", title: "codex completion", description: "生成 shell 自动补全脚本。 " },
      { id: "sandbox", title: "codex sandbox", description: "在 Codex 提供的沙箱中运行命令。 " },
      { id: "debug", title: "codex debug", description: "打开调试相关工具。 " },
      { id: "apply", title: "codex apply", description: "把最近一次 agent 生成的 diff 作为 `git apply` 应用到当前工作区。 " },
      { id: "resume", title: "codex resume", description: "恢复之前的交互式会话，可继续最近一次会话。 " },
      { id: "fork", title: "codex fork", description: "从之前的交互式会话分叉出一个新会话继续工作。 " },
      { id: "cloud", title: "codex cloud", description: "浏览 Codex Cloud 任务并把变更应用到本地。 " },
      { id: "features", title: "codex features", description: "查看或检查功能开关状态。 " },
      { id: "help", title: "codex help", description: "输出帮助信息或某个子命令的帮助。 " },
    ],
  },
  {
    id: "global-options",
    title: "全局选项",
    summary: "这些选项可在启动 Codex 时附加，用来调整模型、沙箱、审批和运行环境。",
    items: [
      { id: "config", title: "-c, --config <key=value>", description: "临时覆盖 `config.toml` 中的配置项。 " },
      { id: "enable", title: "--enable <FEATURE>", description: "临时启用某个功能开关，可重复传入。 " },
      { id: "disable", title: "--disable <FEATURE>", description: "临时关闭某个功能开关，可重复传入。 " },
      { id: "image", title: "-i, --image <FILE>", description: "给初始提示附加图片文件。 " },
      { id: "model", title: "-m, --model <MODEL>", description: "指定当前会话要使用的模型。 " },
      { id: "oss", title: "--oss", description: "快速切换到本地开源模型提供方。 " },
      { id: "local-provider", title: "--local-provider <OSS_PROVIDER>", description: "指定本地开源模型提供方，例如 `lmstudio` 或 `ollama`。 " },
      { id: "profile", title: "-p, --profile <CONFIG_PROFILE>", description: "载入 `config.toml` 中的某个配置档。 " },
      { id: "sandbox-option", title: "-s, --sandbox <SANDBOX_MODE>", description: "选择命令执行时采用的沙箱模式。 " },
      { id: "approval", title: "-a, --ask-for-approval <APPROVAL_POLICY>", description: "配置何时需要人工审批后才能执行命令。 " },
      { id: "full-auto", title: "--full-auto", description: "使用低摩擦自动执行组合：`on-request + workspace-write`。 " },
      { id: "danger", title: "--dangerously-bypass-approvals-and-sandbox", description: "跳过审批与沙箱保护，直接执行命令。 " },
      { id: "cd", title: "-C, --cd <DIR>", description: "指定 agent 的工作根目录。 " },
      { id: "search", title: "--search", description: "开启实时网络搜索能力。 " },
      { id: "add-dir", title: "--add-dir <DIR>", description: "在主工作区之外额外开放可写目录。 " },
      { id: "no-alt-screen", title: "--no-alt-screen", description: "关闭终端 alternate screen，保留滚动历史。 " },
      { id: "help-option", title: "-h, --help", description: "输出简要帮助信息。 " },
      { id: "version", title: "-V, --version", description: "显示当前 Codex CLI 版本。 " },
    ],
  },
  {
    id: "mcp-subcommands",
    title: "MCP 子命令",
    summary: "这些命令来自 `codex mcp --help`，用于维护外部 MCP 服务接入。",
    items: [
      { id: "mcp-list", title: "codex mcp list", description: "列出当前已配置的 MCP 服务器。 " },
      { id: "mcp-get", title: "codex mcp get", description: "查看指定 MCP 服务器的详细配置。 " },
      { id: "mcp-add", title: "codex mcp add", description: "新增一个 MCP 服务器配置。 " },
      { id: "mcp-remove", title: "codex mcp remove", description: "移除某个 MCP 服务器配置。 " },
      { id: "mcp-login", title: "codex mcp login", description: "为 MCP 服务执行登录或授权。 " },
      { id: "mcp-logout", title: "codex mcp logout", description: "清除某个 MCP 服务的登录状态。 " },
    ],
  },
];

export const allCommands = learningSections.flatMap((section) =>
  section.items.map((item) => ({
    ...item,
    sectionTitle: section.title,
  })),
);

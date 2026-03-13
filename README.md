# Codex 学习速成

一个基于 `Vite + React` 的中文学习站，用来快速学习 Codex 的快捷命令、使用技巧和实战流程，并通过统一小测验检验掌握程度。

## 本地开发

```bash
npm install
npm run dev
```

默认开发地址由 Vite 输出。

## 测试与构建

```bash
npm test
npm run build
```

## GitHub Pages 自动部署

仓库已包含 GitHub Actions 工作流，推送到默认分支后会自动：

1. 安装依赖
2. 运行测试
3. 构建站点
4. 发布到 GitHub Pages

### 使用方式

1. 将仓库推送到 GitHub。
2. 在 GitHub 仓库设置里启用 `Pages`，来源选择 `GitHub Actions`。
3. 确保默认分支为 `main`。

`vite.config.ts` 会自动读取 `GITHUB_REPOSITORY` 来生成 Pages 需要的 `base` 路径，因此独立仓库场景下不需要额外手改仓库名。

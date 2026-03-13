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
2. 在 GitHub 仓库设置里打开 `Pages`，来源选择 `GitHub Actions`。
3. 确保默认分支为 `main`。

如果没有先启用 `Pages`，`actions/configure-pages` 会报 `Get Pages site failed: Not Found`。这是 GitHub 的仓库设置问题，不是前端构建问题。

### 首次部署的两种方式

- 推荐：先在仓库 `Settings > Pages` 中手动启用一次 `GitHub Actions`，之后每次推送 `main` 都会自动部署。
- 可选：新增仓库密钥 `PAGES_PAT`，值为一个拥有 `repo` 和 `pages:write` 权限的 Personal Access Token。工作流会在首次运行时尝试自动启用 Pages。

`vite.config.ts` 会自动读取 `GITHUB_REPOSITORY` 来生成 Pages 需要的 `base` 路径，因此独立仓库场景下不需要额外手改仓库名。

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  it("renders the command reference and quiz entry", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: "Codex 学习速成" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "全部 CLI 指令" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "顶层命令" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "全局选项" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "MCP 子命令" })).toBeInTheDocument();
    expect(screen.getAllByText("codex exec").length).toBeGreaterThan(0);
    expect(screen.getAllByText("codex mcp add").length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "开始小测" })).toHaveLength(2);
  });

  it("scrolls to the command reference when entering study mode", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    await user.click(screen.getAllByText("进入学习")[0]);

    expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalledTimes(1);
  });

  it("shows five random questions and can restart the quiz", async () => {
    const user = userEvent.setup();

    const { container } = render(
      <MemoryRouter initialEntries={["/quiz"]}>
        <App />
      </MemoryRouter>,
    );

    expect(container.querySelectorAll(".quiz-card")).toHaveLength(5);
    await user.click(screen.getByRole("button", { name: "提交答案" }));

    expect(screen.getByText("你的得分")).toBeInTheDocument();
    expect(screen.getByText("0 / 5")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "重新测验" }));

    expect(screen.queryByText("你的得分")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "提交答案" })).toBeInTheDocument();
    expect(container.querySelectorAll(".quiz-card")).toHaveLength(5);
  });
});

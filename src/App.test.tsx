import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the three learning modules and quiz entry", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: "Codex 学习速成" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "快捷命令" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "使用技巧" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "实战流程" })).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "开始小测" })).toHaveLength(2);
  });

  it("shows the quiz result and can restart the quiz", async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={["/quiz"]}>
        <App />
      </MemoryRouter>,
    );

    await user.click(screen.getByLabelText("先看仓库结构和现有代码"));
    await user.click(screen.getByRole("button", { name: "提交答案" }));

    expect(screen.getByText("你的得分")).toBeInTheDocument();
    expect(screen.getByText("1 / 8")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "重新测验" }));

    expect(screen.queryByText("你的得分")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "提交答案" })).toBeInTheDocument();
  });
});

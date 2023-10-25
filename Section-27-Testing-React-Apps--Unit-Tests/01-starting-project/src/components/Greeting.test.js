import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("renders 'Ahmed Hesham' as a text", () => {
    // Arrange
    render(<Greeting />);

    // Act
    // ... nothing

    // Assert
    const ahmedHeshamElement = screen.getByText("Ahmed Hesham");
    expect(ahmedHeshamElement).toBeInTheDocument();
  });

  test("renders 'MERN Stack Developer' if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // Assert
    const outputElement = screen.getByText("MERN Stack Developer");
    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'The Ultimate Developer' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);

    // Assert
    const paraElement = screen.getByText("Ultimate Developer", {
      exact: false,
    });
    expect(paraElement).toBeInTheDocument();
  });

  test("does not 'MERN Stack Developer' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);
    // Act
    const btnElement = screen.getByRole("button");
    userEvent.click(btnElement);

    // Assert
    const outputElement = screen.queryByText("MERN Stack Developer");
    expect(outputElement).toBeNull();
  });
});

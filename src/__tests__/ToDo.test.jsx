import ToDo from "../components/ToDo";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

test("Check if ToDo is visible", () => {
  render(<ToDo />);
});

test("Is ToDo Heading in the Document", () => {
  render(<ToDo />);

  const heading = screen.getByRole("heading", {
    name: "My Trinkets",
  });

  expect(heading).toBeVisible();
});

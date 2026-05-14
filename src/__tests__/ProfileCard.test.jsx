import ProfileCard from "../components/ProfileCard";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

test("Check if ProfileCard is visible", () => {
  render(<ProfileCard />);

  expect(screen.getByTestId("profile-card-component")).toBeInTheDocument();
});

test("Is Profile Heading There", () => {
  render(<ProfileCard />);
  // loads component in virtual DOM specific for testing

  const heading = screen.getByRole("heading", {
    name: "Student Profile",
  });
  console.log(heading);
  // after the profile card is rendered, the getByRole method applied on screen from the testing library, and checks for the first instance of a heading element and if the name is "Student Profile"
  expect(heading).toBeVisible();
  // after the first test passes this second test checks if both that first test passes and if is visible, failing the test if it fails the expectation
});

test("Not visible prior to Button click", async () => {
  render(<ProfileCard />);

  await userEvent.click(screen.getByRole("button", { name: "Show Details" }));
  expect(
    screen.getByText("Student is learning React Testing"),
  ).toBeInTheDocument();
});

test("Button click", async () => {
  const user = userEvent.setup();

  render(<ProfileCard />);

  const button = screen.getByRole("button", { name: "Show Details" });

  await user.click(button);

  expect(screen.getByText("Student is learning React Testing")).toBeVisible();
});

test("Button text change", async () => {
  render(<ProfileCard />);

  const user = userEvent.setup();

  const button = screen.getByRole("button", { name: "Show Details" });

  await user.click(button);

  // ! Go by happy path as testing library does not recognize difference between component name and component value post effect
  expect(screen.getByRole("button", { name: "Hide Details" })).toBeVisible();
});

test("typing inputs", async () => {
  const user = userEvent.setup();

  render(<ProfileCard />);

  const input = screen.getByLabelText("Name");

  await user.type(input, "Gary");

  expect(screen.getByText("Hello, Gary")).toBeVisible();
});

/* 
	! Things to avoid
	* testing state (ex: expect(something).toBe(true))
	* instead test state change (ex: screen.getByText("something").toBeVisible())
	* testing components without id's
*/

/* 
	? Challenge
	* build a todo
	* it should have heading "Todo Item"
	* show a todo item of "learn react Testing"
	* create a button that can mark it complete
	* once btn clicked, completed should appear next to it
	* click again, it should disappear
	
	* test following
	* heading visible
	* todo message visible
	* completed initially not visible
	* click shows complete
*/

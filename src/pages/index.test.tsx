import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Home } from "../pages/index";

test("The title should be displayed", async () => {
  render(<Home />);
  expect(screen.getByText("HBCU Database")).toBeInTheDocument();
});

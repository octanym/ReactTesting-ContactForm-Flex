import React from "react";
import { render } from "@testing-library/react";
import ContactForm from "./components/ContactForm";

test("renders ContactForm first label", () => {
  const { getByLabelText } = render(<ContactForm />);

  const firstInput = getByLabelText(/First Name/i)

  expect(firstInput).toBeInTheDocument();
});

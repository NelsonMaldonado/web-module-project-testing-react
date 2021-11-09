import React from "react"
import { render, screen, userEvent } from "@testing-library/react"
import Episode from "./Episode"

test("test to see if Episode component renders", () => {
  render(<Episode episode={true} />)

  const button = screen.queryByRole("button")
})

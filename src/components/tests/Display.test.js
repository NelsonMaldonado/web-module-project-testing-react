import React from "react"
import { render, screen, waitFor } from "@testing-library/react"
import Display from "../Display"
import userEvent from "@testing-library/user-event"
import mockFetchShow from "../../api/fetchShow"
jest.mock("../../api/fetchShow.js")

test("test if Display component renders without any passed in props", () => {
  render(<Display />)
})

///Tasks:
//1. Add in nessisary imports and values to establish the testing suite.
//2. Test that the Display component renders without any passed in props.
const testEpisode = {
  id: 1,
  name: "",
  image:
    "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
  season: 1,
  number: 1,
  summary: "",
  runtime: 1,
}

test("when the fetch button is pressed, the show component will display", async () => {
  render(<Display />)
  const button = screen.getByRole("button")
  userEvent.click(button)

  const findContainer = await screen.findByTestId("show-container")
  expect(findContainer).toBeInTheDocument()
})

test("when fetch button is pressed, amount of selected options rendered is equal to amount of seasons is test data", async () => {
  mockFetchShow.mockResolvedValueOnce(testEpisode)
  const displayFunction = jest.fn()
  render(<Display displayFunction={displayFunction} />)
  const button = screen.getByRole("button")
  userEvent.click(button)

  await waitFor(() => {
    expect(displayFunction).toHaveBeenCalled()
  })
})

//3. Rebuild or copy a show test data element as used in the previous set of tests.
//4. Test that when the fetch button is pressed, the show component will display. Make sure to account for the api call and change of state in building your test.
//5. Test that when the fetch button is pressed, the amount of select options rendered is equal to the amount of seasons in your test data.
//6. Notice the optional functional prop passed in to the Display component client code. Test that when the fetch button is pressed, this function is called.

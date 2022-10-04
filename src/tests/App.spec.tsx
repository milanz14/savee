import App from "../App";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

describe("Testing App.tsx", () => {
  it("Should render without crashing", () => {
    render(<App />);
  });
});

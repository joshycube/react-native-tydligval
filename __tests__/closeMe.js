import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import CloseMe from "../svg/closeMe";

describe("closeMe", () => {
  test("renders the SVG correctly", () => {
    const shallow = new ShallowRenderer();
    shallow.render(<CloseMe />);
    const result = shallow.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});

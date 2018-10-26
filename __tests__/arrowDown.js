import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import ArrowDown from "../svg/arrowDown";

describe("arrowDown", () => {
  test("renders the SVG correctly", () => {
    const shallow = new ShallowRenderer();
    shallow.render(<ArrowDown />);
    const result = shallow.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});

// @flow

import React from "react";
import Svg, { G, Polygon } from "react-native-svg";

/**
 *
 */
const ArrowDown = ({ color }: { color?: string }) => (
  <Svg height="10" width="10">
    <G stroke="none" strokeWidth="1" fill={color} fillRule="evenodd">
      <G transform="translate(-997.000000, -572.000000)" fill={color}>
        <G transform="translate(997.000000, 572.000000)">
          <Polygon points="0 0 5.21196348 6.21196348 10.9042969 0" />
        </G>
      </G>
    </G>
  </Svg>
);

ArrowDown.defaultProps = {
  color: "#ffffff",
};

export default ArrowDown;

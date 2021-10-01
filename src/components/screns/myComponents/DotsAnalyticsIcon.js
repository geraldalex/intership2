import React from "react";

import Svg, { Path,Circle, G, Defs } from "react-native-svg";
import { colors, perfectSize } from "../../../../theme";

const DotsAnalyticsIcon = () => {
  return (
    <Svg
      width={perfectSize(67)}
      height={perfectSize(14)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     
    >
      <Circle cx={24.896} cy={7} r={4} fill="#D0D2CF" />
      <G filter="url(#prefix__filter0_d)">
        <Circle cx={40.397} cy={7} r={5.5} fill="#035A31" />
      </G>
      <Defs></Defs>
    </Svg>
  );
};

export default DotsAnalyticsIcon;

import React from "react";

import Svg, {Circle} from "react-native-svg";
import { colors, perfectSize } from "../../../../theme";

const DotAnalyticsIcon = () => {
  return (
<Svg width={perfectSize(9)} height={perfectSize(9)} viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<Circle cx="4.5" cy="4.5" r="4.5" fill="#035A31"/>
</Svg>
  );
};

export default DotAnalyticsIcon;

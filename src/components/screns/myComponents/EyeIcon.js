import React from "react";

import Svg, { Path, G, ClipPath, Defs, Rect } from "react-native-svg";


const EyeIcon = () => {
  return (
    <Svg
      style={{ paddingRight: "15%" }}
      width="21"
      height="17"
      viewBox="0 0 21 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0)">
        <Path
          d="M10.3401 5.80749L13.3462 8.24102L13.3605 8.11355C13.3605 6.83497 12.077 5.7959 10.4976 5.7959L10.3401 5.80749Z"
          fill="#3B5998"
        />
        <Path
          d="M10.4975 4.2507C13.1315 4.2507 15.2692 5.98123 15.2692 8.11347C15.2692 8.61177 15.1451 9.08689 14.9304 9.52337L17.7218 11.7831C19.1628 10.8097 20.2985 9.55042 20.9999 8.11347C19.3442 4.72198 15.274 2.31934 10.4976 2.31934C9.16149 2.31934 7.88272 2.51246 6.69458 2.86011L8.75593 4.52495C9.29507 4.355 9.88198 4.2507 10.4975 4.2507Z"
          fill="#3B5998"
        />
        <Path
          d="M0.954314 2.14565L3.13018 3.90707L3.56442 4.25859C1.98977 5.25518 0.744376 6.58012 0 8.11361C1.651 11.5051 5.72597 13.9077 10.4976 13.9077C11.9769 13.9077 13.3892 13.676 14.6824 13.2549L15.088 13.5833L17.8699 15.8391L19.0866 14.858L2.17108 1.16064L0.954314 2.14565ZM6.23178 6.41401L7.70622 7.6076C7.66327 7.77371 7.63464 7.93979 7.63464 8.11361C7.63464 9.3922 8.9182 10.4313 10.4976 10.4313C10.7124 10.4313 10.9175 10.4081 11.118 10.3733L12.5924 11.5669C11.9578 11.8219 11.2516 11.9764 10.4976 11.9764C7.86368 11.9764 5.72597 10.2459 5.72597 8.11361C5.72597 7.50331 5.91685 6.93161 6.23178 6.41401Z"
          fill="#3B5998"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="21" height="17" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default EyeIcon;

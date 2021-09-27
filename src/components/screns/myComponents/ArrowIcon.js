import React from "react";

import Svg, {Path} from 'react-native-svg'
import { colors, perfectSize } from '../../../../theme'

const ArrowIcon = () => {
    return (
        <Svg width={perfectSize(16)} height={perfectSize(7)} viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M12.01 3.00008H1C0.45 3.00008 0 3.45008 0 4.00008C0 4.55008 0.45 5.00008 1 5.00008H12.01V6.79008C12.01 7.24008 12.55 7.46008 12.86 7.14008L15.64 4.35008C15.83 4.15008 15.83 3.84008 15.64 3.64008L12.86 0.850078C12.55 0.530078 12.01 0.760078 12.01 1.20008V3.00008Z" fill={colors.redColor}/>
        </Svg>
    )
}

export default ArrowIcon



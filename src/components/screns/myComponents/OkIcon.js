import React from "react";
import Svg, {Path} from 'react-native-svg'
import { colors, perfectSize } from '../../../../theme'

const OkIcon = () => {
    return (
        <Svg width={perfectSize(19)} height={perfectSize(16)} viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M6.03809 12.6234L1.53383 7.64802L0 9.33035L6.03809 16L19 1.68233L17.477 0L6.03809 12.6234Z" fill={colors.greenColor}/>
</Svg>
    )
}

export default OkIcon
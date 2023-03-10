import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const SvgMist = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 3.994v-.006H4.34l5.43-1.962-.001-.001a1 1 0 0 1 .36-.024h.001a1 1 0 0 1 .726.455 1 1 0 0 1 .107.85 1 1 0 0 1-.59.621.979.979 0 0 1-.373.067ZM0 3.43v2.559h9.98a2.996 2.996 0 0 0 2.203-.931 2.996 2.996 0 0 0 .8-2.437v-.002a2.993 2.993 0 0 0-1.38-2.162 2.989 2.989 0 0 0-1.24-.437A2.993 2.993 0 0 0 9.09.146V.145l-.03.011-.004.001L0 3.43Zm0 8.568v2.055l13.206 4.698a3.498 3.498 0 0 0 4.688-4.106 3.498 3.498 0 0 0-3.37-2.644v-.003H0Zm14.51 2H5.815l8.17 2.906-.002.003a1.495 1.495 0 0 0 1.728-.521 1.497 1.497 0 0 0-1.2-2.384v-.004Zm4.508-9.75-.984-1.74-.002-.003.003-.001a3.999 3.999 0 0 1 5.885 4.283 4.001 4.001 0 0 1-3.926 3.203H0v-2h19.997v-.002a1.998 1.998 0 1 0-.979-3.74Z"
      fill="url(#Mist_svg__a)"
    />
    <Defs>
      <LinearGradient
        id="Mist_svg__a"
        x1={12}
        y1={0}
        x2={12}
        y2={19}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#CED3EA" />
        <Stop offset={1} stopColor="#7E83A9" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgMist;

import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const SvgClearSkyDay = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 3V0h2v3h-2Zm5.634.974 1.5-2.598 1.732 1-1.5 2.598-1.732-1ZM14 21a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0 2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm11-10h3v2h-3v-2Zm.624-6.866-2.598 1.5 1 1.732 2.598-1.5-1-1.732ZM6.134 2.376l1.5 2.598 1.732-1-1.5-2.598-1.732 1Zm-2.16 6.99-2.598-1.5 1-1.732 2.598 1.5-1 1.732ZM13 25v3h2v-3h-2ZM3 13H0v2h3v-2Zm-1.624 7.134 2.598-1.5 1 1.732-2.598 1.5-1-1.732Zm6.258 2.892-1.5 2.598 1.732 1 1.5-2.598-1.732-1Zm12.5 3.598-1.5-2.598 1.732-1 1.5 2.598-1.732 1Zm2.892-6.258 2.598 1.5 1-1.732-2.598-1.5-1 1.732Z"
      fill="url(#ClearSkyDay_svg__a)"
    />
    <Defs>
      <LinearGradient
        id="ClearSkyDay_svg__a"
        x1={14}
        y1={0}
        x2={14}
        y2={28}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#EFC977" />
        <Stop offset={1} stopColor="#E07256" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgClearSkyDay;

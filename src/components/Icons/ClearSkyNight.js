import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const SvgClearSkyNight = props => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.591 16.106c.46-1.718.523-3.449.246-5.095a7.043 7.043 0 0 1-1.89 3.03v.009A7.105 7.105 0 1 1 14 3.088a7.104 7.104 0 0 1 3.406-1.251c-.42-.165-.854-.309-1.3-.428C9.704-.306 3.124 3.492 1.409 9.894c-1.715 6.402 2.084 12.982 8.485 14.697 6.402 1.715 12.982-2.084 14.697-8.485Zm-2.545 1.16c-2.02 4.298-6.886 6.665-11.634 5.393-5.335-1.43-8.5-6.913-7.071-12.247a9.998 9.998 0 0 1 7.377-7.15 9.232 9.232 0 0 0 11.328 14.005Zm.814-11.652L22.336 4l-.525 1.614h-1.697l1.373.998-.524 1.614 1.373-.998 1.373.998-.524-1.614 1.373-.998H22.86ZM16.336 4l.524 1.614h1.698l-1.373.998.524 1.614-1.373-.998-1.373.998.524-1.614-1.373-.998h1.697L16.336 4Zm3.524 5.614L19.336 8l-.525 1.614h-1.697l1.373.998-.524 1.614 1.373-.998 1.373.998-.524-1.614 1.373-.998H19.86Z"
      fill="url(#ClearSkyNight_svg__a)"
    />
    <Defs>
      <LinearGradient
        id="ClearSkyNight_svg__a"
        x1={16.106}
        y1={1.409}
        x2={9.894}
        y2={24.591}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#F5BD52" />
        <Stop offset={1} stopColor="#F5DA79" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgClearSkyNight;

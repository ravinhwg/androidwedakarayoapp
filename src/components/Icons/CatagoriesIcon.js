import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function CatagoriesIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.1 0 25 25" {...props}>
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path
        d="M12 2l-5.5 9h11L12 2zm0 3.84L13.93 9h-3.87L12 5.84zM17.5 13c-2.49 0-4.5 2.01-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.01 4.5-4.5-2.01-4.5-4.5-4.5zm0 7a2.5 2.5 0 010-5 2.5 2.5 0 010 5zM3 21.5h8v-8H3v8zm2-6h4v4H5v-4z"
        fill={props.color}
      />
    </Svg>
  );
}

export default CatagoriesIcon;

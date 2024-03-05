import React from 'react';
import { IconProps } from 'types';

const ProjectIcon = ({ height = 24, width = 24, ...props }: IconProps) => (
  <svg
    width={width}
    height={height}
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 511.999 511.999"
    xmlSpace="preserve"
    fill="var(--colors-gray10)"
    {...props}
  >
    <g>
      <g>
        <rect x="239.301" y="200.345" width="139.129" height="66.782" />
      </g>
    </g>
    <g>
      <g>
        <rect x="239.301" y="100.173" width="139.129" height="66.782" />
      </g>
    </g>
    <g>
      <g>
        <rect x="133.563" y="100.173" width="72.347" height="166.954" />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M361.459,479.461l-88.762-29.588V400.69h-33.393v49.185l-88.757,29.585c-8.75,2.913-13.468,12.369-10.554,21.114
			c2.921,8.787,12.428,13.474,21.12,10.559l94.89-31.63l94.89,31.63c8.697,2.917,18.201-1.779,21.12-10.559
			C374.926,491.831,370.209,482.373,361.459,479.461z"
        />
      </g>
    </g>
    <g>
      <g>
        <path
          d="M495.301,333.909h-16.695V33.391h16.695c9.217,0,16.695-7.473,16.695-16.695C511.996,7.473,504.518,0,495.301,0
			C280.639,0,235.846,0,16.698,0C7.481,0,0.003,7.473,0.003,16.695c0,9.223,7.478,16.695,16.695,16.695h16.695v300.518H16.698
			c-9.217,0-16.695,7.473-16.695,16.695c0,9.223,7.478,16.695,16.695,16.695c56.3,0,426.674,0,478.602,0
			c9.217,0,16.695-7.473,16.695-16.695C511.996,341.382,504.518,333.909,495.301,333.909z M411.824,283.822
			c0,9.223-7.478,16.695-16.695,16.695H116.871c-9.217,0-16.695-7.473-16.695-16.695V83.477c0-9.223,7.478-16.695,16.695-16.695
			h278.257c9.217,0,16.695,7.473,16.695,16.695V283.822z"
        />
      </g>
    </g>
  </svg>
);

export default ProjectIcon;
